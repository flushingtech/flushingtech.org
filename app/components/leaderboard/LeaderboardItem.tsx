import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function LeaderboardItem({
  type = "text",
  value,
  delay = 0,
}: {
  type: string;
  value: string | number;
  delay?: number;
}) {
  const [progressValue, setProgressValue] = useState<number>(0);
  useEffect(() => {
    if (type === "progress") {
      setTimeout(() => {
        setProgressValue(typeof value === "string" ? Number(value) : value);
      }, delay);
    }
  }, [value, type, delay]);
  return type === "progress" ? (
    <div className="p-2.5">
      <Progress className="bg-white" value={progressValue} />
    </div>
  ) : (
    <div className="overflow-hidden">{value}</div>
  );
}
