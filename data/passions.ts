import type { Passion } from "@/types/content";
import music from "@/public/images/music.webp";
import games from "@/public/images/games.webp";
import fitness from "@/public/images/fitness.webp";
import reading from "@/public/images/reading.webp";
import climbing from "@/public/images/climbing.webp";

// Existing interests, illustrated with generated subject photographs.
export const passions: readonly Passion[] = [
  { slug: "climbing", title: "Climbing", description: "A big part of my life outside software: movement, technique, and working through a route one move at a time.", image: climbing, imageAlt: "Climbing shoes and a chalk bag resting on sandstone" },
  { slug: "music", title: "Music", description: "Electronic, ambient, and cinematic music. I’m drawn to layered sounds and the atmosphere a good record creates.", image: music, imageAlt: "Vinyl record on a vintage turntable" },
  { slug: "games", title: "Games", description: "Strategy and systems-driven games that reward observation, planning, and understanding how things work.", image: games, imageAlt: "Game controller beside a CRT screen" },
  { slug: "fitness", title: "Fitness", description: "Strength training and consistent routines help me stay focused and balance time spent at a desk.", image: fitness, imageAlt: "Cast-iron dumbbells in warm sunlight" },
  { slug: "books", title: "Reading", description: "Technical biographies, design essays, and philosophy. Books that offer a different way to think about systems and people.", image: reading, imageAlt: "Open book beside a reading lamp" },
];
