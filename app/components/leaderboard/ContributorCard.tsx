import { Trophy, Star, Award } from "lucide-react";
import { useState } from "react";

type ContributorCardProps = {
  name: string;
  wins: number;
  projects?: Array<{
    title: string;
    date: string;
  }>;
  rank?: number;
  isTopContributor?: boolean;
};

export default function ContributorCard({
  name,
  wins,
  projects = [],
  rank,
  isTopContributor = false,
}: ContributorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 2) return <Award className="w-5 h-5 text-gray-300" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <Star className="w-4 h-4 text-site_orange" />;
  };

  const getRankBadge = () => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-400";
    if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700";
    return "bg-gradient-to-r from-site_orange to-site_red";
  };

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-lg p-4 border-2 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl ${
        isTopContributor
          ? "border-site_orange shadow-lg shadow-site_orange/20"
          : "border-white/10 hover:border-site_orange/50"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Rank Badge */}
      {rank && rank <= 3 && (
        <div
          className={`absolute -top-3 -right-3 ${getRankBadge()} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
        >
          {getRankIcon()}
          #{rank}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white font-site_header mb-1">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-site_orange">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold">{wins} Win{wins !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Preview */}
      {projects.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-peach/60 mb-2 font-site_paragraph">
            Recent Projects:
          </p>
          <div className="space-y-2">
            {(isExpanded ? projects : projects.slice(0, 2)).map((project, idx) => (
              <div
                key={idx}
                className="bg-black/30 rounded px-3 py-2 border border-white/5"
              >
                <p className="text-sm text-white font-medium font-site_paragraph">
                  {project.title}
                </p>
                <p className="text-xs text-peach/50 mt-1">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            ))}
          </div>
          {projects.length > 2 && !isExpanded && (
            <p className="text-xs text-site_orange mt-2 font-medium">
              Click to see {projects.length - 2} more...
            </p>
          )}
        </div>
      )}

      {/* Expand Indicator */}
      <div className="absolute bottom-2 right-2 text-peach/30">
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
