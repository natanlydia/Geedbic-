import { newsPosts, type NewsPost } from "@/data/news";
import { apiFetch } from "@/lib/api";

type ArticlesResponse = {
  articles: NewsPost[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

type ArticleResponse = {
  article: NewsPost;
};

function sortPosts(posts: NewsPost[]) {
  return [...posts].sort((left, right) => {
    const leftDate = Date.parse(left.date);
    const rightDate = Date.parse(right.date);

    if (Number.isNaN(leftDate) || Number.isNaN(rightDate)) {
      return 0;
    }

    return rightDate - leftDate;
  });
}

export async function getAllArticles(options?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}) {
  try {
    const params = new URLSearchParams();
    if (options?.page) params.set("page", String(options.page));
    if (options?.limit) params.set("limit", String(options.limit));
    if (options?.category) params.set("category", options.category);
    if (options?.search) params.set("search", options.search);

    const query = params.toString() ? `?${params.toString()}` : "";
    const payload = await apiFetch<ArticlesResponse>(`/articles${query}`);

    if (payload.articles.length > 0) {
      return payload.articles;
    }
  } catch {
    // Fall back to bundled content when the API is not reachable.
  }

  return sortPosts(newsPosts);
}

export async function getArticleBySlug(slug: string) {
  try {
    const payload = await apiFetch<ArticleResponse>(`/articles/${slug}`);
    return payload.article;
  } catch {
    return newsPosts.find((post) => post.slug === slug) ?? null;
  }
}

export async function getArticleCategories() {
  const posts = await getAllArticles();
  return Array.from(new Set(posts.map((post) => post.category)));
}
