"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getApiBaseUrl } from "@/lib/api";
import { useLanguage } from "@/src/context/LanguageContext";

export default function RequestQuotePage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: preselectedService,
    budgetRange: t("request", "budget1"),
    timeline: t("request", "timeline1"),
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || t("request", "errorFallback"));
      }

      setSubmitSuccess(result.message || t("request", "successFallback"));
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: preselectedService,
        budgetRange: t("request", "budget1"),
        timeline: t("request", "timeline1"),
        projectDescription: "",
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t("request", "errorFallback"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{t("request", "heading")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-900">{t("request", "subheading")}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{t("request", "whyHeading")}</h3>
              <ul className="space-y-2 text-gray-900">
                <li>[x] {t("request", "why1")}</li>
                <li>[x] {t("request", "why2")}</li>
                <li>[x] {t("request", "why3")}</li>
                <li>[x] {t("request", "why4")}</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{t("request", "directContactHeading")}</h3>
              <p className="text-gray-900">+251 913 983 618</p>
              <p className="text-gray-900">info@geedbic.com</p>
              <p className="text-gray-900">{t("request", "hours")}</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-10 shadow-lg lg:col-span-2">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelFullName")}</label>
                  <input type="text" required value={formData.fullName}
                    onChange={(e) => setFormData((c) => ({ ...c, fullName: e.target.value }))}
                    placeholder={t("request", "placeholderFullName")}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelEmail")}</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData((c) => ({ ...c, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelPhone")}</label>
                  <input type="text" value={formData.phone}
                    onChange={(e) => setFormData((c) => ({ ...c, phone: e.target.value }))}
                    placeholder={t("request", "placeholderPhone")}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelCompany")}</label>
                  <input type="text" value={formData.companyName}
                    onChange={(e) => setFormData((c) => ({ ...c, companyName: e.target.value }))}
                    placeholder={t("request", "placeholderCompany")}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelService")}</label>
                <select value={formData.service} required
                  onChange={(e) => setFormData((c) => ({ ...c, service: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                >
                  <option value="">{t("request", "selectService")}</option>
                  <option value="Business Consulting">{t("request", "serviceOpt1")}</option>
                  <option value="Marketing Strategy">{t("request", "serviceOpt2")}</option>
                  <option value="Economic Advisory">{t("request", "serviceOpt3")}</option>
                  <option value="Social Policy">{t("request", "serviceOpt4")}</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelBudget")}</label>
                  <select value={formData.budgetRange}
                    onChange={(e) => setFormData((c) => ({ ...c, budgetRange: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                  >
                    <option>{t("request", "budget1")}</option>
                    <option>{t("request", "budget2")}</option>
                    <option>{t("request", "budget3")}</option>
                    <option>{t("request", "budget4")}</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelTimeline")}</label>
                  <select value={formData.timeline}
                    onChange={(e) => setFormData((c) => ({ ...c, timeline: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                  >
                    <option>{t("request", "timeline1")}</option>
                    <option>{t("request", "timeline2")}</option>
                    <option>{t("request", "timeline3")}</option>
                    <option>{t("request", "timeline4")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">{t("request", "labelDescription")}</label>
                <textarea rows={6} required value={formData.projectDescription}
                  onChange={(e) => setFormData((c) => ({ ...c, projectDescription: e.target.value }))}
                  placeholder={t("request", "placeholderDescription")}
                  className="w-full rounded-lg border border-gray-300 p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                />
              </div>

              {submitError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{submitSuccess}</p>
              )}

              <button type="submit" disabled={isSubmitting}
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? t("request", "submitting") : t("request", "submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
