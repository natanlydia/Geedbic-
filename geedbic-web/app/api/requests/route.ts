import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import ServiceRequest from "@/models/ServiceRequest";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;

    const fullName           = String(body.fullName           ?? "").trim();
    const email              = String(body.email              ?? "").trim().toLowerCase();
    const phone              = String(body.phone              ?? "").trim();
    const companyName        = String(body.companyName        ?? "").trim();
    const service            = String(body.service            ?? "").trim();
    const budgetRange        = String(body.budgetRange        ?? "").trim();
    const timeline           = String(body.timeline           ?? "").trim();
    const projectDescription = String(body.projectDescription ?? "").trim();

    if (!fullName || !email || !service || !projectDescription) {
      return NextResponse.json(
        { error: "Full name, email, service, and project description are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await connectToDatabase();
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

    return NextResponse.json(
      { message: "Your request has been received.", id: submission._id.toString() },
      { status: 201 },
    );
  } catch (error) {
    console.error("Requests route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
