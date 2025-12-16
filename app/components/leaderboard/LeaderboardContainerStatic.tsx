import Leaderboard from "@/app/components/leaderboard/Leaderboard";
import { useEffect, useState, useRef } from "react";
import { Trophy } from "lucide-react";

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
      className="invisible w-full h-full min-h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-6 px-4 text-peach animate-slide-in-3s overflow-auto flex flex-col"
    >
      {/* Leaderboard Content Container */}
      <div className="bg-black/20 border-2 border-site_orange/60 p-5 flex-grow flex flex-col">
        {/* Header Section - Inside Container */}
        <div className="w-full mb-6 pb-4 border-b-2 border-site_orange/30 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-site_orange" />
            <h1 className="text-xl lg:text-2xl font-bold font-site_header text-white leading-tight uppercase tracking-wide">
              Recent <span className="text-site_orange">Winners</span>
            </h1>
          </div>
          <p className="text-xs lg:text-sm font-site_paragraph text-peach/60 leading-relaxed">
            Latest winning projects from our hackathons
          </p>
        </div>

        {/* Leaderboard Cards */}
        <div className="flex-grow">
          <Leaderboard hidden={false} />
        </div>
      </div>
    </div>
  );
}
