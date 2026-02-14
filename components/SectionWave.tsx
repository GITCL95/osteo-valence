type SectionWaveProps = {
  /** Classe Tailwind pour la couleur de remplissage (section suivante), ex: fill-cream fill-offwhite */
  fillClass: string;
  /** Inverser la courbe */
  flip?: boolean;
};

export default function SectionWave({ fillClass, flip }: SectionWaveProps) {
  /* Courbe douce : le remplissage est sous la courbe, couleur = section suivante */
  const path = flip
    ? "M0,60 Q180,0 360,60 T720,60 L720,120 L0,120 Z"
    : "M0,60 Q180,120 360,60 T720,60 L720,0 L0,0 Z";

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden pointer-events-none" aria-hidden>
      <svg
        className={`w-full h-full ${fillClass}`}
        viewBox="0 0 720 120"
        preserveAspectRatio="none"
      >
        <path d={path} />
      </svg>
    </div>
  );
}
