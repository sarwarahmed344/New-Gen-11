import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { featuredPlayers, mysterySlots } from "@/lib/players";
import { useAura } from "@/lib/aura-context";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground z-[120] origin-left"
    />
  );
}

export function TopBar() {
  const { mode, toggle } = useAura();
  return (
    <div className="fixed top-0 left-0 right-0 z-[110] pointer-events-none">
      <div className="flex items-center justify-between px-4 md:px-6 pt-3">
        <a
          href="https://ahmed-sarwar-portfolio.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors bg-background/70 backdrop-blur px-2 py-1 border border-border"
        >
          ← Back to Portfolio
        </a>
        <button
          onClick={toggle}
          className="pointer-events-auto mono text-[10px] tracking-[0.3em] uppercase bg-background/70 backdrop-blur px-2 py-1 border border-border flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors"
          aria-label="Toggle color mode"
        >
          <span className={mode === "mono" ? "text-foreground" : "text-muted-foreground"}>MONO</span>
          <span className="opacity-40">/</span>
          <span className={mode === "vivid" ? "text-foreground" : "text-muted-foreground"}>VIVID</span>
        </button>
      </div>
    </div>
  );
}

export function SideNav() {
  const { mode } = useAura();
  const vivid = mode === "vivid";
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    featuredPlayers.forEach((p) => {
      const el = document.getElementById(`player-${p.id}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-[110] flex flex-col gap-3 items-center"
      aria-label="Player navigation"
    >
      {featuredPlayers.map((p) => {
        const isActive = active === `player-${p.id}`;
        return (
          <button
            key={p.id}
            onClick={() =>
              document.getElementById(`player-${p.id}`)?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2"
            aria-label={`Jump to ${p.name}`}
          >
            <span
              className={`mono text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100" : ""}`}
            >
              {p.num}
            </span>
            <span
              className={`block w-2 h-2 border border-foreground transition-all ${isActive ? "scale-150" : "scale-100"}`}
              style={{
                background: isActive ? (vivid ? p.aura : "#fff") : "transparent",
              }}
            />
          </button>
        );
      })}
      {mysterySlots.map((s) => (
        <span key={s.num} className="block w-1.5 h-1.5 border border-muted-foreground/40 rounded-full" />
      ))}
    </nav>
  );
}

export function GlobalFX() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[100] scanlines mix-blend-overlay opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-[101] vignette" />
    </>
  );
}
