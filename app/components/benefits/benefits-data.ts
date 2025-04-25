import { RocketIcon, Users, FileText, LucideIcon } from "lucide-react";

export type BenefitsType = {
  title: string;
  description: string;
};

export type BenefitsHomeType = {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const BENEFITS_HOME_DATA: BenefitsHomeType[] = [
  {
    title: "Rapid Skill Growth",
    description: "Sharpen your coding skills and learn new technologies fast by working on real-world challenges in a supportive, high-energy environment.",
    icon: RocketIcon,
  },
  {
    title: "Collaborative Networking",
    description: "Meet other passionate developers, designers, and entrepreneurs. Build lasting connections that can lead to future projects, jobs, or startup ideas.",
    icon: Users,
  },
  {
    title: "Build Your Portfolio",
    description: "Create tangible projects you can showcase to employers or clients. Every hackathon is a chance to walk away with a new portfolio piece and more experience.",
    icon: FileText,
  },
];

export const BENEFITS_DATA: BenefitsType[] = [
  {
    title: "Collaborative Hackathons",
    description:
      "Join hands-on coding events where you can brainstorm, build, and launch creative projects with like-minded individuals.",
  },
  {
    title: "Real-World Experience",
    description:
      "Gain practical development experience by working on real projects under time constraints — just like in tech jobs.",
  },
  {
    title: "Meet Developers & Creators",
    description:
      "Connect with developers, designers, and tech enthusiasts from Flushing and beyond. Expand your circle and make new friends.",
  },
  {
    title: "Learn by Doing",
    description:
      "Whether you're a beginner or experienced, you'll level up by solving problems, debugging, and shipping ideas fast.",
  },
  {
    title: "Get Inspired",
    description:
      "Hear from guest speakers, mentors, and fellow hackers about their journeys. Leave every event with new motivation.",
  },
  {
    title: "Build Your Portfolio",
    description:
      "Add hackathon projects to your GitHub and resume — show employers what you’ve created, not just what you know.",
  },
  {
    title: "Team Up with Others",
    description:
      "Find teammates with complementary skills. Designers, coders, product thinkers — build something awesome together.",
  },
  {
    title: "Win Prizes & Recognition",
    description:
      "Compete for cool prizes and earn recognition from local businesses, mentors, and peers.",
  },
  {
    title: "Stay Ahead of Trends",
    description:
      "Explore new tools, frameworks, and APIs. Hackathons are a playground for trying out cutting-edge tech.",
  },
  {
    title: "Supportive Community",
    description:
      "No gatekeeping, just good vibes. Whether you’re building your first app or tenth, you’re welcome here.",
  },
];
