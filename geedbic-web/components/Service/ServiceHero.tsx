import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('heroabout.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="mx-auto max-w-7xl px-6">

          {/* <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-orange-400">
            Established Company
          </span> */}

          <h1 className="max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Delivering World-Class Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            We always provide the smartest and most efficient ways of performing
            your business by combining knowledge, strategy, and technology.
          </p>

          <div className="mt-8">
            <Link
              href="/request"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              REQUEST QUOTE
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
