import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;

    const name    = String(body.name    ?? "").trim();
    const email   = String(body.email   ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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
    const submission = await ContactSubmission.create({ name, email, message });

    return NextResponse.json(
      { message: "Your message has been received.", id: submission._id.toString() },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
