import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface Props {
  num: string;
  name: string;
  position: string;
  tag1: string;
  tag2: string;
  heroImage: string;
  bannerImage: string;
  closeupImage: string;
}

export function PlayerFeature({
  num,
  name,
  position,
  tag1,
  tag2,
  heroImage,
  bannerImage,
  closeupImage,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const l1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.38], [0, 1, 1, 0]);
  const l1TextX = useTransform(scrollYProgress, [0, 0.35], ["-6%", "6%"]);
  const l1ImageX = useTransform(scrollYProgress, [0, 0.35], ["10%", "-10%"]);

  const l2Opacity = useTransform(scrollYProgress, [0.32, 0.42, 0.62, 0.72], [0, 1, 1, 0]);
  const l2X = useTransform(scrollYProgress, [0.32, 0.72], ["-8%", "8%"]);

  const l3Opacity = useTransform(scrollYProgress, [0.66, 0.8, 0.98], [0, 1, 1]);
  const l3Scale = useTransform(scrollYProgress, [0.66, 0.98], [1.18, 1]);
  const l3ImageY = useTransform(scrollYProgress, [0.66, 0.98], [24, -16]);

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden border-y border-border">
        <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground z-30">
          FEATURE · N°{num}
        </div>

        <motion.div
          style={{ opacity: l1Opacity }}
          className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-14"
        >
          <motion.div style={{ x: l1TextX }} className="z-20 text-center md:text-left">
            <p className="mono text-xs tracking-[0.5em] text-muted-foreground mb-6">PROFILE</p>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">{name}</h2>
            <p className="mt-6 mono text-xs md:text-sm tracking-[0.35em] text-muted-foreground uppercase">{position}</p>
          </motion.div>

          <motion.div style={{ x: l1ImageX }} className="relative h-[52vh] md:h-[78vh] flex items-end justify-center md:justify-end">
            <img
              src={heroImage}
              alt={`${name} manga cutout`}
              className="h-full w-auto object-contain select-none pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: l2Opacity, x: l2X }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-7xl border-y border-border bg-background/95 backdrop-blur-sm py-8 md:py-10 px-4 md:px-6">
            <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
              <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">▮ {tag1}</span>
              <div className="flex-1 h-[220px] md:h-[280px] border border-border bg-secondary/30 overflow-hidden flex items-center justify-center">
                <img
                  src={bannerImage}
                  alt={`${name} manga action panel`}
                  className="h-full w-auto object-contain select-none pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="mono text-[10px] tracking-[0.3em] whitespace-nowrap shrink-0">{tag2} ▮</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: l3Opacity, scale: l3Scale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.img
            style={{ y: l3ImageY }}
            src={closeupImage}
            alt={`${name} close-up manga cutout`}
            className="absolute right-0 md:right-10 bottom-0 h-[55vh] md:h-[88vh] w-auto object-contain opacity-35"
            loading="lazy"
            draggable={false}
          />

          <div className="text-center leading-none z-10">
            <div className="text-[38vw] md:text-[24vw] font-bold tracking-tighter leading-[0.8]">{num}</div>
            <div className="-mt-3 md:-mt-6 text-xl md:text-4xl font-bold uppercase tracking-[0.2em]">— {position} —</div>
          </div>
        </motion.div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 z-30">
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">{name.toUpperCase()}</span>
          <div className="flex-1 h-px bg-border relative overflow-hidden">
            <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-foreground origin-left" />
          </div>
          <span className="mono text-[10px] tracking-[0.3em] text-muted-foreground">N°{num}</span>
        </div>
      </div>
    </section>
  );
}
