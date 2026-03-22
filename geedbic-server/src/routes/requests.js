const express = require("express");

const ServiceRequest = require("../models/ServiceRequest");
const { isValidEmail } = require("../utils/validation");

const router = express.Router();

router.post("/", async (request, response, next) => {
  try {
    const fullName = request.body.fullName?.trim();
    const email = request.body.email?.trim().toLowerCase();
    const phone = request.body.phone?.trim() ?? "";
    const companyName = request.body.companyName?.trim() ?? "";
    const service = request.body.service?.trim();
    const budgetRange = request.body.budgetRange?.trim() ?? "";
    const timeline = request.body.timeline?.trim() ?? "";
    const projectDescription = request.body.projectDescription?.trim();

    if (!fullName || !email || !service || !projectDescription) {
      return response.status(400).json({
        error:
          "Full name, email, service, and project description are required.",
      });
    }

    if (!isValidEmail(email)) {
      return response
        .status(400)
        .json({ error: "Please enter a valid email address." });
    }

    const submission = await ServiceRequest.create({
      fullName,
      email,
      phone,
      companyName,
      service,
      budgetRange,
      timeline,
      projectDescription,
    });

    return response.status(201).json({
      message: "Your request has been received.",
      id: submission._id.toString(),
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
