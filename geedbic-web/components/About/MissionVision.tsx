export default function MissionVision() {
  return (
    <section className="bg-sky-200 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">

        {/* Mission */}
        <div className="rounded-2xl bg-gray-800 p-8">
          <h3 className="text-2xl font-bold">
            Our Mission
          </h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our mission is to empower Ethiopian businesses by providing
            reliable strategic consulting, financial advisory, and
            investment support that drives sustainable growth.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl bg-gray-800 p-8">
          <h3 className="text-2xl font-bold">
            Our Vision
          </h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our vision is to become a leading advisory firm in Africa,
            recognized for innovation, integrity, and long-term value
            creation for businesses and communities.
          </p>
        </div>

      </div>
    </section>
  );
}
