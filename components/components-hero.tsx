"use client";

import { Button } from "@/components/ui/button";

export default function HeroComponent() {
  return (
    <section
      className="text-white py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/luca-bravo-XJXWbfSo2f0-unsplash_1_1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 2.75em)",
      }}
    >
      <div className="container mx-auto px-4 h-[100%] flex flex-col justify-center item-center">
        <div className="block flex-grow-[3] py-[10%]">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-peach">Meet</span>{" "}
            <span className="text-[#F29040]">Flushing Tech</span>
            <span className="text-peach"> |</span>
          </h1>
          <p className="text-xl mb-8 max-w-md text-[#F5F5F5]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Libero eleifend
            auctor posuere volutpat rhoncus laoreet.
          </p>
        </div>
        <div className="flex-grow-[1]">
          <Button
            variant="outline"
            className="text-[#FFFFF] border-peach bg-[#274653] rounded-full px-6 py-2 hover:bg-[#1E2A3A] hover:text-[#FF6B35] transition-colors duration-300 mx-auto block w-[275px] h-[69px] text-[24px]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
