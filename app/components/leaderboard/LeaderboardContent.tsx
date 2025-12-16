export type Content = [string, string | number];
export type ContentArray = Array<Content>;
import LeaderboardRow from "./LeaderboardRow";

export default function LeaderboardContent({
  title,
  gridTemplate,
  content,
}: {
  title: string;
  gridTemplate: string;
  content: ContentArray[];
}) {
  return (
    <>
      <div className="w-fit mx-auto my-6 text-2xl font-bold border-b-2 border-site_orange pb-1">
  {title}
</div>
      {content &&
        content.map((row, i) => {
          const rowKey = `${i}-${row.map(([type, value]) => `${type}:${value}`).join('-')}`;
          return (
            <LeaderboardRow
              key={rowKey}
              gridTemplate={gridTemplate}
              row={row}
              delay={(i + 1) * 250 + content.length * 100}
              animationDelay={{ animationDelay: `${i * 250}ms` }}
            />
          );
        })}
    </>
  );
}
