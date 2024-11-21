"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "SpaceX UPS",
    description:
      "Save API data to local file, in this case SpaceX launch data to an output.json. Built using Java with Maven.",
    image: "/spacex-ups.jpg",
    link: "https://github.com/AaronNewTech/space-scanner",
  },
  {
    title: "Wearable",
    description:
      "Explore building wearables by learning Arduino basics. This project got a simple blinking program to run on the Arduino.",
    image: "/wearables.jpg",
    link: "",
  },
  {
    title: "Smart Homes Using Department of Buildings Data",
    description:
      "Explore Department of Buildings data to help build potential smart home solutions.",
    image: "/smarthome-dob.jpg",
    link: "",
  },
  {
    title: "Votte",
    description:
      "Deployed the Votte app to Vercel, and started connecting it to a database powered by Neon.tech",
    image: "/votte.jpg",
    link: "https://github.com/flushingtech/Votte_Backend",
  },
];

export default function ProjectsCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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
        <h2 className="block text-4xl font-site_header text-center">
          Check_Out_Our_<span className="text-site_red">Projects</span><span className="text-site_orange">()</span>
        </h2>
        <div ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <div className="container w-[80%] flex flex-col md:flex-row gap-8 items-center mx-auto">
                  <div className="md:w-1/2 relative">
                    <a {...(project.link !== "" ? { href: project.link } : {})}>
                      <img
                        src={project.image}
                        alt={`${project.title} Image`}
                        className="border-4 border-site_red w-full"
                      />
                    </a>
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
