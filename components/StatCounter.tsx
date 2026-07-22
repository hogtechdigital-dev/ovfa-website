"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, label, big }: { value: string; label: string; big?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState("0");

  // Split a value like "25+" into a numeric part (25) and a suffix (+)
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) {
      setDisplay(value);
      return;
    }
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const duration = 1400;
            const startTime = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * target) + suffix);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <p ref={ref} className={`font-bebas ${big ? "text-6xl md:text-7xl" : "text-4xl"} text-gold-light stat-glow leading-none mb-1 stat-count`}>
      {display}
    </p>
  );
}
