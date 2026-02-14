import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Ostéopathe Valence",
  description: "Politique de confidentialité et protection des données du cabinet Ostéopathe Valence.",
};

export default function PolitiqueConfidentialitePage() {
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
        <h1 className="text-3xl font-light text-gray-800 mb-8">
          Politique de confidentialité
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p>
            Le cabinet Ostéopathe Valence s&apos;engage à protéger la vie privée des utilisateurs de
            son site. Cette politique décrit les données collectées et la manière dont elles sont
            utilisées.
          </p>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">
              Données collectées via le formulaire de contact
            </h2>
            <p>
              Lorsque vous utilisez le formulaire de demande de rendez-vous, nous collectons les
              données suivantes : nom, prénom, adresse e-mail, numéro de téléphone, motif de
              consultation, date souhaitée et message optionnel.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Finalité du traitement</h2>
            <p>
              Ces données sont utilisées uniquement pour vous recontacter afin de confirmer ou
              planifier un rendez-vous au cabinet. Elles ne sont pas transmises à des tiers à des
              fins commerciales.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD), vous disposez
              d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos
              données. Vous pouvez également demander la limitation du traitement ou vous opposer à
              celui-ci. Pour exercer ces droits, contactez-nous via le formulaire du site ou en
              vous rendant au cabinet (45 avenue Victor Hugo, 26000 Valence). Vous avez le droit
              d&apos;introduire une réclamation auprès de la CNIL.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">Conservation des données</h2>
            <p>
              Les données du formulaire de contact sont conservées le temps nécessaire au traitement
              de votre demande et à la prise de rendez-vous, puis supprimées ou archivées selon les
              obligations légales applicables au cabinet de santé.
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
