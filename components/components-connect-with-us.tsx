"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

// Reusable EventCard Component
const EventCard = ({ title, imageSrc, imageAlt }:EventCardProps) => (
  <div>
    <h3 className="text-2xl text-center mb-5">{title}</h3>
    <Card className="bg-transparent border-white">
      <CardContent className="p-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={200}
          className="rounded-lg mb-4"
        />
      </CardContent>
    </Card>
  </div>
);

export default function ConnectWithUsComponent() {
  const events = [
    { title: "Bi-Weekly Tech Jams", imageSrc: "/placeholder.svg", imageAlt: "Tech Jams" },
    { title: "Office Hours", imageSrc: "/placeholder.svg", imageAlt: "Office Hours" },
    { title: "Happy Hour", imageSrc: "/placeholder.svg", imageAlt: "Happy Hour" },
    { title: "Virtual Hackathons", imageSrc: "/placeholder.svg", imageAlt: "Virtual Hackathons" },
  ];

  return (
    <section className="bg-blue text-peach py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Connect With Us!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <p className="w-2/3 text-xl text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent ut
            senectus sagittis fermentum montes morbi nostra elementum. Justo
            efficitur tristique id aliquam dignissim fusce finibus parturient.
          </p>
        </div>
      </div>
    </section>
  );
}
