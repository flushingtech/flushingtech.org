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

type External = {
  text: string;
  link: string;
};

const VotteInfo: External = {
  text: "Vote on the next hackathon ideas!",
  link: process.env.NEXT_PUBLIC_VOTTE_URL as string,
};

const mainEvent = "Bi-Weekly Tech Jams";

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
      className={`bg-transparent border-2 rounded-none border-peach ${
        selected ? "md:border-accent" : "md:border-peach"
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
  );
  const [learnMoreLink, setLearnMoreLink] = useState<string>("");
  const [events, setEvents] = useState<undefined | Events[]>();
  const [external, setExternal] = useState<External | undefined>();

  const handleCardClick = (event: Events): void => {
    const info = event.info;
    if (event.title === mainEvent) {
      setExternal(VotteInfo);
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
      className="bg-site_navy text-peach py-10 min-h-screen font-site_2nd_paragraph"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 font-site_header">
          Connect With Us!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center">
            <EventCard
              title="Bi-Weekly Tech Jams"
              imageSrc="/images/laptop.jpg" // ✅ Make sure this file exists in /public/images/
              imageAlt="Bi-Weekly Tech Jams"
              selected={true}
              onClick={() => {}}
            />

            <div className="mt-6">
              <a
                href="https://www.meetup.com/flushing-tech/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[10px] px-10 py-3 bg-white rounded-full border shadow-sm hover:scale-105 transition-transform"
              >
                <span className="text-2xl font-semibold text-black">RSVP on</span>
                <Image
                  src="/images/meetup-logo.png"
                  alt="Meetup"
                  width={110}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <iframe
            src="https://discord.com/widget?id=1121935362663657503&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>

        <div className="md:flex justify-center mt-10 hidden">
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
