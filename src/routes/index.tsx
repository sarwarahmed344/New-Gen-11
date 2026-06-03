import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { PlayerGrid } from "@/components/PlayerGrid";
import { PlayerFeature } from "@/components/PlayerFeature";
import { Outro } from "@/components/Outro";
import { Formation } from "@/components/Formation";
import { featuredPlayers } from "@/lib/players";
import { AuraProvider } from "@/lib/aura-context";
import { ProgressBar, TopBar, SideNav, GlobalFX } from "@/components/GlobalUI";

const TITLE = "NewGen11 — Blue Lock's Most Dangerous U-20 Squad";
const DESC = "Six revealed, five classified. The next generation of football egoists.";
const OG_IMG = "https://storage.googleapis.com/gpt-engineer-file-uploads/wyTrppZVjTgft8hdt3sFenZtc9o1/social-images/social-1779785587533-download.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMG },
      { property: "og:url", content: "https://newgen11-sarwar.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMG },
    ],
    links: [{ rel: "canonical", href: "https://newgen11-sarwar.lovable.app/" }],
  }),
});

function Index() {
  return (
    <AuraProvider>
      <main className="bg-background text-foreground crosshair-cursor">
        <ProgressBar />
        <TopBar />
        <SideNav />
        <GlobalFX />
        <Hero />
        <PlayerGrid />
        {featuredPlayers.map((player) => (
          <PlayerFeature key={player.id} player={player} />
        ))}
        <Outro />
      </main>
    </AuraProvider>
  );
}
