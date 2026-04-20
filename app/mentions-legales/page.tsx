import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Pauline Odeyer Ostéopathe",
  description:
    "Mentions légales du site de Pauline Odeyer, ostéopathe D.O. à Valence (26) et Saint Lattier (38). SIREN 832 471 023.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <header className="border-b border-bluegray/20 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 md:px-8">
          <Link href="/" className="text-xl font-semibold text-sage">
            Pauline Odeyer — Ostéopathe D.O.
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <h1 className="text-3xl font-light text-gray-800 mb-2">Mentions légales</h1>
        <div className="w-12 h-1 bg-gold rounded-full mb-10" aria-hidden />

        <div className="space-y-10 text-gray-600">

          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              1. Éditeur du site
            </h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Nom / Dénomination", "Pauline Odeyer"],
                  ["Forme juridique", "Entrepreneur individuel"],
                  ["SIREN", "832 471 023"],
                  ["SIRET (siège)", "832 471 023 00024"],
                  ["N° TVA intracommunautaire", "FR59832471023"],
                  ["Code APE / NAF", "86.90D – Activités des infirmiers et des sages-femmes"],
                  ["Activité déclarée", "Cabinet d'ostéopathie"],
                  ["Inscription RNE", "Inscrite depuis le 05/10/2017"],
                  ["Inscription RCS", "Non inscrite"],
                  ["Forme d'exercice", "Libérale réglementée"],
                  ["Adresse du siège", "55 allée du Cultil, 38840 Saint-Lattier"],
                  ["Cabinet Valence", "9 rue du Lycée, 26000 Valence"],
                  ["Téléphone", "07 69 34 19 45"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-bluegray/20 last:border-0">
                    <td className="py-2.5 pr-4 font-medium text-gray-700 w-1/3 align-top">{label}</td>
                    <td className="py-2.5 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              2. Hébergeur
            </h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Société", "Vercel Inc."],
                  ["Adresse", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"],
                  ["Site web", "https://vercel.com"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-bluegray/20 last:border-0">
                    <td className="py-2.5 pr-4 font-medium text-gray-700 w-1/3 align-top">{label}</td>
                    <td className="py-2.5 text-gray-600">
                      {label === "Site web" ? (
                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, photos, illustrations, structure) est la
              propriété exclusive de Pauline Odeyer ou de ses ayants droit, et est protégé par le
              droit d&apos;auteur et la propriété intellectuelle. Toute reproduction, représentation,
              modification ou exploitation, totale ou partielle, sans autorisation écrite préalable
              est strictement interdite et constitue une contrefaçon sanctionnée par les articles
              L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              4. Limitation de responsabilité
            </h2>
            <p className="text-sm leading-relaxed">
              Les informations publiées sur ce site sont fournies à titre indicatif. Elles ne
              remplacent en aucun cas une consultation médicale ou ostéopathique. Pauline Odeyer
              ne saurait être tenue responsable d&apos;un quelconque dommage résultant de
              l&apos;utilisation de ces informations. Les liens hypertextes présents sur ce site
              peuvent renvoyer vers des sites tiers ; l&apos;éditeur n&apos;est pas responsable du
              contenu de ces sites.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              5. Données personnelles
            </h2>
            <p className="text-sm leading-relaxed">
              Ce site peut collecter des données à caractère personnel via le formulaire de contact
              (nom, prénom, adresse e-mail, message). Ces données sont traitées dans le seul but de
              répondre à vos demandes et ne sont pas transmises à des tiers. Conformément au
              Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et d&apos;opposition à vos données. Pour exercer ces
              droits, contactez{" "}
              <a href="tel:+33769341945" className="text-sage hover:underline">
                Pauline Odeyer au 07 69 34 19 45
              </a>
              . Pour en savoir plus, consultez notre{" "}
              <Link href="/politique-confidentialite" className="text-sage hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              6. Cookies
            </h2>
            <p className="text-sm leading-relaxed">
              Ce site utilise uniquement des cookies fonctionnels nécessaires à son bon
              fonctionnement (préférence de consentement). Aucun cookie publicitaire ni de
              traçage tiers n&apos;est déposé sans votre consentement. Vous pouvez paramétrer
              votre navigateur pour refuser les cookies ; certaines fonctionnalités du site
              pourraient en être affectées.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-bluegray/30">
              7. Droit applicable
            </h2>
            <p className="text-sm leading-relaxed">
              Le présent site et ses mentions légales sont soumis au droit français. En cas de
              litige, les tribunaux français sont compétents. Ce site est publié conformément aux
              dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique (LCEN).
            </p>
          </section>

        </div>

        <p className="mt-12 text-sm text-gray-400 italic">
          Dernière mise à jour : avril 2026
        </p>
        <p className="mt-4">
          <Link href="/" className="text-sage font-medium hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </main>
    </div>
  );
}
