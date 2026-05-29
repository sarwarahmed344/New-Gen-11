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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 max-w-2xl text-center"
      >
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          NewGen11 is not a team. It is a <span className="text-foreground font-semibold">verdict</span>.
          Six revealed, five hidden — eleven egos forged under pressure no system was meant to survive.
          This is the next generation of football: <span className="text-foreground font-semibold">talent without apology</span>,
          ambition without ceiling, hunger without end.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mono text-[10px] tracking-[0.3em] uppercase">
        <span className="text-foreground">NewGen11</span>
        <span className="opacity-30">·</span>
        <a
          href="https://as-arts-gallery.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors story-link"
        >
          AS Arts Gallery
        </a>
        <span className="opacity-30">·</span>
        <a
          href="https://ahmed-sarwar-portfolio.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors story-link"
        >
          Portfolio
        </a>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase max-w-4xl w-full">
        <div>
          <p className="text-foreground mb-2">VOL.</p>
          <p>XI / 2026</p>
        </div>
        <div>
          <p className="text-foreground mb-2">ASSEMBLED BY</p>
          <p>AS</p>
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
