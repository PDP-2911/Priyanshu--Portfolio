"use client";

import { useEffect, useRef } from "react";
import { navItems } from "@/lib/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SignalThread() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!lineRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="hidden lg:flex fixed left-8 top-0 h-screen z-40 flex-col items-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative flex-1 w-px my-24">
        <div className="absolute inset-0 bg-line-soft" />
        <div
          ref={lineRef}
          className="absolute inset-0 bg-signal origin-top"
          style={{ transform: "scaleY(0)" }}
        />
        {navItems.map((item, i) => (
          <div
            key={item.id}
            className="absolute -left-[3px] w-[7px] h-[7px] rounded-full bg-bg border border-line-soft"
            style={{ top: `${(i / (navItems.length - 1)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
