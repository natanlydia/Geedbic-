import Link from "next/link";


export default function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/backb.png')" }}
      className="
        relative
        h-[90vh]
        w-full
        bg-cover
        bg-center
        flex
        items-center
      "
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
           Innovation That Drives Your Growth
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            We advance your business with strategic and winning solutions
            through careful analysis and professional consulting services.
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
