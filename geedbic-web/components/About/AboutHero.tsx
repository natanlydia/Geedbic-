import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('heroabout.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            About GEEDBIC
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Empowering businesses in Ethiopia with strategic consulting,
            financial advisory, and sustainable investment solutions.
          </p>

          
          <div className="mt-8">
            <Link
              href="/request-quote"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-sky-600 hover:scale-105"
            >
              REQUEST QUOTE
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
