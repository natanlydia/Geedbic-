const express = require("express");

const ContactSubmission = require("../models/ContactSubmission");
const { formSubmitLimiter } = require("../middleware/rateLimiter");
const { isValidEmail } = require("../utils/validation");

const router = express.Router();

// POST /api/contact  — rate limited to 10 submissions per IP per 15 min
router.post("/", formSubmitLimiter, async (request, response, next) => {
  try {
    const name = request.body.name?.trim();
    const email = request.body.email?.trim().toLowerCase();
    const message = request.body.message?.trim();

    if (!name || !email || !message) {
      return response
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    if (!isValidEmail(email)) {
      return response
        .status(400)
        .json({ error: "Please enter a valid email address." });
    }

    const submission = await ContactSubmission.create({ name, email, message });

    return response.status(201).json({
      message: "Your message has been received.",
      id: submission._id.toString(),
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
