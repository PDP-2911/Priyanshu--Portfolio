"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = {
  id: string;
  name: string;
  tag: string;
  url: string;
  summary: string;
  features: string[];
  color: string;
};

export default function ProjectCard({
  project,
  index,
  mockup,
}: {
  project: Project;
  index: number;
  mockup: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const accent = project.color === "teal" ? "var(--teal)" : "var(--signal)";

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          mx.set(0);
          my.set(0);
        }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-3xl border border-line-soft bg-bg-raised overflow-hidden"
      >
        <div className="relative h-64 md:h-80 border-b border-line-soft overflow-hidden bg-bg">
          <motion.div
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {mockup}
          </motion.div>
          <div className="absolute top-5 left-5 font-data text-[10px] uppercase tracking-[0.15em] text-ink-faint bg-bg/70 backdrop-blur px-3 py-1.5 rounded-full border border-line-soft">
            {project.tag}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink">
              {project.name}
            </h3>
            <span
              className="shrink-0 w-10 h-10 rounded-full border border-line flex items-center justify-center transition-all duration-300 group-hover:rotate-45"
              style={{ borderColor: hovered ? accent : undefined, color: hovered ? accent : undefined }}
            >
              <ArrowUpRight size={16} />
            </span>
          </div>
          <p className="text-ink-dim leading-relaxed mb-6">{project.summary}</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-ink-faint">
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: accent }}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Link>
  );
}