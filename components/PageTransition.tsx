"use client";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // key={pathname} forces React to remount this div on every route change,
  // which re-triggers the CSS animation below each time.
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
