import { RocketIcon, Users, FileText, LucideIcon, Rocket, Clock, CheckCircle, Code, MessageSquare } from "lucide-react";

export type BenefitsType = {
  title: string;
  description: string;
  icon: LucideIcon;
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
    title: "Creative Hackathons",
    description:
      "Join bi-weekly hackathons where we pitch ideas, form teams, and build exciting projects together — no pressure, just fun and innovation.",
    icon: Rocket,
  },
  {
    title: "Supportive Community",
    description:
      "Be part of a welcoming group of developers, designers, and makers who are always ready to share, help, and grow with you.",
    icon: Users,
  },
  {
    title: "Consistent Meetups",
    description:
      "Our events run like clockwork — every two weeks you can count on meaningful sessions filled with learning, laughs, and connection.",
    icon: Clock,
  },
  {
    title: "Open Collaboration",
    description:
      "Every voice matters here. Whether you're a beginner or a pro, you'll have a place to contribute, experiment, and make an impact.",
    icon: MessageSquare,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Explore and work with current, real-world technologies — from full-stack JavaScript to cutting-edge tools used in today’s tech teams.",
    icon: Code,
  },
  {
    title: "Real Connections",
    description:
      "Make new friends, find collaborators, or even a co-founder. It's not just about code — it's about the people you meet along the way.",
    icon: CheckCircle,
  },
];
