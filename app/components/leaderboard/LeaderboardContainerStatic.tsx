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
      className="invisible w-full h-auto bg-gradient-to-b from-black/85 via-black/50 to-black/10 py-6 px-6 text-peach animate-slide-in-3s mt-4 lg:mt-0 overflow-auto"
    >
      <div className="w-full text-left">
        <h1 className="text-3xl font-bold font-site_header text-site_orange leading-tight mb-4">
          Hackathon Leaderboard
        </h1>
        <p className="text-base sm:text-lg font-site_paragraph text-peach/90 max-w-xl">
          Join us in celebrating the achievements of our fellow tech enthusiasts!
        </p>
      </div>
      <Leaderboard hidden={false} />
    </div>
  );
}
