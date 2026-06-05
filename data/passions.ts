import type { Passion } from "@/types/content";

export const passions: Passion[] = [
  {
    slug: "books",
    title: "Books and marginalia",
    category: "Reading",
    description:
      "I keep returning to technical biographies, design essays, and philosophy that sharpens how I think about systems.",
    metadata: "Currently collecting fragments on craft, memory, and decision-making.",
  },
  {
    slug: "music",
    title: "Music with texture",
    category: "Listening",
    description:
      "Electronic, ambient, and cinematic records shape a lot of the atmosphere I want my software to carry.",
    metadata: "Good interfaces should feel composed, not merely assembled.",
  },
  {
    slug: "fitness",
    title: "Training and routine",
    category: "Fitness",
    description:
      "Strength work and consistent routines keep the rest of my thinking disciplined, especially during long building cycles.",
    metadata: "Progress compounds when the system is sustainable.",
  },
  {
    slug: "travel",
    title: "Travel as contrast",
    category: "Travel",
    description:
      "New places reset my attention. I notice materials, signage, pacing, and the small interface decisions people live inside.",
    metadata: "Cities are some of the most interesting design systems.",
  },
  {
    slug: "games",
    title: "Games and worldbuilding",
    category: "Games",
    description:
      "I like systems-heavy games that reveal their logic slowly and reward careful observation over novelty for its own sake.",
    metadata: "A good game loop teaches interaction design in compressed form.",
  },
  {
    slug: "design",
    title: "Interface craft",
    category: "Design",
    description:
      "I pay close attention to typography, hierarchy, rhythm, and the emotional tone that a product establishes before any feature work.",
    metadata: "Visual clarity is part of engineering quality.",
  },
];
