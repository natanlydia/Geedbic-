export default function FounderMessage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* Image (Left) */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-gray-100">
          {/* Replace with real image later */}
          <div className="flex h-full items-center justify-center text-gray-400">
            Founder Image
          </div>
        </div>

        {/* Text (Right) */}
        <div>
          <span className="text-sm font-semibold text-orange-500 uppercase">
            Founder’s Message
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            A Word From Our Founder
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            At GEEDBIC, we believe that strong businesses are built on trust,
            professionalism, and long-term partnerships. Our mission has always
            been to support organizations with practical, innovative, and
            sustainable solutions that drive real growth.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With years of experience advising businesses and investors,
            GEEDBIC continues to play a key role in Ethiopia’s economic
            development by empowering clients to make confident decisions.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-900">
              Gemechis Ejeta
            </p>
            <p className="text-sm text-gray-500">
              CEO & Founder, GEEDBIC PLC
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
