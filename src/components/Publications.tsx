"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { publications } from "@/lib/data";
import { ExternalLink, ChevronDown } from "lucide-react";

export default function Publications() {
  const [openId, setOpenId] = useState<string | null>(publications[0]?.id ?? null);

  return (
    <section id="publications" className="relative container-px py-28 md:py-36 border-b border-line-soft">
      <Reveal>
        <span className="font-data text-[11px] uppercase tracking-[0.25em] text-signal">
          Publications
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-4 leading-tight max-w-2xl text-balance">
          Research on how law is catching up to AI.
        </h2>
        <p className="text-ink-dim max-w-xl mb-16">
          Peer-reviewed, co-authored papers examining data privacy,
          consumer protection, and algorithmic accountability across
          jurisdictions.
        </p>
      </Reveal>

      <div className="border-t border-line-soft">
        {publications.map((pub, i) => {
          const open = openId === pub.id;
          return (
            <Reveal key={pub.id} delay={i * 0.06}>
              <div className="border-b border-line-soft">
                <button
                  onClick={() => setOpenId(open ? null : pub.id)}
                  className="w-full text-left py-8 flex items-start md:items-center gap-6 group focus-ring"
                >
                  <span className="font-data text-ink-faint text-sm shrink-0 pt-1 md:pt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-medium text-lg md:text-2xl text-ink group-hover:text-signal transition-colors duration-300 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-faint font-data">
                      {pub.journal} · {pub.meta}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-faint transition-transform duration-300 ${
                      open ? "rotate-180 text-signal" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-0 md:pl-12 max-w-2xl">
                      <p className="text-ink-dim leading-relaxed mb-4">
                        {pub.summary}
                      </p>
                      <p className="text-xs text-ink-faint font-data mb-4">
                        {pub.authors}
                      </p>
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-signal hover:gap-3 transition-all duration-300 focus-ring rounded"
                        >
                          Read the paper <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
