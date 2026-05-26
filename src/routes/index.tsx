import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { PlayerGrid } from "@/components/PlayerGrid";
import { PlayerFeature } from "@/components/PlayerFeature";
import { Outro } from "@/components/Outro";
import { featuredPlayers } from "@/lib/players";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "New Generation Eleven — Blue Lock" },
      { name: "description", content: "A black-and-white scrollytelling tribute to Blue Lock's New Generation Eleven." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <PlayerGrid />
      {featuredPlayers.map((player) => (
        <PlayerFeature
          key={player.name}
          num={player.num}
          name={player.name}
          position={player.role}
          tag1={player.tag1}
          tag2={player.tag2}
          heroImage={player.heroImage}
          bannerImage={player.bannerImage}
          closeupImage={player.closeupImage}
        />
      ))}
      <Outro />
    </main>
  );
}

