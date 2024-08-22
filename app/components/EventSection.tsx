"use client"

import eventData from "../../events.json"
import { useState } from "react";
import EventCard from "./EventCard";
// Define the interface for the props


const Events = () => {
    const [currEvent, setCurrEvent]= useState("click event card to learn more")
    return (
        <section>
            <div className="event-cards">
                {eventData.map((event, index) => (
                    <EventCard 
                        key={index}
                        title={event.title}
                        image_URL={event.image_URL}
                        description={event.description}
                        setCurrEvent={setCurrEvent} // Pass setCurrEvent to EventCard
                    />
                ))}
            </div>
            
            <div>
                {currEvent}
            </div>
        </section>
      
    );
  };
  
  export default Events;