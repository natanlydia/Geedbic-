import { BarChart3, Network, DollarSign, Users } from "lucide-react";

export default function WhyChooseGeedbic() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose GEEDBIC
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We help organizations transform under the most complex, challenging,
            and high-stake circumstances to achieve their ambitions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BarChart3 size={28} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Proven Methodologies
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We apply proven methodologies to uncover core business challenges
              and deliver practical, result-driven solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Network size={28} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Extensive Networks
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We leverage strong networks to connect you with partners,
              investors, and opportunities that accelerate growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <DollarSign size={28} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Detailed Reports
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We provide clear reports, value gap analysis, and actionable plans
              that are ready for execution.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Users size={28} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Customer-Oriented Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We deliver tailored support across consulting, finance, marketing,
              and operations to maximize long-term value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
