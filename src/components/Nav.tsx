"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="font-display font-semibold text-sm tracking-tight text-ink focus-ring rounded"
        >
          P<span className="text-signal">.</span>D<span className="text-signal">.</span>
          <span className="hidden sm:inline text-ink-dim font-normal ml-1">Pascal</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-data text-[11px] uppercase tracking-[0.12em]">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300 focus-ring ${
                  active === item.id
                    ? "text-ink"
                    : "text-ink-faint hover:text-ink-dim"
                }`}
              >
                <span
                  className={`transition-colors ${
                    active === item.id ? "text-signal" : "text-line"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#resume"
          className="hidden md:inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 text-[11px] font-data uppercase tracking-[0.12em] text-ink-dim hover:text-ink hover:border-signal transition-colors duration-300 focus-ring"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink focus-ring rounded p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line-soft">
          <ul className="flex flex-col container-px py-4 gap-1 font-data text-xs uppercase tracking-[0.12em]">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 text-ink-dim hover:text-ink transition-colors"
                >
                  <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#resume"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 text-signal"
              >
                → Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
