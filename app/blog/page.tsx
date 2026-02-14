import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";

export const metadata: Metadata = {
  title: "Blog – Ostéopathie à Valence : Conseils et Informations",
  description:
    "Articles et conseils sur l'ostéopathie à Valence : quand consulter, ostéopathie bébé, grossesse, et bien plus.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <h1 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
          Blog – Ostéopathie à Valence : Conseils et Informations
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Retrouvez nos articles sur l&apos;ostéopathie, les motifs de consultation et nos conseils pour toute la famille.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl bg-white border border-bluegray/20 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="h-40 bg-gradient-to-br from-sage/30 to-cream flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-sage/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    {formatDate(article.date)}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-sage hover:underline">
                    Lire la suite →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
