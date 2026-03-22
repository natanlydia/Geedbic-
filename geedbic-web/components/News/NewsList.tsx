import Link from "next/link";
import type { NewsPost } from "@/data/news";

interface Props {
  posts: NewsPost[];
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  selectedCategory: string;
}

export default function NewsList({
  posts,
  currentPage,
  totalPages,
  searchQuery,
  selectedCategory,
}: Props) {
  const createPageHref = (page: number) => {
    const params = new URLSearchParams();

    params.set("page", String(page));

    if (searchQuery) {
      params.set("search", searchQuery);
    }

    if (selectedCategory) {
      params.set("category", selectedCategory);
    }

    return `/news?${params.toString()}`;
  };

  return (
    <div className="space-y-10 rounded-3xl bg-sky-100 p-10">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <p className="mb-2 text-sm text-gray-500">
            Leave a Comment / {post.category} / By {post.author}
          </p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {post.title}
          </h2>

          <p className="mb-6 text-gray-600">{post.excerpt}</p>

          <Link
            href={`/news/${post.slug}`}
            className="font-semibold text-orange-500 hover:underline"
          >
            Read More &gt;&gt;
          </Link>
        </article>
      ))}

      <div className="flex items-center justify-between pt-10">
        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
              <Link
                key={page}
                href={createPageHref(page)}
                className={`rounded-md px-4 py-2 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                {page}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages && (
          <Link
            href={createPageHref(currentPage + 1)}
            className="text-blue-600 hover:underline"
          >
            Next Page -&gt;
          </Link>
        )}
      </div>
    </div>
  );
}
