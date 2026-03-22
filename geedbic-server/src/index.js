require("dotenv").config();

const cors = require("cors");
const express = require("express");

const { connectToDatabase } = require("./config/db");
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
app.use(express.json());

app.get("/health", async (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/articles", articlesRouter);
app.use("/api/contact", contactRouter);
app.use("/api/requests", requestsRouter);

app.use((error, _request, response, _next) => {
  console.error("Server error:", error);
  response.status(500).json({
    error: error.message || "Something went wrong on the server.",
  });
});

async function start() {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`GEEDBIC server running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
