import { motion } from "motion/react";

const players = [
  { num: "10", name: "Sae Itoshi", country: "Japan", club: "La Real", pos: "MID" },
  { num: "09", name: "Michael Kaiser", country: "Germany", club: "Bastard München", pos: "FWD" },
  { num: "11", name: "Rin Itoshi", country: "Japan", club: "PXG", pos: "FWD" },
  { num: "08", name: "Reo Mikage", country: "Japan", club: "Ubers", pos: "MID" },
  { num: "07", name: "Yoichi Isagi", country: "Japan", club: "Bastard München", pos: "FWD" },
  { num: "01", name: "Alexis Ness", country: "France", club: "PXG", pos: "MID" },
];

export function PlayerGrid() {
  return (
    <section className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <div>
            <p className="mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              [ ROSTER / 011 ]
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              The Selected
            </h2>
          </div>
          <p className="mono text-[10px] tracking-[0.3em] text-muted-foreground hidden md:block">
            06 OF 11 SHOWN →
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {players.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="player-card-glow group relative aspect-[2/5] border border-border bg-card transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 left-3 mono text-[10px] tracking-widest text-muted-foreground">
                N°{p.num}
              </div>
              <div className="absolute top-3 right-3 mono text-[10px] tracking-widest text-muted-foreground">
                {p.pos}
              </div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
                <div className="text-[120px] md:text-[140px] font-bold leading-none opacity-10 group-hover:opacity-30 transition-opacity">
                  {p.num}
                </div>
              </div>
              <div className="absolute bottom-4 left-3 right-3">
                <p className="text-sm font-bold uppercase tracking-tight leading-tight mb-1">
                  {p.name}
                </p>
                <p className="mono text-[9px] tracking-widest text-muted-foreground uppercase">
                  {p.country} · {p.club}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
