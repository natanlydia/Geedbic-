export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Trusted by businesses and organizations across Ethiopia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial 1 */}
          <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <p className="mb-6 text-gray-700 leading-relaxed">
              “GEEDBIC helped us develop a clear business strategy and connect
              with the right financial partners. Their professionalism and
              insight made a real difference.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">
                Dawit Tesfaye
              </h4>
              <p className="text-sm text-gray-600">
                Founder, SME Manufacturing Company
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <p className="mb-6 text-gray-700 leading-relaxed">
              “The GEEDBIC team provided us with detailed market research and a
              strong business proposal that helped us secure funding and grow
              confidently.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">
                Selamawit Bekele
              </h4>
              <p className="text-sm text-gray-600">
                Managing Director, Agribusiness Firm
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30">
            <p className="mb-6 text-gray-700 leading-relaxed">
              “Their training programs strengthened our team’s skills and
              mindset. GEEDBIC delivers real value with practical,
              results-oriented solutions.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">
                Mohammed Hassan
              </h4>
              <p className="text-sm text-gray-600">
                Operations Manager, Service Company
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
