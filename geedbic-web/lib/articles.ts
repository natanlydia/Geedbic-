import { newsPosts, type NewsPost } from "@/data/news";

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
  let posts = sortPosts(newsPosts);

  if (options?.category) {
    posts = posts.filter((p) => p.category === options.category);
  }

  if (options?.search) {
    const term = options.search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term),
    );
  }

  return posts;
}

export async function getArticleBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug) ?? null;
}

export async function getArticleCategories() {
  return Array.from(new Set(newsPosts.map((post) => post.category)));
}
