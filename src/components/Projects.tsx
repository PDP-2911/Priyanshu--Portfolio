import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { ExpenseMockup, ScheduleMockup } from "./ProjectMockups";
import { projects } from "@/lib/data";

const mockups: Record<string, React.ReactNode> = {
  "expense-tracker": <ExpenseMockup />,
  "schedule-maker": <ScheduleMockup />,
};

export default function Projects() {
  return (
    <section id="projects" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <Reveal>
        <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
          Featured Projects
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-16 leading-tight max-w-xl text-balance">
          Tools built to solve my own problems first.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} mockup={mockups[p.id]} />
        ))}
      </div>
    </section>
  );
}
