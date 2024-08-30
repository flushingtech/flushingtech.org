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
    <section id="events" className="scroll-mt-24 ">
      <h2 className="text-center">Check Out Our Events!</h2>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4">
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

      <div>{currDescrip}</div>
    </section>
  );
};

export default Events;
