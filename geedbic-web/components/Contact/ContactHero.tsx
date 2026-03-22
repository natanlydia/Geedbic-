"use client";

import { FormEvent, useState } from "react";

import { getApiBaseUrl } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch(`${getApiBaseUrl()}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message right now.",
        );
      }

      setSubmitSuccess(
        result.message || "Your message has been sent successfully.",
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                Have a question?
              </h1>
              <h2 className="mb-6 text-2xl font-semibold text-blue-600">
                Send Us a Message
              </h2>
              <p className="leading-relaxed text-gray-600">
                Don&apos;t be shy. Just tell us about yourself and we&apos;ll figure out
                the best option for you or your company.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>

              <p className="text-gray-600">+251 913 983 618</p>
              <p className="text-gray-600">+251 94 114 2529</p>
              <p className="text-gray-600">Mon - Sat 08:30 - 18:00</p>
              <p className="text-gray-600">
                Lideta Street, Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Location
              </h3>

              <p className="text-gray-600">
                Awash Building, Lideta Street, Addis Ababa, Ethiopia
              </p>
              <p className="text-gray-600">+251 913 983 618</p>
              <p className="text-gray-600">+251 94 114 2529</p>
              <p className="text-gray-600">info@geedbic.com</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-8 text-2xl font-semibold text-gray-900">
              Let&apos;s Connect
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitError ? (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </p>
              ) : null}

              {submitSuccess ? (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  {submitSuccess}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
