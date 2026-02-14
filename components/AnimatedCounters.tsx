"use client";

import { useState, useEffect, useRef } from "react";

type CounterItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

const COUNTERS: CounterItem[] = [
  { value: 2000, prefix: "+", label: "Patients accompagnés" },
  { value: 15, suffix: "", label: "Années d'expérience" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Note moyenne patients" },
  { value: 48, suffix: "h", label: "Délai de prise en charge" },
];

function useCountUp(end: number, duration: number, start: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const current = easeOut * end;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  if (decimals >= 1) return count.toFixed(decimals);
  return Math.round(count);
}

function SingleCounter({
  item,
  isVisible,
}: {
  item: CounterItem;
  isVisible: boolean;
}) {
  const raw = useCountUp(
    item.value,
    2000,
    isVisible,
    item.decimals ?? 0
  );
  const num = typeof raw === "string" ? parseFloat(raw.replace(",", ".")) : raw;
  let formatted: string;
  if (item.decimals !== undefined && item.decimals >= 1) {
    formatted = typeof raw === "string" ? raw.replace(".", ",") : num.toFixed(item.decimals).replace(".", ",");
  } else if (item.value >= 1000) {
    formatted = Math.round(num).toLocaleString("fr-FR");
  } else {
    formatted = String(Math.round(num));
  }
  const display = (item.prefix ?? "") + formatted + (item.suffix ?? "");

  return (
    <div className="text-center" data-animate="slide-up">
      <div className="text-4xl md:text-5xl font-light text-white tabular-nums">
        {display}
      </div>
      <p className="mt-2 text-sm md:text-base text-white/90">{item.label}</p>
    </div>
  );
}

export default function AnimatedCounters() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-sage via-sage/90 to-sage/80"
      aria-labelledby="chiffres-cles-heading"
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 id="chiffres-cles-heading" className="sr-only">
          Chiffres clés
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {COUNTERS.map((item) => (
            <SingleCounter key={item.label} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
