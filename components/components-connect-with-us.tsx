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
  ); // Default description
  const [learnMoreLink, setLearnMoreLink] = useState<string>("");
  const [events, setEvents] = useState<undefined | Events[]>();
  const [external, setExternal] = useState<External | undefined>();

  const handleCardClick = (event: Events): void => {
    const info: {
      description: string;
      link: string;
    } = event.info;
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
/*
<iframe src="https://discord.com/widget?id=1391186199904915517&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
*/
//---------------------------------------------------------------------------
/*
iframe is listed on Line 120

<iframe 
  src="https://discord.com/widget?id=1391186199904915517&theme=dark" 
  width="280" 
  height="500"
  allowtransparency="true" 
  frameborder= DEPRECATED 
  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
*/
//-----------------------------------------------------------------

//DEPRECATED CODE - WILL REMOVE AT LATER POINT IN TIME
//=================================================================
//onClick={() => handleCardClick(event)} - DEPRECATED
{/* <div className="md:hidden text-center">
                  <p className="mt-2">{event.info.description}</p>
                  {event.title === mainEvent && (
                    <div className="mt-2 text-site_orange underline text-site_header">
                      <Link href={VotteInfo.link}>{VotteInfo.text}</Link>
                    </div>
                  )}
                  <Button size="lg" className="mt-2">
                    <a href={event.info.link}>Learn More</a>
                  </Button>
                </div> }
  =================================================================
*/
//=================================================================
/*
Line 140 reference to meetup button
*/
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
          <div className="grid grid-rows-2 grid-cols-4">
            <div className="row-start-1 row-end-2 col-start-1 col-end-5">
          {events != undefined &&
            events.map((event, index) => (
              <div key={index}>
                <EventCard
                  title={event.title}
                  imageSrc={event.imageSrc}
                  imageAlt={event.imageAlt}
                  selected={event.info.description == selectedDescription}
                />
              </div>
            ))}
            </div>
            <div className=" row-start-2 row-end-3 col-start-2 col-end-4 bg-no-repeat bg-[url(/MeetUpLogoFlushingTech.png)]">Click Me</div>
            
          </div>
            <iframe 
              src="https://discord.com/widget?id=1391186199904915517&theme=dark" 
              width="280px" 
              height="500px"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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

// make this accessible

/*
,
  {
    "title": "Happy Hour",
    "imageSrc": "/major-tom-agency-MJqMxzsxLtM-unsplash.jpg",
    "imageAlt": "Happy Hour",
    "info": {
      "description": "Join us for our monthly happy hours! This is a good way to meet the rest of the group, unwind, and socialize or network in a more casual setting.",
      "link": "https://www.meetup.com/flushing-tech/events/"
    }
  }

  events.json file placeholder
*/