"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { newsPosts } from "@/data/news";

const posts = newsPosts.slice(0, 4).map((post) => ({
  ...post,
  href: `/news/${post.slug}`,
}));

const slides = [
  posts[posts.length - 2],
  posts[posts.length - 1],
  ...posts,
  posts[0],
  posts[1],
];

export default function BlogPreview() {
  const [index, setIndex] = useState(2);
  const [animate, setAnimate] = useState(true);
  const [visibleItems, setVisibleItems] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideDuration = 700;
  const pause = 3500;

  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(window.innerWidth >= 768 ? 2 : 1);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((current) => current + 1);
    }, pause);

    return stopAuto;
  }, []);

  useEffect(() => {
    if (index === posts.length + 2) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(2);
      }, slideDuration);
    }

    if (index === 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(posts.length + 1);
      }, slideDuration);
    }
  }, [index]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }
  }, [animate]);

  const next = () => {
    stopAuto();
    setIndex((current) => current + 1);
    intervalRef.current = setInterval(() => {
      setIndex((current) => current + 1);
    }, pause);
  };

  const prev = () => {
    stopAuto();
    setIndex((current) => current - 1);
    intervalRef.current = setInterval(() => {
      setIndex((current) => current + 1);
    }, pause);
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            News & Articles
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:mt-4 md:text-base">
            Insights and expert opinions from GEEDBIC
          </p>
        </div>

        <div className="group relative">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                animate
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  : ""
              }`}
              style={{
                transform: `translateX(-${index * (100 / visibleItems)}%)`,
              }}
            >
              {slides.map((post, slideIndex) => (
                <article
                  key={`${post.slug}-${slideIndex}`}
                  className="w-full flex-shrink-0 px-2 sm:px-4 md:w-1/2"
                >
                  <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                    <p className="mb-2 text-xs text-gray-500 md:text-sm">
                      {post.date} | {post.author}
                    </p>

                    <h3 className="mb-3 line-clamp-2 text-base font-semibold text-gray-900 md:text-lg">
                      {post.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm text-gray-600 md:text-base">
                      {post.excerpt}
                    </p>

                    <Link
                      href={post.href}
                      className="inline-flex items-center font-medium text-blue-800 hover:text-orange-500 hover:underline"
                    >
                      Read more <span className="ml-1">-&gt;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-orange-500 hover:text-white focus:outline-none md:left-2 md:bg-sky-200"
            aria-label="Previous slide"
          >
            {"<"}
          </button>

          <button
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-orange-500 hover:text-white focus:outline-none md:right-2 md:bg-sky-200"
            aria-label="Next slide"
          >
            {">"}
          </button>
        </div>

        <div className="mt-10 text-center md:mt-14">
          <Link
            href="/news"
            className="inline-block w-full rounded-xl bg-sky-300 px-8 py-4 font-semibold text-white transition hover:bg-orange-400 sm:w-auto"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
