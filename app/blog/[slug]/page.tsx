import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "../data";

const BASE = "https://www.osteo-valence.fr";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);
  return (
    <div className="prose prose-gray max-w-none space-y-4">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              {trimmed.slice(3)}
            </h2>
          );
        }
        return (
          <p key={i} className="text-gray-600 leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} | Blog Ostéopathe Valence`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Ostéopathe Valence",
    },
    publisher: {
      "@type": "Organization",
      name: "Ostéopathe Valence",
    },
    url: `${BASE}/blog/${article.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${BASE}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-8">
        <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-sage">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-sage">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{article.title}</span>
        </nav>
        <article>
          <h1 className="text-3xl font-light text-gray-800 md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {formatDate(article.date)} – L&apos;équipe du cabinet
          </p>
          <div className="mt-8">
            <ArticleContent content={article.content} />
          </div>
        </article>
        <div className="mt-12 pt-8 border-t border-bluegray/20 flex flex-col sm:flex-row gap-4">
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-sage px-6 py-3 text-center font-medium text-white shadow transition hover:bg-sage/90"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/blog"
            className="inline-block rounded-full border-2 border-sage px-6 py-3 text-center font-medium text-sage transition hover:bg-sage/10"
          >
            ← Retour au blog
          </Link>
        </div>
      </main>
    </div>
  );
}
