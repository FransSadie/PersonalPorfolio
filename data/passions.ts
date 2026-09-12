import type { Passion } from "@/types/content";

export const passions: Passion[] = [
  {
    slug: "books",
    title: "Books and notes",
    category: "Reading",
    description:
      "I enjoy technical biographies, design essays, and philosophy. They often give me a different way to look at the systems I build.",
    metadata: "Lately I have been reading about craft, memory, and decision-making.",
  },
  {
    slug: "music",
    title: "Music",
    category: "Listening",
    description:
      "I listen to a lot of electronic, ambient, and cinematic music. It is usually playing while I work or think through a problem.",
    metadata: "A good interface has rhythm, much like a good record.",
  },
  {
    slug: "fitness",
    title: "Training and routine",
    category: "Fitness",
    description:
      "Strength training and a steady routine help me stay focused, especially when I am deep into a long project.",
    metadata: "Consistency matters more to me than short bursts of progress.",
  },
  {
    slug: "travel",
    title: "Travel",
    category: "Travel",
    description:
      "Visiting new places helps me pay attention again. I tend to notice the signs, materials, pace, and small choices that shape a city.",
    metadata: "Cities have a lot to teach us about design.",
  },
  {
    slug: "games",
    title: "Games",
    category: "Games",
    description:
      "I like games with systems that take time to understand and reward careful attention.",
    metadata: "Games are a good reminder that learning can be part of the experience.",
  },
  {
    slug: "design",
    title: "Interface design",
    category: "Design",
    description:
      "I pay attention to typography, spacing, hierarchy, and the overall tone of a product, not only whether the features work.",
    metadata: "Clear visual design is part of building good software.",
  },
];
