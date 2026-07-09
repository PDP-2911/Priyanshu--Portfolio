import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:+1${profile.phone.replace(/\./g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative container-px py-28 md:py-40">
      <Reveal>
        <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
          Contact
        </span>
        <h2 className="font-display font-semibold text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl mt-6 leading-[0.95] tracking-tight text-balance">
          Let&apos;s talk
          <br />
          data.
        </h2>
        <p className="mt-8 text-ink-dim max-w-md flex items-center gap-2 font-data text-sm">
          <MapPin size={14} className="text-signal" />
          Based in {profile.location} — open to internships, research
          collaboration, and freelance analytics work.
        </p>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-3 gap-4">
        {links.map((l, i) => {
          const Icon = l.icon;
          return (
            <Reveal key={l.label} delay={0.1 + i * 0.08}>
              <a
                href={l.href}
                target={l.label === "LinkedIn" ? "_blank" : undefined}
                rel={l.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between h-full min-h-[150px] border border-line-soft rounded-2xl p-6 hover:border-signal/50 hover:bg-bg-raised transition-colors duration-300 focus-ring"
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-signal" />
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <div>
                  <div className="font-data text-[10px] uppercase tracking-[0.15em] text-ink-faint mb-1">
                    {l.label}
                  </div>
                  <div className="font-display text-ink text-sm md:text-base break-all">
                    {l.value}
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
