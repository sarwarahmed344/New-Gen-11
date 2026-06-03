import { motion } from "motion/react";
import { featuredPlayers, mysterySlots } from "@/lib/players";
import { useAura } from "@/lib/aura-context";

type Spot = {
  num: string;
  top: string; // %
  left: string; // %
};

// 4-3-3 layout
const SPOTS: Spot[] = [
  // GK
  { num: "11", top: "92%", left: "50%" },
  // DEF (back four)
  { num: "04", top: "72%", left: "15%" },
  { num: "03", top: "74%", left: "37%" },
  { num: "06", top: "74%", left: "63%" },
  { num: "02", top: "72%", left: "85%" },
  // MID — Hugo · Classified · Sae
  { num: "07", top: "48%", left: "22%" },
  { num: "01", top: "44%", left: "50%" },
  { num: "10", top: "48%", left: "78%" },
  // FWD — Loki · Kaiser · Bunny
  { num: "08", top: "20%", left: "20%" },
  { num: "09", top: "14%", left: "50%" },
  { num: "05", top: "20%", left: "80%" },
];

export function Formation() {
  const { mode } = useAura();
  const vivid = mode === "vivid";
  const byNum = new Map(featuredPlayers.map((p) => [p.num, p]));
  const mystery = new Set(mysterySlots.map((m) => m.num));

  return (
    <section className="relative py-32 px-6 border-t border-border" id="formation">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <div>
            <p className="mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              [ FORMATION / 4-3-3 ]
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Tactical Board
            </h2>
          </div>
          <p className="mono text-[10px] tracking-[0.3em] text-muted-foreground hidden md:block">
            11 EGOS · 1 SHAPE →
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[680px] aspect-[2/3] border border-border bg-black overflow-hidden"
        >
          {/* Pitch lines */}
          <div className="absolute inset-4 border border-foreground/30" />
          {/* Halfway */}
          <div className="absolute left-4 right-4 top-1/2 h-px bg-foreground/30" />
          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border border-foreground/30 rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-foreground/50 rounded-full" />
          {/* Penalty boxes */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[55%] h-[14%] border border-foreground/30 border-t-0" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[55%] h-[14%] border border-foreground/30 border-b-0" />
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[28%] h-[6%] border border-foreground/30 border-t-0" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[28%] h-[6%] border border-foreground/30 border-b-0" />

          {/* Players */}
          {SPOTS.map((spot, i) => {
            const player = byNum.get(spot.num);
            const isMystery = mystery.has(spot.num);
            return (
              <motion.div
                key={spot.num}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                style={{ top: spot.top, left: spot.left }}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center font-bold text-xs md:text-sm ${
                    isMystery
                      ? "bg-black border-muted-foreground/50 text-muted-foreground"
                      : "bg-foreground text-background border-foreground"
                  }`}
                  style={
                    !isMystery && vivid && player
                      ? { boxShadow: `0 0 18px ${player.aura}aa` }
                      : undefined
                  }
                >
                  {isMystery ? "?" : spot.num}
                </div>
                <div className="mono text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-center whitespace-nowrap">
                  {isMystery ? (
                    <span className="text-muted-foreground">N°{spot.num}</span>
                  ) : (
                    <span className="text-foreground">
                      {player?.name.split(" ").slice(-1)[0]}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground max-w-3xl mx-auto">
          <div>
            <p className="text-foreground mb-1">SHAPE</p>
            <p>4 — 3 — 3</p>
          </div>
          <div>
            <p className="text-foreground mb-1">REVEALED</p>
            <p>06</p>
          </div>
          <div>
            <p className="text-foreground mb-1">CLASSIFIED</p>
            <p>05</p>
          </div>
          <div>
            <p className="text-foreground mb-1">STATUS</p>
            <p>ASSEMBLED</p>
          </div>
        </div>
      </div>
    </section>
  );
}
