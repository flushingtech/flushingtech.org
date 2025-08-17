import { ContentArray } from "./LeaderboardContent";
import LeaderboardItem from "./LeaderboardItem";

export default function LeaderboardRow({
  row,
  gridTemplate,
  delay = 0,
  animationDelay = { animationDelay: "0ms" },
}: {
  row: ContentArray;
  gridTemplate: string;
  delay?: number;
  animationDelay?: { animationDelay: string };
}) {
  return (
    <div
      className={`invisible grid ${gridTemplate} gap-x-4 px-4 py-2 w-full  relative animate-slide-in-500 ${animationDelay}`}
      style={animationDelay}
    >
      {row &&
        row.map(([type, value]) => (
          <LeaderboardItem
            key={[type, value].join(" ")}
            type={type}
            value={value}
            delay={delay}
          />
        ))}
    </div>
  );
}
