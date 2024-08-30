"use client";

import eventData from "../../events.json";
import { useState } from "react";
import EventCard from "./EventCard";
// Define the interface for the props

const Events = () => {
  const [currDescrip, setCurrDescrip] = useState(
    "click event card to learn more"
)
const [selectedCard, setSelectedCard] = useState("")


  return (
    <section id="events" className="flex flex-col scroll-mt-24 gap-y-4">
      <h2 className="text-center">Check Out Our Events!</h2>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4 max-w-2xl">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            image_URL={event.image_URL}
            description={event.description}
            setCurrDescrip={setCurrDescrip} // Pass setCurrEvent to EventCard
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        ))}
      </div>

      <div className="text-center">{currDescrip}</div>
    </section>
  );
};

export default Events;
