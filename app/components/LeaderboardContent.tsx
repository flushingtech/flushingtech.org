import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MostWins = { contributor: string; total_wins: string };
export default function LeaderboardContent({
  title,
  gridTemplate,
  src,
}: {
  title: string;
  gridTemplate: string;
  src: string;
}) {
  const [data, setData] = useState<any>();
  const [content, setContent] = useState<any>();
  useEffect(() => {
    if (src) {
      fetch(`https://votte-backend.flushingtech.org/api/leaderboard/${src}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [src]);
  useEffect(() => {
    if (data) {
      if (title === "Total Wins") {
        const content = data.leaderboard.map(
          (e: MostWins, i: number, arr: any[]) => [
            ["contributor", (e.contributor.match(/[\w\W]+(?=@)/) as any[])[0]],
            [
              "progress",
              (Number(e.total_wins) / Number(arr[0].total_wins)) * 100,
            ],
            ["total_wins", e.total_wins],
          ]
        );
        setContent(content);
      }
    }
  }, [data, title]);
  return (
    <>
      <div className="w-fit mx-auto my-4 text-3xl">{title}</div>
      {content &&
        content.map((item: any[], i: number) => (
          <div
            key={i}
            className={`text-xl grid ${gridTemplate} gap-x-4 px-8 py-4 w-full`}
          >
            {item.map((e: any[], i: number) =>
              e[0] === "progress" ? (
                <div key={i} className="p-2.5">
                  <Progress className="bg-white" value={e[1]} />
                </div>
              ) : (
                <div key={i} className="overflow-hidden">
                  {e[1]}
                </div>
              )
            )}
          </div>
        ))}
    </>
  );
}
