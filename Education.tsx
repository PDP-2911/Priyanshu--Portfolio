import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <Reveal>
        <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
          Education
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-16 leading-tight">
          Academic record.
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {education.map((ed, i) => (
          <Reveal key={ed.id} delay={i * 0.1}>
            <div className="group grid md:grid-cols-12 gap-3 md:gap-8 items-baseline py-8 border-t border-line-soft last:border-b transition-colors duration-300">
              <div className="md:col-span-2 font-data text-sm text-ink-faint">
                {ed.date}
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink group-hover:text-signal transition-colors duration-300">
                  {ed.degree}
                </h3>
                <p className="text-ink-dim mt-1">{ed.institution}, {ed.location}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <span
                  className={`inline-flex items-center gap-2 font-data text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border ${
                    ed.status === "In Progress"
                      ? "border-signal/40 text-signal"
                      : "border-line text-ink-faint"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      ed.status === "In Progress" ? "bg-signal animate-pulse" : "bg-ink-faint"
                    }`}
                  />
                  {ed.status}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
