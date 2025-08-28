'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <section className="bg-peach overflow-hidden flex flex-col lg:flex-row min-h-[80vh]">
      <div className="w-full flex flex-col items-start pt-10 pb-8 px-6 md:pt-20 md:pb-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-site_header font-bold text-left text-gray-900 mb-6 px-4 sm:px-6 md:px-10 lg:px-40 leading-snug break-words">
          <span className="text-site_navy">Check Out Our </span>
          <span className="text-site-action">Projects</span>
        </h2>

        <div className="px-4 sm:px-6 md:px-10 lg:px-40 mt-6 mb-12 w-full">
          <div className="flex justify-center lg:justify-start">
            <a href={VotteInfo.link} target="_blank" rel="noopener noreferrer">
              <Button
                size="xl"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                {VotteInfo.text.toUpperCase()}
              </Button>
            </a>
          </div>
        </div>

        {isHidden && key !== null ? (
          <>
            {items.map((item) => {
              if (key === item.id) {
                return (
                  <div key={item.id} className="w-full">
                    <div className="container max-w-5xl flex flex-col md:flex-row gap-6 items-center mx-auto">
                      <div className="md:w-1/2 relative">
                        <Image
                          src={item.image_url}
                          alt={item.type === 'idea' ? item.idea : item.title}
                          width={1000}
                          height={1000}
                          className="border-4 border-site_red w-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 text-left">
                        <h3 className="text-2xl md:text-4xl font-bold font-site_header mb-6 text-gray-900">
                          {item.type === 'idea' ? item.idea : item.title}
                        </h3>
                        <p className="text-base md:text-lg mb-4 text-gray-700 font-site_1st_paragraph">
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
            <button className="mt-8 font-bold text-sm text-site_red underline" onClick={clickedButton}>
              ← Back to Grid
            </button>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full overflow-hidden px-4">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer transition duration-300 hover:scale-[1.02]"
                onClick={() => {
                  clickedImage();
                  setKey(item.id);
                }}
              >
                <Image
                  src={item.image_url}
                  alt={item.type === 'idea' ? item.idea : item.title}
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
