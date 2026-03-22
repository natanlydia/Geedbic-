import {
  Briefcase,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Building2,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

const serviceDetails = [
  {
    title: "Business & Economic Development",
    description:
      "Strengthening businesses through sustainable growth strategies.",
    icon: Briefcase,
    borderClass:
      "border-blue-300 hover:shadow-blue-500/40",
  },
  {
    title: "Business Consulting",
    description:
      "Financial solutions that improve performance and efficiency.",
    icon: BarChart3,
    borderClass:
      "border-orange-300 hover:shadow-orange-500/40",
  },
  {
    title: "Product Development & Market Research",
    description:
      "Idea generation, screening, concept, and product development.",
    icon: TrendingUp,
    borderClass:
      "border-blue-300 hover:shadow-blue-500/40",
  },
  {
    title: "Corporate Training",
    description:
      "Training programs to enhance employee skills and performance.",
    icon: ShieldCheck,
    borderClass:
      "border-orange-300 hover:shadow-blue-500/40",
  },
  {
    title: "Entrepreneurship Training",
    description:
      "Building the mindset and skills to launch successful ventures.",
    icon: Building2,
    borderClass:
      "border-blue-300 hover:shadow-blue-500/40",
  },
  {
    title: "Strategic Planning & Research",
    description:
      "Data-driven research to support strategic decision-making.",
    icon: ClipboardList,
    borderClass:
      "border-orange-300 hover:shadow-orange-500/40",
  },
];

export default function ServicesExpertise() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Strategic solutions designed to drive sustainable business growth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl ${service.borderClass}`}
              >
                <Icon className="mb-5 h-10 w-10 text-blue-800" />
                <h3 className="mb-2 text-xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mb-6 text-black">
                  {service.description}
                </p>
                <Link
                  href="/service"
                  className="inline-block font-medium text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500 hover:underline hover:decoration-orange-500"
                >
                  Learn more -&gt;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
