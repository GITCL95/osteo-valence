export default function SectionReveal({
  id,
  children,
  className = "",
  animate = "fade-up",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  animate?: "fade-up" | "fade-left" | "scale-in" | "stagger";
}) {
  return (
    <section
      id={id}
      data-animate={animate}
      className={`section-reveal scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
