import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full bg-sky-200 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-3xl font-bold text-black md:text-4xl">
          Need help finding the best solution for your business?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-black/90">
          Our experts are ready to help you make confident, strategic decisions
          that drive real growth.
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
    </section>
  );
}
