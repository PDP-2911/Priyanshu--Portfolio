import Reveal from "./Reveal";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative container-px py-28 md:py-32 border-b border-line-soft">
      <Reveal>
        <div className="rounded-3xl border border-line-soft bg-bg-raised p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-signal-soft flex items-center justify-center">
              <FileText className="text-signal" size={24} />
            </div>
            <div>
              <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
                Resume
              </span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl mt-3 leading-tight text-balance">
                One page. Every detail verified.
              </h2>
              <p className="text-ink-dim mt-3 max-w-md leading-relaxed">
                Education, experience, skills, and publications — in a
                single downloadable PDF, current as of this site&apos;s last
                update.
              </p>
            </div>
          </div>

          <a
            href="/resume/Priyanshu_Dennis_Pascal_Resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-ink text-bg px-7 py-4 rounded-full font-medium hover:bg-signal transition-colors duration-300 shrink-0 focus-ring"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
