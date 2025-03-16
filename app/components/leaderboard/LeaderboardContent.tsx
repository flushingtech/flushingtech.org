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
      <div className="w-fit mx-auto my-4 text-3xl">{title}</div>
      {content &&
        content.map((row, i) => (
          <LeaderboardRow
            key={i}
            gridTemplate={gridTemplate}
            row={row}
            delay={(i + 1) * 200}
          />
        ))}
    </>
  );
}
