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
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">
          Meet <span className="text-[#FF6B35]">Flushing Tech</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Libero eleifend
          auctor posuere volutpat rhoncus laoreet.
        </p>
        <Button
          variant="outline"
          className="text-[#FFE4CE] border-[#FFE4CE] bg-[#274653] rounded-full px-6 py-2 hover:bg-[#1E2A3A] hover:text-[#FF6B35] transition-colors duration-300"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
