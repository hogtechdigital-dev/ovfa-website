"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-run on every route change: client-side navigation doesn't
    // remount this component (it lives in the root layout), so without
    // this the new page's .reveal elements never get observed and stay
    // invisible until a full reload.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    // Small delay so the new page's DOM has painted before we query it.
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
