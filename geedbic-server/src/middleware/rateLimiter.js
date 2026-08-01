const rateLimit = require("express-rate-limit");

/**
 * Strict limiter for form submission endpoints (contact, requests).
 * Allows 10 submissions per IP per 15 minutes.
 */
const formSubmitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many submissions from this IP. Please try again later.",
  },
});

/**
 * General API limiter applied to all routes.
 * Allows 100 requests per IP per 15 minutes.
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests from this IP. Please try again later.",
  },
});

module.exports = { formSubmitLimiter, generalLimiter };
