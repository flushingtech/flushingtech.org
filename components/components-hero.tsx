"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
      <div className="hidden md:block w-[30%] max-w-[600px] h-full bg-gradient-to-b from-black/85 via-black/50 to-black/10 absolute right-0 top-0 py-4 px-2 text-peach">
        <div className="w-fit mx-auto text-5xl font-site_header">
          Leader<span className="text-site_orange">board</span>
        </div>
        <div className="w-fit mx-auto my-4 text-4xl">Total Wins</div>
        <div className="text-2xl grid grid-cols-[2fr_4fr_1fr] px-8 py-4 gap-x-8">
          <div>username123</div>
          <div className="p-3">
            <Progress className="bg-white" value={100} />
          </div>
          <div>2</div>
        </div>
        <div className="text-2xl grid grid-cols-[2fr_4fr_1fr]  gap-x-8 py-4 px-8">
          <div>username321</div>
          <div className="p-3">
            <Progress className="bg-white" value={50} />
          </div>
          <div>1</div>
        </div>
      </div>
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
