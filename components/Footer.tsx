import Link from "next/link";
import Image from "next/image";

const PHONE = "+33769341945";
const DOCTOLIB = "https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.png"
                alt="Pauline Odeyer – Ostéopathe D.O."
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <p className="text-lg font-semibold text-white">
                Pauline Odeyer<br />
                <span className="text-sm font-normal text-gray-400">Ostéopathe D.O.</span>
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wide">Cabinet de Valence</p>
            <p className="text-sm">9 rue du Lycée, 26000 Valence</p>
            <p className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wide">Cabinet de Saint Lattier</p>
            <p className="text-sm">55 allée du Cultil, 38840 Saint Lattier</p>
            <p className="mt-3 text-sm">
              <a href={`tel:${PHONE}`} className="hover:text-gold transition">
                07 69 34 19 45
              </a>
            </p>
            <p className="mt-1 text-sm italic">Consultations sur rendez-vous uniquement</p>
            <a
              href={DOCTOLIB}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-gold hover:text-gold/80 transition"
            >
              Prendre RDV sur Doctolib →
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <Link href="/mentions-legales" className="text-sm hover:text-gold transition">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm hover:text-gold transition">
              Politique de confidentialité
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-500">
          <p>© 2026 Pauline Odeyer — Ostéopathe D.O. à Valence (26) et Saint Lattier (38)</p>
          <p className="mt-1">Dernière mise à jour : avril 2026</p>
        </div>
      </div>
    </footer>
  );
}
