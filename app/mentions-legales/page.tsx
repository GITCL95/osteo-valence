import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Ostéopathe Valence",
  description: "Mentions légales du cabinet d'ostéopathie Ostéopathe Valence à Valence (26000).",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <header className="border-b border-bluegray/20 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 md:px-8">
          <Link href="/" className="text-xl font-semibold text-sage">
            Ostéopathe Valence
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <h1 className="text-3xl font-light text-gray-800 mb-8">Mentions légales</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Éditeur du site</h2>
            <p>
              Le site <strong>www.osteo-valence.fr</strong> est édité par le cabinet
              d&apos;ostéopathie Ostéopathe Valence, situé au 1 avenue Victor Hugo, 26000 Valence.
            </p>
            <p>
              SIRET : [À compléter]
              <br />
              Forme juridique : [À compléter]
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Hébergeur</h2>
            <p>
              L&apos;hébergement du site est assuré par [nom de l&apos;hébergeur à compléter],
              [adresse de l&apos;hébergeur].
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales ou au cabinet, vous pouvez nous
              contacter via le formulaire de prise de rendez-vous sur la page d&apos;accueil ou
              vous rendre au cabinet : 1 avenue Victor Hugo, 26000 Valence.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, structure) est protégé par le
              droit d&apos;auteur. Toute reproduction non autorisée est interdite.
            </p>
          </section>
        </div>
        <p className="mt-10">
          <Link href="/" className="text-sage font-medium hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </main>
    </div>
  );
}
