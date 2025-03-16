import { ContentArray } from "./LeaderboardContent";
import LeaderboardItem from "./LeaderboardItem";

export default function LeaderboardRow({
  row,
  gridTemplate,
  delay = 0,
}: {
  row: ContentArray;
  gridTemplate: string;
  delay: number;
}) {
  return (
    <div
      className={`text-xl grid ${gridTemplate} gap-x-4 px-8 py-4 w-full text-center`}
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
