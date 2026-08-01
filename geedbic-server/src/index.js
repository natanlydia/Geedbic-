require("dotenv").config();

const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const pinoHttp = require("pino-http");

const logger = require("./utils/logger");
const { connectToDatabase } = require("./config/db");
const { generalLimiter } = require("./middleware/rateLimiter");
const articlesRouter = require("./routes/articles");
const contactRouter = require("./routes/contact");
const requestsRouter = require("./routes/requests");

const app = express();
const port = Number(process.env.PORT || 5000);

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

// ── Security headers ──────────────────────────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS."));
    },
  }),
);

// ── Request logging ───────────────────────────────────────────────────────────
app.use(pinoHttp({ logger }));

// ── Body parsing & XSS sanitization ──────────────────────────────────────────
app.use(express.json({ limit: "50kb" })); // reject oversized payloads
app.use(xssClean());                      // strip XSS from req.body / query

// ── General rate limit (all routes) ──────────────────────────────────────────
app.use(generalLimiter);

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/articles", articlesRouter);
app.use("/api/contact", contactRouter);
app.use("/api/requests", requestsRouter);

// ── Global error handler ──────────────────────────────────────────────────────
app.use((error, request, response, _next) => {
  request.log.error({ err: error }, "Unhandled server error");
  response.status(500).json({
    error:
      process.env.NODE_ENV === "production"
        ? "Something went wrong on the server."
        : error.message,
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────
async function start() {
  await connectToDatabase();

  app.listen(port, () => {
    logger.info(`GEEDBIC server running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  logger.error({ err: error }, "Failed to start server");
  process.exit(1);
});
