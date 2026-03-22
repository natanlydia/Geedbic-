"use client";

import { Briefcase, Leaf, LineChart, FileText, Banknote, Package, Users, GraduationCap, Building2 } from "lucide-react";

const services = [
  {
    title: "Business Consulting",
    description:
      "We inject innovative approaches and proven techniques to help organizations solve complex business challenges.",
    icon: Briefcase,
  },
  {
    title: "Environmental Impact Assessment",
    description:
      "We promote green innovation and support sustainable business practices to address environmental challenges.",
    icon: Leaf,
  },
  {
    title: "Strategic Plan Development",
    description:
      "We assess your current realities and define a clear, achievable vision for long-term growth.",
    icon: LineChart,
  },
  {
    title: "Business Proposal Development",
    description:
      "We craft clear, compelling business proposals that communicate value and attract investors or partners.",
    icon: FileText,
  },
  {
    title: "Financial Linkage & Facilitation",
    description:
      "We connect businesses with investment loans, capital financing, and leasing opportunities.",
    icon: Banknote,
  },
  {
    title: "Product Development & Market Research",
    description:
      "From idea generation to commercialization, we support your product journey with deep market insights.",
    icon: Package,
  },
  {
    title: "Entrepreneurship Training",
    description:
      "We equip entrepreneurs with the skills and mindset required to launch and scale successful ventures.",
    icon: Users,
  },
  {
    title: "Investment & Grant Access",
    description:
      "We facilitate access to grants and financial resources that enable sustainable business growth.",
    icon: GraduationCap,
  },
  {
    title: "Corporate Training",
    description:
      "We deliver professional training programs that enhance employee performance and leadership capacity.",
    icon: Building2,
  },
];

export default function ServicesList() {
  return (
    <section className="bg-sky-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          {/* <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Services
          </span> */}
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What We Have Here for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide tailored solutions designed to make your business results
            sustainable and impactful over time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  bg-white
                  p-8
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 transition group-hover:bg-orange-500">
                  <Icon className="h-7 w-7 text-orange-500 transition group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
