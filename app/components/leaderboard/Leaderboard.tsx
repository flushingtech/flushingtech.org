import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type RecentWinner = {
  contributors: string;
  event_date: string;
  idea_title: string;
};

type Idea = {
  id: number;
  idea: string;
  image_url: string;
};

type Project = {
  title: string;
  contributors: string[];
  imageUrl: string;
  date: string;
};

export default function Leaderboard({ hidden = false }: { hidden: boolean }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recentWinnersRes, ideasRes] = await Promise.all([
          fetch("https://votte-backend.flushingtech.org/api/leaderboard/leaderboard3winners"),
          fetch("https://votte-backend.flushingtech.org/api/ideas/with-images"),
        ]);

        const recentWinnersData = await recentWinnersRes.json();
        const ideasData = await ideasRes.json();

        processProjects(recentWinnersData.leaderboard, ideasData.ideas);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processProjects = (recentWinners: RecentWinner[], ideas: Idea[]) => {
    console.log("Raw recent winners data:", recentWinners);

    // Group by project title to combine contributors
    const projectMap = new Map<string, Project>();

    recentWinners
      .forEach((winner) => {
        // Find matching idea by title
        const matchingIdea = ideas.find(
          (idea) => idea.idea.toLowerCase() === winner.idea_title.toLowerCase()
        );

        // Extract contributor names
        const contributorNames = winner.contributors
          .split(",")
          .map((contributor) => {
            const match = contributor.trim().match(/[\w\W]+(?=@)/);
            return match ? match[0].trim() : contributor.trim();
          });

        // If project already exists, add contributors
        if (projectMap.has(winner.idea_title)) {
          const existing = projectMap.get(winner.idea_title)!;
          // Add new contributors that don't already exist
          contributorNames.forEach((name) => {
            if (!existing.contributors.includes(name)) {
              existing.contributors.push(name);
            }
          });
        } else {
          // Create new project entry
          projectMap.set(winner.idea_title, {
            title: winner.idea_title,
            contributors: contributorNames,
            imageUrl: matchingIdea?.image_url || "/images/placeholder-project.jpg",
            date: winner.event_date,
          });
        }
      });

    // Convert to array and take first 3
    const projectsArray = Array.from(projectMap.values()).slice(0, 3);

    console.log("Processed projects:", projectsArray);
    setProjects(projectsArray);
  };

  if (hidden) return null;

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-peach/50 font-site_paragraph">Loading recent winners...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-peach/50 font-site_paragraph">
          No recent winners yet. Be the first to win!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center space-y-8 min-h-full">
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          title={project.title}
          contributors={project.contributors}
          imageUrl={project.imageUrl}
          date={project.date}
          eventNumber={index + 1}
        />
      ))}
    </div>
  );
}
