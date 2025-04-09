import { FaBrand } from "@/types/faBrand";

type NavItem = {
  text: string;
  href: string;
  faIcon?: FaBrand;
};
export default [
  { text: "Events", href: "#event-showcase" },
  {
    text: "Contact",
    href: "", //need information
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/flushingtech/",
    faIcon: "faInstagram",
  },
  {
    text: "Github",
    href: "https://github.com/flushingtech",
    faIcon: "faGithub",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/company/flushingtech",
    faIcon: "faLinkedin",
  },
  {
    text: "Meetup",
    href: "https://www.meetup.com/flushing-tech/",
    faIcon: "faMeetup",
  },
  {
    text: "Discord",
    href: "https://discord.gg/xGgFcZknDR",
    faIcon: "faDiscord",
  },
] as NavItem[];
