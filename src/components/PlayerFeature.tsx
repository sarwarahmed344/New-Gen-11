import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { FeaturedPlayer } from "@/lib/players";
import { useAura } from "@/lib/aura-context";

export function PlayerFeature({ player }: { player: FeaturedPlayer }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const { mode } = useAura();
  const vivid = mode === "vivid";
  const aura = player.aura;

  const l1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.38], [0, 1, 1, 0]);
  const l1TextX = useTransform(scrollYProgress, [0, 0.35], ["-6%", "6%"]);
  const l1ImageX = useTransform(scrollYProgress, [0, 0.35], ["10%", "-10%"]);
  // parallax different speed
  const l1ImageY = useTransform(scrollYProgress, [0, 0.35], [40, -40]);

  const l2Opacity = useTransform(scrollYProgress, [0.32, 0.42, 0.62, 0.72], [0, 1, 1, 0]);
  const l2X = useTransform(scrollYProgress, [0.32, 0.72], ["-8%", "8%"]);

  const l3Opacity = useTransform(scrollYProgress, [0.66, 0.8, 0.98], [0, 1, 1]);
  const l3Scale = useTransform(scrollYProgress, [0.66, 0.98], [1.18, 1]);
  const l3ImageY = useTransform(scrollYProgress, [0.66, 0.98], [24, -16]);

  const sectionBg = vivid
    ? { background: `radial-gradient(ellipse at center, ${aura}14 0%, #000 65%)` }
    : { background: "#000" };

  return (
    <section
      ref={ref}
      id={`player-${player.id}`}
      className="relative h-[320vh]"
      style={sectionBg}
    >
      <div className="sticky top-0 h-screen overflow-hidden border-y border-border">
        {vivid && (
          <div
            className="absolute inset-0 pointer-events-none aura-bloom"
            style={{
              background: `radial-gradient(circle at 50% 55%, ${aura}55 0%, ${aura}1a 28%, transparent 60%)`,
            }}
            aria-hidden
          />
        )}

        <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground z-30">
          FEATURE · N°{player.num}
        </div>
        <div className="absolute top-6 right-6 mono text-[10px] tracking-[0.3em] text-muted-foreground z-30 hidden sm:flex items-center gap-2">
          <span>{player.flag}</span>
          <span>{player.country.toUpperCase()}</span>
          <span className="opacity-30">/</span>
          <span>{player.club.toUpperCase()}</span>
        </div>

        {/* LAYER 1 — Portrait + name */}
        <motion.div
          style={{ opacity: l1Opacity }}
          className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-14"
        >
          <motion.div style={{ x: l1TextX }} className="z-20 text-center md:text-left">
            <p className="mono text-xs tracking-[0.5em] text-muted-foreground mb-6">PROFILE</p>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
              {player.name}
            </h2>
            <p
              className={`mt-4 text-sm md:text-base tracking-[0.3em] uppercase font-semibold inline-block px-3 py-1 border border-border ${vivid ? "shimmer" : ""}`}
              style={vivid ? { color: aura, borderColor: aura } : undefined}
            >
              「 {player.nickname} 」
            </p>
            <div className="mt-5 flex flex-wrap gap-2 mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase justify-center md:justify-start">
              <span className="border border-border px-2 py-1">{player.flag} {player.country}</span>
              <span className="border border-border px-2 py-1">{player.club}</span>
              <span className="border border-border px-2 py-1">{player.role}</span>
            </div>
            <p className="mt-6 italic text-muted-foreground max-w-md mx-auto md:mx-0 text-sm md:text-base">
              "{player.quote}"
            </p>
          </motion.div>

          <motion.div style={{ x: l1ImageX, y: l1ImageY }} className="relative h-[52vh] md:h-[78vh] flex items-end justify-center md:justify-end">
            <img
              src={player.heroImage}
              alt={`${player.name} manga cutout`}
              className="manga-cutout h-full w-auto object-contain select-none pointer-events-none relative z-10"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* LAYER 2 — Action panel */}
        <motion.div
          style={{ opacity: l2Opacity, x: l2X }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-7xl border-y border-border bg-background/95 backdrop-blur-sm py-8 md:py-10 px-4 md:px-6">
            <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
              <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">▮ {player.tag1}</span>
              <div className="flex-1 h-[220px] md:h-[280px] border border-border bg-secondary/30 overflow-hidden flex items-center justify-center relative">
                {vivid && (
                  <div
                    className="absolute inset-0 aura-bloom pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${aura}66, transparent 70%)` }}
                  />
                )}
                <img
                  src={player.bannerImage}
                  alt={`${player.name} manga action panel`}
                  className="manga-cutout h-full w-auto object-contain select-none pointer-events-none relative z-10"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">{player.tag2} ▮</span>
            </div>

            {/* STATS BAR */}
            <div className="mt-6 grid grid-cols-5 gap-3 md:gap-6">
              {player.stats.map((s) => (
                <div key={s.label}>
                  <div className="mono text-[9px] md:text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-1 flex justify-between">
                    <span>{s.label}</span>
                    <span className="text-foreground">{s.value}</span>
                  </div>
                  <div className="h-1.5 bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: false, margin: "-20%" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                      style={{ background: vivid ? aura : "#fff" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* LAYER 3 — Big number */}
        <motion.div
          style={{ opacity: l3Opacity, scale: l3Scale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.img
            style={{ y: l3ImageY }}
            src={player.closeupImage}
            alt={`${player.name} close-up manga cutout`}
            className="manga-cutout absolute right-0 md:right-10 bottom-0 h-[55vh] md:h-[88vh] w-auto object-contain opacity-35"
            loading="lazy"
            draggable={false}
          />

          <div className="text-center leading-none z-10">
            <div
              className={`text-[38vw] md:text-[24vw] font-bold tracking-tighter leading-[0.8] ${vivid ? "shimmer" : ""}`}
              style={vivid ? { color: "#fff", textShadow: `0 0 60px ${aura}aa` } : undefined}
            >
              {player.num}
            </div>
            <div className="-mt-3 md:-mt-6 text-xl md:text-4xl font-bold uppercase tracking-[0.2em]">
              — {player.role} —
            </div>
            <div className="mt-3 mono text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">
              {player.nickname}
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 z-30">
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">{player.name.toUpperCase()}</span>
          <div className="flex-1 h-px bg-border relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, background: vivid ? aura : "#fff" }}
              className="absolute inset-0 origin-left"
            />
          </div>
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">N°{player.num}</span>
        </div>
      </div>
    </section>
  );
}
