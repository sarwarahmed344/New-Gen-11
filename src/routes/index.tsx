import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { PlayerGrid } from "@/components/PlayerGrid";
import { PlayerFeature } from "@/components/PlayerFeature";
import { Outro } from "@/components/Outro";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "New Generation Eleven — Blue Lock" },
      { name: "description", content: "A scrollytelling tribute to the New Generation Eleven. Egoists only." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <PlayerGrid />
      <PlayerFeature
        num="10"
        name="Sae Itoshi"
        country="Japan"
        club="La Real"
        position="Midfielder"
        tag1="BEAUTIFUL DESTRUCTION"
        tag2="THE PRODIGY"
        panels={["a", "b", "c", "d"]}
      />
      <PlayerFeature
        num="09"
        name="Michael Kaiser"
        country="Germany"
        club="Bastard München"
        position="Forward"
        tag1="KAISER IMPACT"
        tag2="THE EMPEROR"
        panels={["a", "b", "c", "d"]}
      />
      <Outro />
    </main>
  );
}
