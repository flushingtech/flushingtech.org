import { useEffect, useState } from "react";
import LeaderboardContent from "./LeaderboardContent";

import { ContentArray } from "./LeaderboardContent";
type MostWins = { contributor: string; total_wins: string };

export default function Leaderboard() {
  const [mostWins, setMostWins] = useState<MostWins[] | null>();
  const [contentMostWins, setContentMostWins] = useState<
    ContentArray[] | null
  >();
  useEffect(() => {
    fetch(
      "https://votte-backend.flushingtech.org/api/leaderboard/leaderboardmostwins"
    )
      .then((res) => res.json())
      .then((data) => setMostWins(data.leaderboard));
  }, []);
  useEffect(() => {
    if (mostWins) {
      const content: ContentArray[] = mostWins.map(
        (e: MostWins, _: number, arr: any[]) => [
          ["text", (e.contributor.match(/[\w\W]+(?=@)/) as any[])[0] as string],
          [
            "progress",
            (Number(e.total_wins) / Number(arr[0].total_wins)) * 100,
          ],
          ["text", e.total_wins],
        ]
      );
      setContentMostWins(content);
    }
  }, [mostWins]);
  return (
    contentMostWins && (
      <LeaderboardContent
        title="Total Wins"
        gridTemplate="grid-cols-[8em_1fr_1em]"
        content={contentMostWins}
      />
    )
  );
}
