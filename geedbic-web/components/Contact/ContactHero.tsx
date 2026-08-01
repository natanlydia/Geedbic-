"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || t("contact", "errorFallback"));
      }

      setSubmitSuccess(result.message || t("contact", "successFallback"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t("contact", "errorFallback"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left info */}
          <div className="space-y-10">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {t("contact", "heading")}
              </h1>
              <h2 className="mb-6 text-2xl font-semibold text-blue-600">
                {t("contact", "subheading")}
              </h2>
              <p className="leading-relaxed text-gray-600">
                {t("contact", "intro")}
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                {t("contact", "infoHeading")}
              </h3>
              <p className="text-gray-600">+251 913 983 618</p>
              <p className="text-gray-600">+251 94 114 2529</p>
              <p className="text-gray-600">{t("contact", "hours")}</p>
              <p className="text-gray-600">{t("contact", "locationLabel")}</p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                {t("contact", "locationHeading")}
              </h3>
              <p className="text-gray-600">{t("contact", "locationFull")}</p>
              <p className="text-gray-600">+251 913 983 618</p>
              <p className="text-gray-600">+251 94 114 2529</p>
              <p className="text-gray-600">info@geedbic.com</p>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-8 text-2xl font-semibold text-gray-900">
              {t("contact", "formHeading")}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  {t("contact", "labelName")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((c) => ({ ...c, name: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder={t("contact", "placeholderName")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  {t("contact", "labelEmail")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((c) => ({ ...c, email: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  {t("contact", "labelMessage")}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((c) => ({ ...c, message: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  placeholder={t("contact", "placeholderMessage")}
                />
              </div>

              {submitError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{submitSuccess}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                {isSubmitting ? t("contact", "sending") : t("contact", "send")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
