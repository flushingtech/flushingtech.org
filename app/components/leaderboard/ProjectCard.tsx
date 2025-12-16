import Image from "next/image";
import { Trophy, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  title: string;
  contributors: string[];
  imageUrl: string;
  date: string;
  eventNumber?: number;
};

export default function ProjectCard({
  title,
  contributors,
  imageUrl,
  date,
  eventNumber = 1,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-black border-2 border-site_orange/60 transition-all duration-500 hover:border-site_orange hover:shadow-[0_0_20px_rgba(242,144,64,0.5)] ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8'
      }`}
      style={{
        transitionDelay: `${(eventNumber - 1) * 150}ms`,
      }}
    >
      {/* Corner accents - arcade style */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-peach" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-peach" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-peach" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-peach" />

      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 228, 206, 0.1) 2px, rgba(255, 228, 206, 0.1) 4px)'
        }}
      />

      <div className="relative flex gap-0">
        {/* Project Image - CRT Screen style */}
        <div className="relative w-32 h-32 flex-shrink-0 bg-site_navy border-r-2 border-site_orange/40 overflow-hidden">
          {/* Inner screen bezel */}
          <div className="absolute inset-2 border-2 border-site_orange/40 z-10 pointer-events-none" />

          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125"
            sizes="128px"
          />

          {/* CRT glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-site_orange/0 via-site_orange/0 to-site_orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Screen reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Trophy pixel badge */}
          <div className="absolute top-3 right-3 bg-site_red border-2 border-peach p-1 shadow-[0_0_10px_rgba(242,144,64,0.8)] group-hover:animate-pulse">
            <Trophy className="w-4 h-4 text-peach" strokeWidth={3} />
          </div>
        </div>

        {/* Content - Arcade Info Panel */}
        <div className="flex-1 flex flex-col justify-between p-3 min-w-0 bg-gradient-to-br from-site_navy to-black">
          {/* Top bar */}
          <div className="flex items-center gap-2 mb-2 pb-2 border-b-2 border-site_orange/30">
            <Zap className="w-3 h-3 text-site_orange animate-pulse" />
            <div className="flex-1 h-1 bg-gradient-to-r from-site_orange via-site_red to-transparent" />
          </div>

          {/* Title - Arcade style */}
          <div className="mb-3">
            <h3 className="text-sm font-bold text-peach font-site_header line-clamp-2 leading-tight uppercase tracking-wide group-hover:text-site_orange group-hover:drop-shadow-[0_0_8px_rgba(242,144,64,0.8)] transition-all duration-300">
              {title}
            </h3>
          </div>

          {/* Stats Panel */}
          <div className="space-y-2 mt-auto">
            {/* Contributors - retro label style */}
            <div className="bg-black/40 border-l-2 border-site_orange pl-2 py-1">
              <div className="text-[9px] text-site_orange font-bold font-site_header mb-0.5 uppercase tracking-widest">
                TEAM
              </div>
              <div className="text-xs text-peach/90 font-site_paragraph">
                {contributors.join(' • ')}
              </div>
            </div>

            {/* Date - retro display */}
            <div className="flex items-center justify-between bg-site_orange/10 border border-site_orange/30 px-2 py-1">
              <span className="text-[9px] text-site_orange font-bold font-site_header uppercase tracking-widest">
                EVENT
              </span>
              <span className="text-xs text-peach font-site_paragraph tabular-nums">
                {new Date(date).toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  year: '2-digit'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom neon bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-site_orange to-transparent opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(242,144,64,0.8)] transition-all duration-300" />
    </div>
  );
}
