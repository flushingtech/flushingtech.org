'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import LeaderboardContainerStatic from "@/app/components/leaderboard/LeaderboardContainerStatic";

type Project = {
  title: string;
  description: string;
  image_url: string;
  idea: string;
  id: number;
  technologies?: string;
};

type External = {
  text: string;
  link: string;
};

const VotteInfo: External = {
  text: '👉 Vote on the next hackathon ideas! 👈',
  link: process.env.NEXT_PUBLIC_VOTTE_URL as string,
};

function GridLayout() {
  const [isHidden, setIsHidden] = useState(false);
  const [key, setKey] = useState(0);
  const [imageData, setData] = useState<Project[]>([]);

  const clickedImage = () => setIsHidden(true);
  const clickedButton = () => setIsHidden(false);

  const fetchIdeasWithImages = async () => {
    try {
      const response = await axios.get('https://votte-backend.flushingtech.org/api/ideas/with-images');
      setData(response.data.ideas);
    } catch (error) {
      console.error('Failed to fetch image ideas:', error);
    }
  };

  useEffect(() => {
    fetchIdeasWithImages();
  }, []);

  return (
    <section className="bg-peach overflow-hidden flex flex-row">
      <div className="w-screen flex flex-col items-center pt-10 pb-8 px-6 md:pt-20 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-site_header text-center font-bold mb-2">
          {"//"}Check Out Our <span className="text-site_red">Projects</span>
        </h2>
        <div className="text-lg md:text-xl text-site_orange text-center mb-10 hover:bg-sky-700 px-2 py-1 rounded transition">
          <Link href={VotteInfo.link}>{VotteInfo.text}</Link>
        </div>

        {isHidden ? (
          <>
            {imageData.map((project, index) => {
              if (key === project.id) {
                return (
                  <div key={index} className="w-full">
                    <div className="container max-w-5xl flex flex-col md:flex-row gap-6 items-center mx-auto">
                      <div className="md:w-1/2 relative">
                        <a {...(project.technologies ? { href: project.technologies } : {})}>
                          <Image
                            src={project.image_url}
                            alt={`${project.idea} Image`}
                            width={1000}
                            height={1000}
                            className="border-4 border-site_red w-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-2xl md:text-4xl font-bold font-site_header mb-6 text-gray-900 text-center">
                          {project.title}
                        </h3>
                        <p className="text-base md:text-lg mb-4 text-gray-700 font-site_1st_paragraph text-center">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <button className="mt-8 font-bold text-sm text-site_red underline" onClick={clickedButton}>
              ← Back to Grid
            </button>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-h-[720px] overflow-y-auto px-2">
            {imageData.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer transition duration-300 hover:scale-[1.02]"
                onClick={() => {
                  clickedImage();
                  setKey(project.id);
                }}
              >
                <Image
                  src={project.image_url}
                  alt={project.idea}
                  width={800}
                  height={600}
                  className="w-full h-[180px] object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <LeaderboardContainerStatic />
    </section>
  );
}

export { GridLayout };
