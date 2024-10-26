"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import events from "../events.json";

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
      className={`bg-transparent border-2 rounded-none ${selected ? "border-accent" : "border-peach"}`}
    >
      <CardContent className="p-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={200}
          className="w-full"
        />
      </CardContent>
    </Card>
  </div>
);

export default function ConnectWithUsComponent() {
  const [selectedDescription, setSelectedDescription] = useState(
    "Click an event to learn more",
  ); // Default description
  const [learnMoreLink, setLearnMoreLink] = useState("");

  const handleCardClick = (info: any): void => {
    setSelectedDescription(info.description);
    setLearnMoreLink(info.link);
  };

  return (
    <section id="event-showcase" className="bg-blue text-peach py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Connect With Us!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
              onClick={() => handleCardClick(event.info)}
              selected={event.info.description == selectedDescription}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-2/3 text-2xl text-center flex-col">
            <p>{selectedDescription}</p>
            {learnMoreLink !== "" && (
              <Button size="lg" className="mt-4">
                <a href={learnMoreLink} target="_blank">
                  Learn More
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// add links that change dynamically based on most recently posted on meetup
// make this accessible
