import { motion } from "motion/react";
import { featuredPlayers } from "@/lib/players";

export function PlayerGrid() {
  return (
    <section className="relative min-h-screen py-32 px-6 border-t border-border">
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
            06 CUTS LOADED →
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {featuredPlayers.map((player, i) => (
            <motion.div
              key={player.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="player-card-glow group relative aspect-[2/5] border border-border bg-card transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-70 transition-opacity" />
              <div className="absolute top-3 left-3 mono text-[10px] tracking-widest text-muted-foreground z-10">
                N°{player.num}
              </div>
              <div className="absolute top-3 right-3 mono text-[10px] tracking-widest text-muted-foreground z-10">
                {player.role.slice(0, 3).toUpperCase()}
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-1">
                <img
                  src={player.cardImage}
                  alt={`${player.name} manga cutout`}
                  className="manga-cutout h-[72%] w-auto object-contain translate-y-2 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="text-[120px] md:text-[140px] font-bold leading-none opacity-[0.08] group-hover:opacity-[0.18] transition-opacity">
                  {player.num}
                </div>
              </div>
              <div className="absolute bottom-4 left-3 right-3 z-10">
                <p className="text-sm font-bold uppercase tracking-tight leading-tight mb-1">{player.name}</p>
                <p className="mono text-[9px] tracking-widest text-muted-foreground uppercase">{player.descriptor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

