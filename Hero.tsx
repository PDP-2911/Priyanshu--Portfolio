"use client";

import { motion } from "framer-motion";
import ConstellationField from "./ConstellationField";
import { profile } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden border-b border-line-soft"
    >
      <ConstellationField />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/40 to-bg pointer-events-none" />

      <div className="relative container-px pt-28 md:pt-36 flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-data text-[11px] uppercase tracking-[0.25em] text-signal mb-6"
        >
          {profile.location} · Analytics &amp; Applied Research
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-balance text-[13vw] sm:text-[9vw] md:text-[6.4vw] lg:text-[5.6vw]">
          {["Turning", "data into"].map((line, i) => (
            <motion.span
              key={line}
              className="block overflow-hidden"
            >
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </motion.span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block text-ink-faint"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              defensible
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              decisions.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-ink-dim text-base md:text-lg leading-relaxed"
        >
          {profile.name} — {profile.role}. I build analytical tools,
          study how regulation keeps pace with AI, and ship software that
          respects the person on the other end of the data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full text-sm font-medium hover:bg-signal transition-colors duration-300 focus-ring"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-line text-ink px-6 py-3 rounded-full text-sm font-medium hover:border-signal hover:text-signal transition-colors duration-300 focus-ring"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="relative container-px pb-10 flex items-end justify-between font-data text-[11px] uppercase tracking-[0.15em] text-ink-faint">
        <div className="flex items-center gap-2">
          <ArrowDown size={14} className="animate-bounce text-signal" />
          Scroll
        </div>
        <div className="hidden sm:block">MS Business Analytics · WSU · Est. 2027</div>
      </div>
    </section>
  );
}
