"use client";

import { Events } from "@/types/events";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { handleRSS } from "@/app/components/utils/rss";

interface EventCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  onClick: () => void;
  selected: boolean;
}

// Reusable EventCard Component
const EventCard = ({
  title,
  imageSrc,
  imageAlt,
  onClick,
  selected,
}: EventCardProps) => (
  <div onClick={onClick} className="cursor-pointer">
    <h3 className="text-2xl text-center mb-5">{title}</h3>
    <Card
      className={`bg-transparent border-2 rounded-none ${
        selected ? "border-accent" : "border-peach"
      }`}
    >
      <CardContent className="p-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={1000}
          className="w-full max-h-[35vh] object-cover"
        />
      </CardContent>
    </Card>
  </div>
);

export default function ConnectWithUsComponent() {
  const [selectedDescription, setSelectedDescription] = useState<string>(
    "Click an event to learn more"
  ); // Default description
  const [learnMoreLink, setLearnMoreLink] = useState<string>("");
  const [events, setEvents] = useState<undefined | Events[]>();
  const [external, setExternal] = useState<
    { text: string; link: string } | undefined
  >();

  const handleCardClick = (event: Events): void => {
    const info: {
      description: string;
      link: string;
    } = event.info;
    if (event.title === "Bi-Weekly Tech Jams") {
      setExternal({
        text: "Vote on the next hackathon idea!",
        link: "https://votte-frontend.vercel.app",
      });
    } else {
      setExternal(undefined);
    }
    setSelectedDescription(info.description);
    setLearnMoreLink(info.link);
  };

  useEffect(() => {
    handleRSS().then((res) => setEvents(res));
  }, []);

  return (
    <section
      id="event-showcase"
      className="bg-site_navy text-peach py-10 min-h-screen font-montserrat"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 font-titillium">
          Connect With Us!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-12">
          {events != undefined &&
            events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                imageSrc={event.imageSrc}
                imageAlt={event.imageAlt}
                onClick={() => handleCardClick(event)}
                selected={event.info.description == selectedDescription}
              />
            ))}
        </div>
        <div className="flex justify-center mt-10">
          <div className="text-lg 2xl:text-2xl 2xl:w-2/3 text-center flex-col">
            <p>{selectedDescription}</p>
            {learnMoreLink !== "" && (
              <Button size="xl" className="mt-4">
                <a href={learnMoreLink} target="_blank">
                  Learn More
                </a>
              </Button>
            )}
            {typeof external === "object" && (
              <div className="mt-4 2xl:mt-8 text-site_orange 2xl:text-4xl underline text-site_header">
                <Link href={external.link}>{external.text}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// make this accessible
