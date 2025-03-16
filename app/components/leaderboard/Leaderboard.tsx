import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaderboardContent from "./LeaderboardContent";

import { ContentArray } from "./LeaderboardContent";
type MostWins = { contributor: string; total_wins: string };
type RecentWinners = {
  contributors: string;
  event_date: string;
  idea_title: string;
};

const tabsTriggerCN =
  "font-site_button lg:text-base border border-peach border-2 p-2 data-[state=active]:bg-site_navy data-[state=active]:text-site_orange data-[state=active]:border-site_orange";

export default function Leaderboard({ hidden = false }: { hidden: boolean }) {
  const [contentRecentWinners, setContentRecentWinners] = useState<
    ContentArray[] | null
  >();
  const [contentMostWins, setContentMostWins] = useState<
    ContentArray[] | null
  >();
  const [selected, setSelected] = useState<string>("Total Wins");
  useEffect(() => {
    fetch(
      "https://votte-backend.flushingtech.org/api/leaderboard/leaderboardmostwins"
    )
      .then((res) => res.json())
      .then((data) => processContentMostWins(data.leaderboard));
    fetch(
      "https://votte-backend.flushingtech.org/api/leaderboard/leaderboard3winners"
    )
      .then((res) => res.json())
      .then((data) => processContentRecentWinners(data.leaderboard));
  }, []);

  if (hidden) return null;

  return (
    <>
      <div className="my-8 text-center xl:text-right ">
        <Tabs
          defaultValue="Total Wins"
          className="w-fit inline-block"
          onValueChange={handleTabValueChange}
        >
          <TabsList className="bg-site_navy text-white font-site_button h-auto">
            <TabsTrigger className={tabsTriggerCN} value="Total Wins">
              Total Wins
            </TabsTrigger>
            <TabsTrigger className={tabsTriggerCN} value="Recent Winners">
              Recent Winners
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {contentMostWins && selected === "Total Wins" && (
        <LeaderboardContent
          title="Total Wins"
          gridTemplate="grid-cols-1 xl:grid-cols-[minmax(8em,1fr)_minmax(4em,1fr)_1em]"
          content={contentMostWins}
        />
      )}

      {contentRecentWinners && selected === "Recent Winners" && (
        <LeaderboardContent
          title="Recent Winners"
          gridTemplate="grid-cols-1 xl:grid-cols-[minmax(8em,1fr)_1fr_1fr]"
          content={contentRecentWinners}
        />
      )}
    </>
  );

  function handleTabValueChange(value: string) {
    setSelected(value);
  }
  function processContentMostWins(data: MostWins[]) {
    const content: ContentArray[] = data.map(
      (e: MostWins, _: number, arr: any[]) => [
        ["text", (e.contributor.match(/[\w\W]+(?=@)/) as any[])[0] as string],
        ["progress", (Number(e.total_wins) / Number(arr[0].total_wins)) * 100],
        ["text", e.total_wins],
      ]
    );
    setContentMostWins(content);
  }
  function processContentRecentWinners(data: RecentWinners[]) {
    console.log(data);
    const content: ContentArray[] = data.map((e: RecentWinners) => [
      ["text", (e.contributors.match(/[\w\W]+(?=@)/) as any[])[0] as string],
      ["text", e.idea_title],
      [
        "text",
        new Date(e.event_date)
          .toISOString()
          .match(/[\W\w]+(?=T)/) as any[][0] as string,
      ],
    ]);
    setContentRecentWinners(content);
  }
}
