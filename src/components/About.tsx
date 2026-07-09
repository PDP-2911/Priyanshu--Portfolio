import Reveal from "./Reveal";

const stats = [
  { value: "03", label: "Published research papers" },
  { value: "02", label: "Independent productivity apps" },
  { value: "2027", label: "Expected MSBA graduation" },
];

export default function About() {
  return (
    <section id="about" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
              About
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 leading-tight text-balance">
              Analyst by training, builder by habit.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-ink-dim leading-relaxed">
              I&apos;m a Computer Science graduate now pursuing an MS in
              Business Analytics at Wichita State University. My work sits at
              the intersection of quantitative analysis and the legal
              systems trying to govern the technology producing that data —
              I&apos;ve spent time in customer operations translating tariffs
              and billing logic for people who needed clarity, and in
              research co-authoring papers on how AI advertising and
              startup regulation actually function in practice.
            </p>
            <p className="mt-6 text-lg md:text-xl text-ink-dim leading-relaxed">
              Outside of coursework and research, I build small, focused
              tools — an expense tracker, a scheduling app — because the
              fastest way to understand a workflow is to automate it
              yourself.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-line-soft pt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  {s.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-ink-faint leading-snug">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
