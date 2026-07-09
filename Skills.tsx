"use client";

import Reveal from "./Reveal";
import { skills, academicProjects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
              Skills
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 leading-tight text-balance">
              The instruments.
            </h2>
            <p className="mt-6 text-ink-dim leading-relaxed max-w-xs">
              Tools I reach for to move from raw numbers to a decision
              someone can act on.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((s) => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-3 border border-line-soft rounded-xl px-5 py-4 hover:border-signal/50 hover:bg-bg-raised transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-teal group-hover:bg-signal transition-colors duration-300" />
                <span className="font-display font-medium text-ink text-base md:text-lg">
                  {s.name}
                </span>
                <span className="font-data text-[10px] uppercase tracking-[0.1em] text-ink-faint ml-1">
                  {s.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2} className="mt-16">
            <div className="font-data text-[11px] uppercase tracking-[0.2em] text-ink-faint mb-6">
              Applied in academic projects
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {academicProjects.map((p) => (
                <div
                  key={p.id}
                  className="border border-line-soft rounded-xl p-6 hover:border-teal/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-medium text-ink text-base">
                      {p.name}
                    </h4>
                    <span className="font-data text-[10px] text-ink-faint whitespace-nowrap ml-3">
                      {p.date}
                    </span>
                  </div>
                  <p className="text-sm text-ink-dim leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
