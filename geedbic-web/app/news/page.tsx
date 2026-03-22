import NewsList from "@/components/News/NewsList";
import NewsSidebar from "@/components/News/NewsSidebar";
import { getAllArticles, getArticleCategories } from "@/lib/articles";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

export default async function NewsPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const allPosts = await getAllArticles();
  const categories = await getArticleCategories();

  const currentPage = Number(params.page ?? "1");
  const searchQuery = params.search ?? "";
  const selectedCategory = params.category ?? "";

  let filteredPosts = allPosts;

  if (searchQuery) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (selectedCategory) {
    filteredPosts = filteredPosts.filter(
      (post) => post.category === selectedCategory,
    );
  }

  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="mb-10 text-4xl font-bold text-gray-900">
          News & Articles
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NewsList
              posts={paginatedPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>

          <div>
            <NewsSidebar
              recentPosts={allPosts.slice(0, 4)}
              categories={categories}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
