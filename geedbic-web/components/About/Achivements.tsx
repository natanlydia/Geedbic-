import { CheckCircle } from "lucide-react";

export default function Achievements() {
  return (
    <section className="bg-sky-200 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase text-orange-500">
            Achievements
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Certifications & Recognitions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Recognized for leadership, business excellence, and professional
            consulting services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Leadership & Vision
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                YALI Recommendation and Certificate
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Yoth Leadership Program
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Creative Consultancy.
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Business & Entrepreneurship
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Business Development Training
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Entrepreneurship Training Workshop
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Advanced Business Development Service Training
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Consulting Excellence
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Creative Consultancy
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Business Management & Marketing Workshop
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Kidsearch Certification
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Public & Global Recognition
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                World Economic Forum on Africa
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Center for African Family Studies
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Recommendation from Voluntary Service Overseas (VSO)
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Certificate from Federal Ministry of Health
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
