"use client"

import eventData from "../../events.json"
import { useState } from "react";
import EventCard from "./EventCard";
// Define the interface for the props


const Events = () => {
    const [currDescrip, setCurrDescrip]= useState("click event card to learn more")
    return (
        <section id="events" className="scroll-mt-24">
            <div className="event-cards">
                {eventData.map((event, index) => (
                    <EventCard 
                        key={index}
                        title={event.title}
                        image_URL={event.image_URL}
                        description={event.description}
                        setCurrDescrip={setCurrDescrip} // Pass setCurrEvent to EventCard
                    />
                ))}
            </div>
            
            <div>
                {currDescrip}
            </div>
        </section>
      
    );
  };
  
  export default Events;