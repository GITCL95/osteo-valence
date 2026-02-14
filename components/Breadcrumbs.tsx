"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = "https://www.osteo-valence.fr";

const LABELS: Record<string, string> = {
  "/": "Accueil",
  "/mentions-legales": "Mentions légales",
  "/politique-confidentialite": "Politique de confidentialité",
  "/blog": "Blog",
  "/osteopathe-sportif": "Ostéopathe sportif",
  "/osteopathe-bebe": "Ostéopathe bébé",
  "/osteopathe-femme-enceinte": "Ostéopathe femme enceinte",
  "/osteopathe-dos": "Ostéopathe mal de dos",
  "/osteopathe-senior": "Ostéopathe senior",
  "/tarifs": "Tarifs",
};

function getBreadcrumbs(pathname: string) {
  const items: { name: string; path: string }[] = [{ name: "Accueil", path: "/" }];
  if (pathname === "/") return items;
  const segments = pathname.split("/").filter(Boolean);
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const label = LABELS[acc] ?? seg.replace(/-/g, " ");
    items.push({ name: label.charAt(0).toUpperCase() + label.slice(1), path: acc });
  }
  return items;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const items = getBreadcrumbs(pathname);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? BASE : `${BASE}${item.path}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="Fil d'Ariane"
        className="border-b border-bluegray/20 bg-white/80 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl px-4 py-2 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            {items.map((item, i) => (
              <li key={item.path} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden className="text-gray-400">/</span>}
                {i === items.length - 1 ? (
                  <span className="font-medium text-gray-800">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-sage transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
