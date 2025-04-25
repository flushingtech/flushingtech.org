
export type BenefitsType = {
  title: string;
  description: string;
  headerColor?: string; // Tailwind bg-* class
};

export const BENEFITS_DATA: BenefitsType[] = [
  {
    title: "Collaborative Hackathons",
    description:
      "Join hands-on coding events where you can brainstorm, build, and launch creative projects with like-minded individuals.",
    headerColor: "bg-blue-600",
  },
  {
    title: "Real-World Experience",
    description:
      "Gain practical development experience by working on real projects under time constraints — just like in tech jobs.",
    headerColor: "bg-emerald-600",
  },
  {
    title: "Meet Developers & Creators",
    description:
      "Connect with developers, designers, and tech enthusiasts from Flushing and beyond. Expand your circle and make new friends.",
    headerColor: "bg-pink-600",
  },
  {
    title: "Learn by Doing",
    description:
      "Whether you're a beginner or experienced, you'll level up by solving problems, debugging, and shipping ideas fast.",
    headerColor: "bg-indigo-600",
  },
  {
    title: "Get Inspired",
    description:
      "Hear from guest speakers, mentors, and fellow hackers about their journeys. Leave every event with new motivation.",
    headerColor: "bg-rose-600",
  },
  {
    title: "Build Your Portfolio",
    description:
      "Add hackathon projects to your GitHub and resume — show employers what you’ve created, not just what you know.",
    headerColor: "bg-yellow-500", // yellow-600 is a bit hard on the eyes
  },
  {
    title: "Team Up with Others",
    description:
      "Find teammates with complementary skills. Designers, coders, product thinkers — build something awesome together.",
    headerColor: "bg-violet-600",
  },
  {
    title: "Win Prizes & Recognition",
    description:
      "Compete for cool prizes and earn recognition from local businesses, mentors, and peers.",
    headerColor: "bg-orange-500",
  },
  {
    title: "Stay Ahead of Trends",
    description:
      "Explore new tools, frameworks, and APIs. Hackathons are a playground for trying out cutting-edge tech.",
    headerColor: "bg-cyan-600",
  },
  {
    title: "Supportive Community",
    description:
      "No gatekeeping, just good vibes. Whether you’re building your first app or tenth, you’re welcome here.",
    headerColor: "bg-teal-600",
  },
];
