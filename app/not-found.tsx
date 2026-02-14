import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-offwhite text-foreground flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-light text-gray-800 md:text-4xl text-center">
          Page introuvable
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-md">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-sage px-6 py-3 text-base font-medium text-white shadow transition hover:bg-sage/90"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
    </div>
  );
}
