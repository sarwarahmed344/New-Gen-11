import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface Props {
  num: string;
  name: string;
  country: string;
  club: string;
  position: string;
  tag1: string;
  tag2: string;
  panels: string[];
}

export function PlayerFeature({ num, name, country, club, position, tag1, tag2, panels }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Layer 1: details fade in then out
  const l1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const l1Y = useTransform(scrollYProgress, [0, 0.35], [40, -40]);

  // Layer 2: banner
  const l2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const l2X = useTransform(scrollYProgress, [0.3, 0.7], ["-5%", "5%"]);

  // Layer 3: big number
  const l3Opacity = useTransform(scrollYProgress, [0.65, 0.78, 0.95], [0, 1, 1]);
  const l3Scale = useTransform(scrollYProgress, [0.65, 0.95], [1.2, 1]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* corner meta */}
        <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
          FEATURE · N°{num}
        </div>
        <div className="absolute top-6 right-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
          {country.toUpperCase()}
        </div>

        {/* Layer 1: details */}
        <motion.div
          style={{ opacity: l1Opacity, y: l1Y }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="mono text-xs tracking-[0.5em] text-muted-foreground mb-6">
              PROFILE
            </p>
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
              {name}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mono text-sm tracking-widest uppercase">
              <span>{country}</span>
              <span className="text-muted-foreground">/</span>
              <span>{club}</span>
              <span className="text-muted-foreground">/</span>
              <span>{position}</span>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: horizontal banner */}
        <motion.div
          style={{ opacity: l2Opacity, x: l2X }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-border bg-background py-10"
        >
          <div className="flex items-center justify-center gap-4 px-6 overflow-hidden">
            <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">
              ▮ {tag1}
            </span>
            {panels.map((_, i) => (
              <div
                key={i}
                className="shrink-0 w-32 md:w-48 h-28 md:h-40 border border-border bg-secondary flex items-center justify-center"
              >
                <span className="mono text-[10px] tracking-widest text-muted-foreground">
                  PNL_{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
            <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">
              {tag2} ▮
            </span>
          </div>
        </motion.div>

        {/* Layer 3: big typography */}
        <motion.div
          style={{ opacity: l3Opacity, scale: l3Scale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center leading-none">
            <div className="text-[40vw] md:text-[28vw] font-bold tracking-tighter leading-[0.8]">
              {num}
            </div>
            <div className="-mt-4 md:-mt-8 text-2xl md:text-5xl font-bold uppercase tracking-[0.2em]">
              — {position} —
            </div>
          </div>
        </motion.div>

        {/* progress bar */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">
            {name.split(" ")[0].toUpperCase()}
          </span>
          <div className="flex-1 h-px bg-border relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-foreground origin-left"
            />
          </div>
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">
            N°{num}
          </span>
        </div>
      </div>
    </section>
  );
}
