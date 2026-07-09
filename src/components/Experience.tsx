import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <Reveal>
        <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
          Experience
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-16 leading-tight">
          Where the work happened.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.12}>
            <div className="h-full bg-bg-raised border border-line-soft rounded-2xl p-8 hover:border-signal/40 transition-colors duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display font-semibold text-xl text-ink">
                    {job.company}
                  </h3>
                  <p className="text-ink-dim mt-1">{job.role}</p>
                </div>
                <span className="font-data text-[10px] uppercase tracking-[0.1em] text-ink-faint whitespace-nowrap border border-line rounded-full px-3 py-1.5">
                  {job.date}
                </span>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-ink-dim leading-relaxed">
                    <span className="text-signal mt-1.5 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
