'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import axios from 'axios';
import LeaderboardContainerStatic from "@/app/components/leaderboard/LeaderboardContainerStatic";
import { Button } from "@/components/ui/button";

type Idea = {
  id: number;
  title?: string;
  idea: string;
  description: string;
  image_url: string;
  technologies?: string;
  type: 'idea';
};

type Event = {
  id: number;
  title: string;
  event_date: string;
  image_url: string;
  type: 'event';
};

type Item = Idea | Event;

type External = {
  text: string;
  link: string;
};

const VotteInfo: External = {
  text: 'Vote on Hackathon Ideas',
  link: process.env.NEXT_PUBLIC_VOTTE_URL as string,
};

const shuffleArray = (array: Item[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function GridLayout() {
  const [isHidden, setIsHidden] = useState(false);
  const [key, setKey] = useState<number | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [maxItems, setMaxItems] = useState(9);

  const clickedImage = () => setIsHidden(true);
  const clickedButton = () => setIsHidden(false);

  const fetchIdeasAndEventsWithImages = async () => {
    try {
      const [ideasRes, eventsRes] = await Promise.all([
        axios.get('https://votte-backend.flushingtech.org/api/ideas/with-images'),
        axios.get('https://votte-backend.flushingtech.org/api/events/with-images'),
      ]);

      const ideas: Idea[] = ideasRes.data.ideas.map((idea: any) => ({
        ...idea,
        type: 'idea',
      }));

      const events: Event[] = eventsRes.data.events.map((event: any) => ({
        ...event,
        type: 'event',
      }));

      const merged: Item[] = shuffleArray([...ideas, ...events]);
      setItems(merged);
    } catch (error) {
      console.error('Failed to fetch ideas or events:', error);
    }
  };

  useEffect(() => {
    fetchIdeasAndEventsWithImages();
  }, []);

  useEffect(() => {
    const updateMaxItems = () => {
      setMaxItems(window.innerWidth < 768 ? 4 : 9);
    };

    updateMaxItems(); // initial
    window.addEventListener('resize', updateMaxItems);
    return () => window.removeEventListener('resize', updateMaxItems);
  }, []);

  const displayedItems = items.slice(0, maxItems);

  return (
    <section className="bg-peach overflow-hidden flex flex-col lg:flex-row">
      {/* Projects Section - 2/3 width */}
      <div className="w-full lg:w-2/3 flex flex-col items-start pt-12 pb-12 px-6 md:pt-20 md:pb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-site_header font-bold text-left text-gray-900 mb-4 px-4 sm:px-6 md:px-10 lg:px-16 leading-snug break-words uppercase tracking-wide">
          <span className="text-gray-900">// Check Out Our </span>
          <span className="text-site_orange drop-shadow-[2px_2px_0px_rgba(187,40,40,0.3)]">Projects</span>
        </h2>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 mt-2 mb-6 w-full">
          <div className="flex justify-center lg:justify-start">
            <a href={VotteInfo.link} target="_blank" rel="noopener noreferrer">
              {/* Arcade Button */}
              <div className="relative group">
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-peach z-10" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-peach z-10" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-peach z-10" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-peach z-10" />

                <button className="relative bg-site_orange hover:bg-site_red text-white font-bold font-site_header px-8 py-3 border-2 border-site_red hover:border-peach transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,144,64,0.6)] uppercase tracking-widest text-sm sm:text-base">
                  {VotteInfo.text}
                </button>
              </div>
            </a>
          </div>
        </div>

        {isHidden && key !== null ? (
          <>
            {items.map((item) => {
              if (key === item.id) {
                return (
                  <div key={item.id} className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Arcade Featured Image */}
                      <div className="md:w-1/2 relative">
                        <div className="relative bg-black border-2 border-site_orange overflow-hidden">
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-peach z-10" />
                          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-peach z-10" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-peach z-10" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-peach z-10" />

                          {/* Inner bezel */}
                          <div className="absolute inset-4 border-2 border-site_orange/40 z-10 pointer-events-none" />

                          {/* Scanlines */}
                          <div
                            className="absolute inset-0 pointer-events-none opacity-10 z-10"
                            style={{
                              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 228, 206, 0.1) 2px, rgba(255, 228, 206, 0.1) 4px)'
                            }}
                          />

                          <Image
                            src={item.image_url}
                            alt={item.type === 'idea' ? item.idea : item.title}
                            width={1000}
                            height={1000}
                            className="w-full object-cover"
                          />

                          {/* Screen reflection */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* Info Panel */}
                      <div className="md:w-1/2 text-left bg-gradient-to-br from-site_navy/20 to-black/20 border-2 border-site_orange/40 p-6">
                        <div className="border-b-2 border-site_orange/30 pb-3 mb-6">
                          <h3 className="text-2xl md:text-4xl font-bold font-site_header text-site_orange uppercase tracking-wide">
                            {item.type === 'idea' ? item.idea : item.title}
                          </h3>
                        </div>
                        <p className="text-base md:text-lg text-gray-800 font-site_1st_paragraph leading-relaxed">
                          {item.type === 'idea'
                            ? item.description
                            : new Date(item.event_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <button className="mt-8 ml-4 sm:ml-6 md:ml-10 lg:ml-16 font-bold text-sm bg-site_orange hover:bg-site_red text-white px-4 py-2 border-2 border-peach transition-all hover:shadow-[0_0_10px_rgba(242,144,64,0.5)] uppercase tracking-wide" onClick={clickedButton}>
              ← Back to Grid
            </button>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full px-4 sm:px-6 md:px-10 lg:px-16">
            {displayedItems.map((item, index) => (
              <ProjectCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => {
                  clickedImage();
                  setKey(item.id);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Leaderboard Section - 1/3 width, sticky on large screens */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto flex">
        <LeaderboardContainerStatic />
      </div>
    </section>
  );
}

// Separate component for animated project cards
function ProjectCard({ item, index, onClick }: { item: Item; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`cursor-pointer transition-all duration-500 group ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onClick={onClick}
    >
      {/* Arcade CRT Screen Card */}
      <div className="relative overflow-hidden bg-black border-2 border-site_orange/60 group-hover:border-site_orange group-hover:shadow-[0_0_15px_rgba(242,144,64,0.5)] transition-all duration-300">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-peach z-10" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-peach z-10" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-peach z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-peach z-10" />

        {/* Inner bezel */}
        <div className="absolute inset-2 border border-site_orange/30 z-10 pointer-events-none" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity z-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 228, 206, 0.1) 2px, rgba(255, 228, 206, 0.1) 4px)'
          }}
        />

        <Image
          src={item.image_url}
          alt={item.type === 'idea' ? item.idea : item.title}
          width={800}
          height={600}
          className="w-full h-[180px] md:h-[200px] object-cover transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125"
        />

        {/* CRT glow */}
        <div className="absolute inset-0 bg-gradient-radial from-site_orange/0 via-site_orange/0 to-site_orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Screen reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

        {/* Bottom neon bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-site_orange to-transparent opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(242,144,64,0.8)] transition-all duration-300" />
      </div>
    </div>
  );
}

export { GridLayout };
