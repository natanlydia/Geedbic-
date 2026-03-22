"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "News and Articles", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-white/50 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-white"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-8">
        <div className="grid h-24 items-center grid-cols-[auto_1fr_auto]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 2xl:-ml-20 group"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Geedbic Logo"
              width={64}
              height={64}
              priority
              className="transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-black">
              Geedbic
            </span>
          </Link>

          {/* Desktop Links */}
          <ul
            className="
              hidden lg:flex justify-center gap-12
              xl:pl-16 2xl:pl-32
            "
          >
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    relative text-black text-lg font-medium pb-1
                    after:absolute after:left-0 after:bottom-0
                    after:h-[3px] after:w-0 after:bg-blue-600
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="flex flex-col gap-1"
            >
              <span className="w-7 h-[2px] bg-black"></span>
              <span className="w-7 h-[2px] bg-black"></span>
              <span className="w-7 h-[2px] bg-black"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4 rounded-lg border border-gray-200 bg-white shadow-md">
            <ul className="flex flex-col divide-y">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      block px-6 py-4 text-lg font-medium text-black
                      hover:bg-blue-50 hover:text-blue-600 transition
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
