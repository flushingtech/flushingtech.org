"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://www.flushingtech.org/hackathons/2024-6-1-spacex-ups.jpg",
  },
  {
    title: "Project Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://www.flushingtech.org/hackathons/2024-6-1-wearables.jpg",
  },
  {
    title: "Project Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://www.flushingtech.org/hackathons/2024-6-1-smarthome-dob.jpg",
  },
];

export default function ProjectsCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-peach overflow-x-hidden">
      <div className="w-screen h-screen flex flex-col justify-around item-center">
        <h2 className="block text-4xl font-bold text-center">
          Check Out Our Projects!
        </h2>
        <div ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <div className="container w-[80%] flex flex-col md:flex-row gap-8 items-center mx-auto">
                  <div className="md:w-1/2 relative">
                    <img
                      src={project.image}
                      alt={`${project.title} Image`}
                      width="600"
                      height="600"
                      className="border-4 border-site_red w-screen"
                    />
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                      <div className="flex space-x-8">
                        {projects.map((_, dotIndex) => (
                          <Button
                            key={dotIndex}
                            variant="ghost"
                            size="sm"
                            className={`w-5 h-5 p-0 rounded-full ${
                              dotIndex === selectedIndex
                                ? "bg-site_red"
                                : "bg-site_orange"
                            }`}
                            onClick={() => scrollTo(dotIndex)}
                            aria-label={`Go to project ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 text-center">
                      {project.title}
                    </h3>
                    <p className="text-lg mb-6 text-gray-700">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
