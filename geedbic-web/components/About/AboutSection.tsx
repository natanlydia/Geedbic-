export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">

        {/* Left text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            GEEDBIC is a consulting and advisory firm based in Ethiopia,
            dedicated to helping businesses grow, adapt, and succeed
            in an evolving economic environment.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We provide strategic guidance, financial advisory services,
            and investment support to startups, SMEs, and established
            organizations.
          </p>
        </div>

        {/* Right highlights */}
        <div className="bg-sky-100 rounded-2xl p-8">
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✔ Strategic Business Consulting</li>
            <li>✔ Financial & Investment Advisory</li>
            <li>✔ Market Research & Analysis</li>
            <li>✔ Sustainable Growth Solutions</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
