"use client";

import { Button } from "@/components/ui/button";

export default function HeroComponent() {
  return (
    <section className="bg-[#1E2A3A] text-white py-20">
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
          className="text-white border-white bg-[#274653] hover:text-white"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
