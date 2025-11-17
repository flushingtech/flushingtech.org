"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import homeImage from "./images/home-icon-vector.jpg";
import backendImage from "./images/back-end-icon.avif";
import frontendImage from "./images/front-end-image.jpg";
type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export default function EngineeringTeamPage() {
  // Initialize techgroup to one of the valid repo names to fetch data on initial load
  const [techgroup, setTechGroup] = useState<string>("flushingtech.org");
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const repoName = techgroup || "flushingtech.org";
        const res = await fetch(
          `https://api.github.com/repos/flushingtech/${repoName}/contributors`
        );

        if (res.status === 403) {
          // Rate limit exceeded or other forbidden error
          throw new Error(
            "GitHub API rate limit exceeded or access forbidden."
          );
        }
        if (!res.ok) {
          throw new Error("Failed to fetch contributors: " + res.statusText);
        }

        const data = await res.json();
        // GitHub API returns an array for contributors; check if it's empty or an error object
        if (Array.isArray(data)) {
          setContributors(data);
        } else {
          // Handle cases where API returns a non-array but successful-looking response (e.g., if repo has no contributors)
          setContributors([]);
        }
      } catch (error) {
        console.error("GitHub fetch error:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred."
        );
        setContributors([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContributors();
  }, [techgroup]);

  return (
    <div className="bg-[#0D1A2B] min-h-screen px-6 py-16 sm:px-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          Meet the Engineering Team 💡
        </h1>
        <p className="mt-4 text-lg max-w-md mx-auto text-white mb-8">
          The brains behind Flushing Tech’s hackathons, platform, and vision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Repository Selection Buttons */}
        <div className="flex justify-center gap-0 mb-10 flex-wrap">
          <button
            onClick={() => setTechGroup("flushingtech.org")}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-l-md font-medium w-96 text-center transition-all duration-500 border-2 border-grey-300 ${
              techgroup === "flushingtech.org"
                ? "bg-white text-black hover:border-grey-400 border-b-8 border-b-black"
                : "bg-white text-black hover:bg-black hover:text-white hover:border-grey-400 "
            }`}
          >
            <Image
              src={homeImage}
              alt="Flaticons Logo"
              width={40}
              height={40}
              className="flex items-start rounded-full"
            />
            Main Site
          </button>
          <button
            onClick={() => setTechGroup("votte_frontend")}
            className={`flex items-center justify-center gap-2 px-6 py-3 font-medium w-96 text-center transition-all duration-500 border-1 border-grey-300 ${
              techgroup === "votte_frontend"
                ? "bg-white text-black hover:border-grey-400 border-b-8 border-b-black"
                : "bg-white text-black hover:bg-black hover:text-white hover:border-grey-400 "
            }`}
          >
            <Image
              src={frontendImage}
              alt="Flaticons Logo"
              width={40}
              height={40}
              className="flex items-start rounded"
            />
            Votte Frontend
          </button>
          <button
            onClick={() => setTechGroup("votte_backend")}
            className={`flex items-center justify-center rounded-r-md gap-2 px-6 py-3 font-medium w-96 text-center transition-all duration-500 border-2 border-grey-300 ${
              techgroup === "votte_backend"
                ? "bg-white text-black hover:border-grey-400 border-b-8 border-b-black"
                : "bg-white text-black hover:bg-black hover:text-white hover:border-grey-400 "
            }`}
          >
            <Image
              src={backendImage}
              alt="Flaticons Logo"
              width={40}
              height={40}
              className="flex items-start rounded"
            />
            Votte Backend
          </button>
        </div>

        {/* Loading, Error, and Contributor Display */}
        {isLoading ? (
          <p className="text-center text-xl text-white">
            Loading contributors...
          </p>
        ) : error ? (
          <p className="text-center text-xl text-red-400">Error: {error}</p>
        ) : (
          <div className="grid gap-2  grid-cols-2">
            {contributors.length > 0 ? (
              contributors.map((contributor) => (
                <div
                  key={contributor.login}
                  className="bg-white rounded-md shadow-md p-3 min-h-[139px] relative flex items-center justify-start"
                >
                  <div className="w-24 h-24 absolute left-5 top-4">
                    <Image
                      src={contributor.avatar_url}
                      alt={`${contributor.login}'s avatar`}
                      className="rounded-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw" // Add sizes prop for Next/Image optimization
                    />
                  </div>
                  <div className="flex flex-col absolute left-40 top-10">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">
                      {contributor.login}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {contributor.contributions} commits
                    </p>
                  </div>
                  <Link
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4"
                  >
                    {/* Note: The image path for the GitHub icon is assumed to be correct */}
                    <Image
                      src="/images/github-mark/github-mark.png"
                      alt="GitHub Profile"
                      width={24}
                      height={24} // Added height prop for static image
                      className="justify-center"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-xl text-gray-300">
                No contributors found for this repository.
              </p>
            )}
          </div>
        )}

        {/* Join Our Team Section */}
        <div className="flex flex-col items-center gap-4 mt-16 p-8 rounded-xl border border-gray-700">
          <Users className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-semibold text-white">
            Join Our Team 🚀
          </h2>
          <p className="text-gray-300 max-w-lg text-center">
            We’re always looking for passionate engineers. Contribute to the
            repo and see yourself here!
          </p>
          <Link
            href="https://github.com/flushingtech" // Example link to the org
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition-colors"
          >
            View GitHub Organization
          </Link>
        </div>
      </div>
    </div>
  );
}
