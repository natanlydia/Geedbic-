"use client";

import {
  Search,
  BarChart3,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Understanding Your Business",
    description:
      "We begin by listening carefully to understand your business goals, challenges, and vision.",
    icon: Search,
  },
  {
    title: "Assessment & Research",
    description:
      "We conduct in-depth market, financial, and operational analysis to identify opportunities.",
    icon: BarChart3,
  },
  {
    title: "Strategy Development",
    description:
      "We design tailored strategies aligned with your objectives and resources.",
    icon: Lightbulb,
  },
  {
    title: "Implementation Support",
    description:
      "We support execution to ensure strategies are implemented efficiently.",
    icon: Rocket,
  },
  {
    title: "Monitoring & Growth",
    description:
      "We measure impact, optimize performance, and drive sustainable growth.",
    icon: TrendingUp,
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-gray-600">
            A structured approach that delivers clarity, strategy, and measurable results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-200 pl-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="mb-16 last:mb-0">
                {/* Dot */}
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-orange-500" />

                {/* Content */}
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
