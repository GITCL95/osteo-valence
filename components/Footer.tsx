import Link from "next/link";

const PHONE = "+33757905188";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-lg font-semibold text-white">
              Ostéopathe Valence — Cabinet d&apos;Ostéopathie D.O.
            </p>
            <p className="mt-1 text-sm">45 avenue Victor Hugo, 26000 Valence</p>
            <p className="text-sm">Drôme — Auvergne-Rhône-Alpes</p>
            <p className="mt-2 text-sm">Lundi au Vendredi : 8h – 20h | Samedi : 9h – 13h</p>
            <p className="mt-1 text-sm">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition">
                {PHONE.replace(/(\+33)(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5 $6")}
              </a>
            </p>
            <p className="mt-1 text-sm italic">Consultations sur rendez-vous uniquement</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <Link href="/mentions-legales" className="text-sm hover:text-gold transition">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm hover:text-gold transition">
              Politique de confidentialité
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-500">
          <p>© 2026 Ostéopathe Valence — Cabinet d&apos;ostéopathie à Valence (26000)</p>
          <p className="mt-1">Dernière mise à jour : février 2026</p>
        </div>
      </div>
    </footer>
  );
}
