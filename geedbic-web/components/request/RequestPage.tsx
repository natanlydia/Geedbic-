"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getApiBaseUrl } from "@/lib/api";

const initialBudgetRange = "Under $1,000";
const initialTimeline = "Immediately";

export default function RequestQuotePage() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: preselectedService,
    budgetRange: initialBudgetRange,
    timeline: initialTimeline,
    projectDescription: "",
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
      const response = await fetch(`${getApiBaseUrl()}/requests`, {
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
          result.error || "Unable to submit your request right now.",
        );
      }

      setSubmitSuccess(
        result.message || "Your request has been sent successfully.",
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: preselectedService,
        budgetRange: initialBudgetRange,
        timeline: initialTimeline,
        projectDescription: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Request a Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-900">
            Tell us about your project and business goals. Our team will
            prepare a tailored proposal designed specifically for your needs.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Why Work With Us?
              </h3>
              <ul className="space-y-2 text-gray-900">
                <li>[x] Strategic business solutions</li>
                <li>[x] Data-driven decision making</li>
                <li>[x] Proven consulting expertise</li>
                <li>[x] Personalized approach</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Direct Contact
              </h3>
              <p className="text-gray-900">+251 913 983 618</p>
              <p className="text-gray-900">info@geedbic.com</p>
              <p className="text-gray-900">Mon - Sat 08:30 - 18:00</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg lg:col-span-2">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        fullName: event.target.value,
                      }))
                    }
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="+251..."
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        companyName: event.target.value,
                      }))
                    }
                    placeholder="Your company"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Service Needed *
                </label>
                <select
                  value={formData.service}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      service: event.target.value,
                    }))
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Marketing Strategy">Marketing Strategy</option>
                  <option value="Economic Advisory">Economic Advisory</option>
                  <option value="Social Policy">Social Policy</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        budgetRange: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                  >
                    <option>Under $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        timeline: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                  >
                    <option>Immediately</option>
                    <option>Within 1 Month</option>
                    <option>1 - 3 Months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Project Description *
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.projectDescription}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      projectDescription: event.target.value,
                    }))
                  }
                  placeholder="Describe your project, goals, and expectations..."
                  className="w-full rounded-lg border border-gray-300 p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
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
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
