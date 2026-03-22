import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getArticleBySlug(slug);

  if (!post) return notFound();

  return (
    <main className="bg-white">
      <section className="bg-sky-100">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">
            {post.category} | {post.author}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-black md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base font-medium text-sky-900">
            {post.date}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl bg-white px-6 py-14">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="space-y-6 text-lg leading-relaxed text-black">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
