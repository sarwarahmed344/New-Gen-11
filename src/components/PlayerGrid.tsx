import { motion } from "motion/react";
import { featuredPlayers, mysterySlots } from "@/lib/players";
import { useAura } from "@/lib/aura-context";

function scrollToPlayer(id: string) {
  document.getElementById(`player-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PlayerGrid() {
  const { mode } = useAura();
  const vivid = mode === "vivid";

  return (
    <section className="relative min-h-screen py-32 px-6 border-t border-border" id="roster">
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
            06 REVEALED · 05 CLASSIFIED →
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featuredPlayers.map((player, i) => (
            <motion.div
              key={player.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/5] border border-border bg-card transition-all duration-300 overflow-hidden roster-card"
            >
              {vivid && (
                <div
                  className="absolute inset-0 aura-bloom opacity-70 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 45%, ${player.aura}55, transparent 65%)` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-80" />
              <div className="absolute top-3 left-3 mono text-[10px] tracking-widest text-muted-foreground z-10">
                N°{player.num}
              </div>
              <div className="absolute top-3 right-3 mono text-[10px] tracking-widest text-muted-foreground z-10 flex items-center gap-1">
                <span>{player.flag}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-1">
                <img
                  src={player.cardImage}
                  alt={`${player.name} manga cutout`}
                  className="manga-cutout h-[72%] w-auto object-contain translate-y-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="text-[120px] md:text-[140px] font-bold leading-none opacity-[0.08] group-hover:opacity-[0.18] transition-opacity">
                  {player.num}
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <p className="text-sm font-bold uppercase tracking-tight leading-tight">{player.name}</p>
                <p className="mono text-[9px] tracking-widest text-muted-foreground uppercase mt-0.5">
                  {player.club} · {player.role.split(" ").slice(-1)[0]}
                </p>
                <p
                  className="mono text-[9px] tracking-widest uppercase mt-1"
                  style={{ color: vivid ? player.aura : "#fff" }}
                >
                  ▮ {player.weapon}
                </p>
                <button
                  onClick={() => scrollToPlayer(player.id)}
                  className="mt-2 w-full text-[9px] mono tracking-[0.25em] uppercase border border-border py-1 hover:bg-foreground hover:text-background transition-colors"
                >
                  View Profile ↓
                </button>
              </div>
            </motion.div>
          ))}

          {/* MYSTERY SLOTS */}
          {mysterySlots.map((slot, i) => (
            <motion.div
              key={`mystery-${slot.num}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (featuredPlayers.length + i) * 0.06 }}
              className="group relative aspect-[3/5] border border-border bg-black overflow-hidden mystery-card"
              title="The world is not yet ready."
            >
              <div className="absolute inset-0 redacted-texture pointer-events-none" />
              <div className="absolute top-3 left-3 mono text-[10px] tracking-widest text-muted-foreground z-10">
                N°{slot.num}
              </div>
              <div className="absolute top-3 right-3 mono text-[9px] tracking-widest text-muted-foreground z-10">
                ░░░
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[110px] md:text-[130px] font-bold leading-none opacity-30 select-none">?</span>
              </div>
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-10 text-center">
                <div className="bg-foreground text-background mono text-[10px] tracking-[0.3em] py-1 px-2 inline-block rotate-[-4deg] font-bold border-2 border-foreground">
                  LOCKED
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="h-3 bg-foreground/90 mb-2" />
                <p className="mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase leading-tight">
                  Identity Classified
                </p>
                <p className="mono text-[8px] tracking-[0.2em] text-muted-foreground/60 uppercase mt-0.5">
                  Not yet revealed
                </p>
                <p className="mono text-[8.5px] tracking-[0.15em] text-foreground/80 uppercase mt-2 leading-snug normal-case italic">
                  "{slot.tagline}"
                </p>
                {slot.next && (
                  <p className="mono text-[8px] tracking-[0.25em] text-muted-foreground uppercase mt-2 blink-pulse">
                    [ Next transmission: incoming ]
                  </p>
                )}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/85 z-20 p-4">
                <p className="text-[11px] md:text-xs mono tracking-[0.25em] uppercase text-center leading-relaxed">
                  {slot.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
