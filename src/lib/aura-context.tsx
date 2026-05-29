import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type Mode = "mono" | "vivid";

type Ctx = {
  mode: Mode;
  toggle: () => void;
  flashing: boolean;
};

const AuraContext = createContext<Ctx>({ mode: "mono", toggle: () => {}, flashing: false });

export function AuraProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("mono");
  const [flashing, setFlashing] = useState(false);

  const toggle = useCallback(() => {
    setFlashing(true);
    setTimeout(() => {
      setMode((m) => (m === "mono" ? "vivid" : "mono"));
    }, 120);
    setTimeout(() => setFlashing(false), 480);
  }, []);

  return (
    <AuraContext.Provider value={{ mode, toggle, flashing }}>
      {children}
      {flashing && (
        <div
          className="fixed inset-0 z-[200] pointer-events-none mix-blend-difference"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.9) 0 2px, rgba(0,0,0,0.9) 2px 4px)",
            animation: "glitch-flash 0.45s steps(6) forwards",
          }}
        />
      )}
    </AuraContext.Provider>
  );
}

export const useAura = () => useContext(AuraContext);
