"use client";

import { Button } from "@/components/ui/button";

export default function HeroComponent() {
  return (
    <section
      className="text-white py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/luca-bravo-XJXWbfSo2f0-unsplash_1_1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 4em)",
      }}
    >
      <div className="hidden md:block w-[30%] max-w-[600px] h-full bg-gradient-to-b from-black/85 via-black/70 to-black/30 absolute right-0 top-0"></div>
      <div className="container mx-auto px-4 lg:py-[10%] h-full flex flex-col justify-center item-center">
        <div className="md:w-[70%] py-[5%]">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-site_header">
            <span className="text-peach">Meet</span>{" "}
            <span className="text-site_orange">Flushing Tech</span>
            <span className="text-peach"> |</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl text-peach font-site_1st_paragraph">
            We are a vibrant community of tech enthusiasts who come together to
            connect, learn, share and inspire one another. At Flushing Tech, we
            aim to create an environment where ideas flourish, friendships are
            formed and where the latest trends and developments are explored.
            <br />
            <br />
            Come join our group and enjoy our exciting events, including fun
            workshops, demos, presentations, social and networking events, and
            much more!
          </p>
        </div>
        <div>
          <Button size="xl" className="block lg:inline">
            <a href="https://www.meetup.com/flushing-tech" target="_blank">
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
