import { motion } from "motion/react";

export function Outro() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 border-t border-border">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mono text-[10px] tracking-[0.4em] text-muted-foreground mb-8"
      >
        [ END OF TRANSMISSION ]
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]"
      >
        Devour
        <br />
        <span className="italic font-light">or be</span>
        <br />
        Devoured.
      </motion.h2>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase max-w-4xl w-full">
        <div>
          <p className="text-foreground mb-2">VOL.</p>
          <p>XI / 2026</p>
        </div>
        <div>
          <p className="text-foreground mb-2">DIRECTOR</p>
          <p>J. EGO</p>
        </div>
        <div>
          <p className="text-foreground mb-2">FORMAT</p>
          <p>SCROLL EDIT</p>
        </div>
        <div>
          <p className="text-foreground mb-2">STATUS</p>
          <p>ACTIVE</p>
        </div>
      </div>
    </section>
  );
}
