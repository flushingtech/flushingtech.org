import Leaderboard from "@/app/components/leaderboard/Leaderboard";
import { useEffect, useState, useRef } from "react";

export default function LeaderboardContainer() {
  const [hidden, setHidden] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("animationend", () => {
        setHidden(false);
      });
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="invisible h-auto lg:w-[30%] lg:max-w-[600px] lg:h-full bg-gradient-to-b from-black/85 via-black/50 to-black/10 lg:absolute right-0 top-0 py-4 px-2 text-peach animate-slide-in-3s mt-4 lg:mt-0 overflow-auto"
    >
      <div className="w-fit mx-auto text-3xl lg:text-4xl font-bold font-site_header text-center">
        Hackathon <span className="text-site_orange">Leaderboard</span>
        <p className="text-base font-normal lg:text-lg font-site_paragraph text-center my-4 mx-auto px-8">
          Join us in celebrating the achievements of our fellow tech
          enthusiasts!
        </p>
      </div>
      <Leaderboard hidden={hidden} />
    </div>
  );
}
