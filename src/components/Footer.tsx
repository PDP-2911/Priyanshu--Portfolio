import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="container-px py-8 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-3 font-data text-[11px] uppercase tracking-[0.1em] text-ink-faint">
      <span>&copy; {new Date().getFullYear()} {profile.name}</span>
      <a href="#top" className="hover:text-signal transition-colors focus-ring rounded">
        Back to top ↑
      </a>
    </footer>
  );
}
