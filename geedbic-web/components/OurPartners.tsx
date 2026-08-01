"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

import jobCreation from "@/public/job-creation.png";
import cbe from "@/public/cbe.png";
import oromiaTourism from "@/public/touridm.png";
import addisMayor from "@/public/Office.png";
import coopBank from "@/public/coop.webp";
import ata from "@/public/ATA.jpeg";
import tonyElumelu from "@/public/tony.png";
import technoserve from "@/public/tech.png";
import dbe from "@/public/Development_Bank_of_Ethiopia.png";
import firstConsult from "@/public/first.png";
import aaccsa from "@/public/chamber.jpeg";
import Tikus from "@/public/tikus.png";

const partners = [
  { name: "Job Creation Commission Ethiopia", logo: jobCreation },
  { name: "Commercial Bank of Ethiopia", logo: cbe },
  { name: "Oromia Tourism Commission", logo: oromiaTourism },
  { name: "Office of the Mayor – Addis Ababa", logo: addisMayor },
  { name: "Coop Bank of Oromia", logo: coopBank },
  { name: "Ethiopian ATA", logo: ata },
  { name: "Tony Elumelu Foundation", logo: tonyElumelu },
  { name: "TechnoServe", logo: technoserve },
  { name: "Development Bank of Ethiopia", logo: dbe },
  { name: "First Consult", logo: firstConsult },
  { name: "Addis Ababa Chamber of Commerce", logo: aaccsa },
  { name: "Tikus", logo: Tikus },
];

export default function OurPartners() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-45 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          {t("partners", "heading")}
        </h2>
        <p className="mt-4 text-gray-600">
          {t("partners", "subheading")}
        </p>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex h-20 w-44 items-center justify-center grayscale transition duration-300 hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="object-contain"
                width={160}
                height={80}
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
