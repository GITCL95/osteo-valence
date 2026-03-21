import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const ARTICLES = [
  {
    slug: "meilleur-osteopathe-drome",
    badge: "Sélection Drôme 2026",
    title: "Meilleur ostéopathe dans la Drôme : top 10",
    excerpt: "Valence, Montélimar, Romans, Nyons… les 10 meilleurs cabinets du département en 2026.",
    icon: (
      <svg className="w-12 h-12 text-sage/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    slug: "meilleur-osteopathe-valence",
    badge: "Sélection 2026",
    title: "Meilleur ostéopathe à Valence : top 10",
    excerpt: "Diplômes, spécialités, adresses — notre sélection des 10 meilleurs cabinets à Valence en 2026.",
    icon: (
      <svg className="w-12 h-12 text-sage/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    slug: "combien-seances-osteopathie-sciatique",
    badge: "Sciatique",
    title: "Combien de séances pour une sciatique ?",
    excerpt: "1 à 3 séances en moyenne. Découvrez les facteurs qui influencent le traitement.",
    icon: (
      <svg className="w-12 h-12 text-sage/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    slug: "osteopathe-acouphene",
    badge: "Acouphènes",
    title: "Ostéopathe et acouphènes",
    excerpt: "Approche cervicale et crânienne pour réduire les acouphènes d'origine mécanique.",
    icon: (
      <svg className="w-12 h-12 text-sage/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "fatigue-apres-osteopathe",
    badge: "Après séance",
    title: "Fatigue après l'ostéopathe : normal ?",
    excerpt: "Réaction normale du corps. Durée, causes et conseils pour bien récupérer.",
    icon: (
      <svg className="w-12 h-12 text-sage/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
];

export default function LatestArticlesBanner({ exclude }: { exclude?: string }) {
  const displayed = exclude ? ARTICLES.filter((a) => a.slug !== exclude) : ARTICLES;

  return (
    <SectionReveal className="py-12 md:py-16 px-4 md:px-8 bg-offwhite" animate="fade-up">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">
          Derniers articles du blog
        </h2>
        <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl bg-white border border-bluegray/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-40 bg-sage/15 flex items-center justify-center">
                {article.icon}
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-2">
                  {article.badge}
                </span>
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-sage transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
