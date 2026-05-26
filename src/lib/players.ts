import sae1 from "@/assets/sae-1.png";
import sae2 from "@/assets/sae-2.png";
import sae3 from "@/assets/sae-3.png";
import kaiser1 from "@/assets/kaiser-1.png";
import kaiser2 from "@/assets/kaiser-2.png";
import kaiser3 from "@/assets/kaiser-3.png";
import loki1 from "@/assets/loki-1.png";
import loki2 from "@/assets/loki-2.png";
import loki3 from "@/assets/loki-3.png";
import vivian1 from "@/assets/vivian-1.png";
import vivian2 from "@/assets/vivian-2.png";
import vivian3 from "@/assets/vivian-3.png";
import lorenzo1 from "@/assets/lorenzo-1.png";
import lorenzo2 from "@/assets/lorenzo-2.png";
import lorenzo3 from "@/assets/lorenzo-3.png";
import bunny1 from "@/assets/bunny-1.png";
import bunny2 from "@/assets/bunny-2.png";
import bunny3 from "@/assets/bunny-3.png";

export type FeaturedPlayer = {
  num: string;
  name: string;
  role: string;
  descriptor: string;
  tag1: string;
  tag2: string;
  cardImage: string;
  heroImage: string;
  bannerImage: string;
  closeupImage: string;
};

export const featuredPlayers: FeaturedPlayer[] = [
  {
    num: "10",
    name: "Itoshi Sae",
    role: "Midfielder",
    descriptor: "Beautiful destruction / The prodigy",
    tag1: "BEAUTIFUL DESTRUCTION",
    tag2: "THE PRODIGY",
    cardImage: sae3,
    heroImage: sae1,
    bannerImage: sae3,
    closeupImage: sae2,
  },
  {
    num: "09",
    name: "Micheal Kaiser",
    role: "Forward",
    descriptor: "Kaiser impact / The emperor",
    tag1: "KAISER IMPACT",
    tag2: "THE EMPEROR",
    cardImage: kaiser1,
    heroImage: kaiser3,
    bannerImage: kaiser2,
    closeupImage: kaiser1,
  },
  {
    num: "08",
    name: "Julian Loki",
    role: "Forward",
    descriptor: "Godspeed / Sudden mutation",
    tag1: "GODSPEED",
    tag2: "SUDDEN MUTATION",
    cardImage: loki1,
    heroImage: loki3,
    bannerImage: loki2,
    closeupImage: loki1,
  },
  {
    num: "07",
    name: "Vivian Hugo",
    role: "Forward",
    descriptor: "Machine vision / World class ego",
    tag1: "MACHINE VISION",
    tag2: "WORLD CLASS EGO",
    cardImage: vivian1,
    heroImage: vivian3,
    bannerImage: vivian2,
    closeupImage: vivian1,
  },
  {
    num: "06",
    name: "Don Lorenzo",
    role: "Defender",
    descriptor: "Zombie style / Golden grin",
    tag1: "ZOMBIE STYLE",
    tag2: "GOLDEN GRIN",
    cardImage: lorenzo2,
    heroImage: lorenzo1,
    bannerImage: lorenzo2,
    closeupImage: lorenzo3,
  },
  {
    num: "05",
    name: "Bunny Iglesias",
    role: "Forward",
    descriptor: "Wild shot / Beautiful menace",
    tag1: "WILD SHOT",
    tag2: "BEAUTIFUL MENACE",
    cardImage: bunny1,
    heroImage: bunny3,
    bannerImage: bunny1,
    closeupImage: bunny2,
  },
];
