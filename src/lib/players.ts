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

export type Stat = { label: string; value: number };

export type FeaturedPlayer = {
  id: string;
  num: string;
  name: string;
  nickname: string;
  role: string;
  club: string;
  country: string;
  flag: string;
  weapon: string;
  quote: string;
  aura: string; // hex
  auraName: string;
  tag1: string;
  tag2: string;
  stats: Stat[];
  cardImage: string;
  heroImage: string;
  bannerImage: string;
  closeupImage: string;
};

export const featuredPlayers: FeaturedPlayer[] = [
  {
    id: "sae",
    num: "10",
    name: "Itoshi Sae",
    nickname: "The Prodigy",
    role: "Central Midfielder",
    club: "RE-AL",
    country: "Japan",
    flag: "🇯🇵",
    weapon: "Beautiful Destruction",
    quote: "Football is a game decided by mistakes. I just don't make them.",
    aura: "#ff2d8a",
    auraName: "Magenta Pulse",
    tag1: "BEAUTIFUL DESTRUCTION",
    tag2: "THE PRODIGY",
    stats: [
      { label: "Speed", value: 88 },
      { label: "Shot", value: 84 },
      { label: "Dribble", value: 92 },
      { label: "Vision", value: 99 },
      { label: "Ego", value: 95 },
    ],
    cardImage: sae3,
    heroImage: sae1,
    bannerImage: sae3,
    closeupImage: sae2,
  },
  {
    id: "kaiser",
    num: "09",
    name: "Michael Kaiser",
    nickname: "God's Chosen Emperor",
    role: "Striker",
    club: "Bastard München",
    country: "Germany",
    flag: "🇩🇪",
    weapon: "Kaiser Impact",
    quote: "I am the only chosen one. The rest are just decorations.",
    aura: "#1e6bff",
    auraName: "Imperial Blue",
    tag1: "KAISER IMPACT",
    tag2: "THE EMPEROR",
    stats: [
      { label: "Speed", value: 90 },
      { label: "Shot", value: 98 },
      { label: "Dribble", value: 89 },
      { label: "Vision", value: 87 },
      { label: "Ego", value: 99 },
    ],
    cardImage: kaiser1,
    heroImage: kaiser3,
    bannerImage: kaiser2,
    closeupImage: kaiser1,
  },
  {
    id: "loki",
    num: "08",
    name: "Julian Loki",
    nickname: "God's Speed",
    role: "Left Winger",
    club: "PXG",
    country: "France",
    flag: "🇫🇷",
    weapon: "Godspeed",
    quote: "Faith is faster than reason. And I outrun both.",
    aura: "#ffb330",
    auraName: "Molten Gold",
    tag1: "GODSPEED",
    tag2: "SUDDEN MUTATION",
    stats: [
      { label: "Speed", value: 99 },
      { label: "Shot", value: 86 },
      { label: "Dribble", value: 94 },
      { label: "Vision", value: 82 },
      { label: "Ego", value: 90 },
    ],
    cardImage: loki1,
    heroImage: loki3,
    bannerImage: loki2,
    closeupImage: loki1,
  },
  {
    id: "vivian",
    num: "07",
    name: "Vivian Hugo",
    nickname: "The Machine",
    role: "Central Midfielder",
    club: "Arsenaly",
    country: "France",
    flag: "🇫🇷",
    weapon: "Machine Vision",
    quote: "Emotion is a bug. I patched mine.",
    aura: "#c8102e",
    auraName: "Deep Crimson",
    tag1: "MACHINE VISION",
    tag2: "WORLD CLASS EGO",
    stats: [
      { label: "Speed", value: 84 },
      { label: "Shot", value: 88 },
      { label: "Dribble", value: 86 },
      { label: "Vision", value: 97 },
      { label: "Ego", value: 92 },
    ],
    cardImage: vivian1,
    heroImage: vivian3,
    bannerImage: vivian2,
    closeupImage: vivian1,
  },
  {
    id: "lorenzo",
    num: "06",
    name: "Don Lorenzo",
    nickname: "The Zombie",
    role: "Centre-Back",
    club: "Ubers",
    country: "Italy",
    flag: "🇮🇹",
    weapon: "Zombie Style",
    quote: "I don't tackle. I bury.",
    aura: "#7a3cff",
    auraName: "Spectral Violet",
    tag1: "ZOMBIE STYLE",
    tag2: "GOLDEN GRIN",
    stats: [
      { label: "Speed", value: 80 },
      { label: "Shot", value: 70 },
      { label: "Dribble", value: 78 },
      { label: "Vision", value: 88 },
      { label: "Ego", value: 96 },
    ],
    cardImage: lorenzo2,
    heroImage: lorenzo1,
    bannerImage: lorenzo2,
    closeupImage: lorenzo3,
  },
  {
    id: "bunny",
    num: "05",
    name: "Bunny Iglesias",
    nickname: "The Jokester",
    role: "Right Winger",
    club: "Barcha",
    country: "Spain",
    flag: "🇪🇸",
    weapon: "Wild Shot",
    quote: "Football is a joke. I just laugh first.",
    aura: "#f5f5f5",
    auraName: "Stadium Flare",
    tag1: "WILD SHOT",
    tag2: "BEAUTIFUL MENACE",
    stats: [
      { label: "Speed", value: 92 },
      { label: "Shot", value: 89 },
      { label: "Dribble", value: 95 },
      { label: "Vision", value: 84 },
      { label: "Ego", value: 93 },
    ],
    cardImage: bunny1,
    heroImage: bunny3,
    bannerImage: bunny1,
    closeupImage: bunny2,
  },
];

export type MysterySlot = {
  num: string;
  tagline: string;
  next?: boolean;
};

export const mysterySlots: MysterySlot[] = [
  {
    num: "04",
    tagline: "The quietest player on the pitch. The loudest name in the aftermath.",
    next: true,
  },
  {
    num: "03",
    tagline: "Every team that faced him filed the same report. Unplayable.",
  },
  {
    num: "02",
    tagline: "He doesn't read the game. He rewrites it.",
  },
  {
    num: "01",
    tagline: "The last number. The first name they remember.",
  },
  {
    num: "11",
    tagline: "They built the rules of football before he arrived. He hasn't read them.",
  },
];
