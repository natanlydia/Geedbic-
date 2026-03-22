import Image from "next/image";

export default function AboutGeedbic() {
  return (
    <section className="w-full bg-sky-100 py-20">

      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                About GEEDBIC
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
                Empowering businesses in Ethiopia through strategic consulting and
                sustainable growth.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
                <span className="font-semibold">GEEDBIC</span> is a professional consulting
                firm established in <span className="font-semibold">2021 in Ethiopia</span>,
                providing expert services in business and economic development, financial
                intermediation, insurance, real estate, and investment.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
                The firm was founded and is led by
                <span className="font-semibold"> Gemechis Ejeta</span>, Founder & CEO, along
                with a team of experienced professionals bringing over
                <span className="font-semibold"> 10 years of industry expertise</span>.
                GEEDBIC delivers practical, result-driven solutions that help organizations
                grow, scale, and succeed in today’s competitive market.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                <h3 className="text-3xl font-bold text-orange-600">10+</h3>
                <p className="mt-1 text-sm text-gray-600">Years Experience</p>
                </div>

                <div>
                <h3 className="text-3xl font-bold text-orange-600">35+</h3>
                <p className="mt-1 text-sm text-gray-600">SMEs Consulted</p>
                </div>

                <div>
                <h3 className="text-3xl font-bold text-orange-600">300+</h3>
                <p className="mt-1 text-sm text-gray-600">Happy Clients</p>
                </div>
            </div>
            </div>


          {/* Right Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/aboutn.png"
              alt="GEEDBIC consulting team"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
