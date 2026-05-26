import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity, scale, y }} className="text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mono text-xs tracking-[0.4em] text-muted-foreground mb-8"
        >
          [ EP. 001 — INGRESS ]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase leading-[0.9] tracking-tighter"
        >
          The New
          <br />
          <span className="italic font-light">Generation</span>
          <br />
          Eleven
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-6 mono text-[10px] tracking-[0.3em] text-muted-foreground"
        >
          <span>EGOISTS ONLY</span>
          <span className="w-12 h-px bg-border" />
          <span>SCROLL TO ENTER</span>
        </motion.div>
      </motion.div>

      <div className="absolute top-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        BLUE LOCK / NGE
      </div>
      <div className="absolute top-6 right-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        2026 — VOL.XI
      </div>
      <div className="absolute bottom-6 left-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        N° 11 / 11
      </div>
      <div className="absolute bottom-6 right-6 mono text-[10px] tracking-[0.3em] text-muted-foreground">
        ↓
      </div>
    </section>
  );
}
