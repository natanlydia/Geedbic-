"use client";

import type { NewsPost } from "@/data/news";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface NewsSidebarProps {
  recentPosts: NewsPost[];
  categories: string[];
}

export default function NewsSidebar({
  recentPosts,
  categories,
}: NewsSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    params.delete("page");
    router.push(`/news?${params.toString()}`);
  };

  return (
    <aside className="space-y-10">
      <div>
        <h3 className="mb-3 text-lg font-semibold text-black">Search</h3>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-900 placeholder:text-gray-500"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles"
          />
          <button
            onClick={handleSearch}
            className="rounded-md bg-blue-600 px-4 text-white"
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-2xl font-semibold text-black">
          Recent Posts
        </h3>

        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-2xl font-semibold text-black">
          Recent Comments
        </h3>
        <p className="text-blue-600">
          https://www.israelxclub.co.il/ on What you need to know about HRM
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-2xl font-semibold text-black">
          Categories
        </h3>

        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => router.push(`/news?category=${cat}`)}
                className="text-blue-600 hover:underline"
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
