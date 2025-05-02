import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heading: string;
  content: string;
  btnText: string;
  btnLink: string;
}

const HeroSection = ({ heading, content, btnText, btnLink }: HeroSectionProps) => {
  return (
    <>
      <div className="relative isolate px-6 pt-8 lg:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FBE8D8] to-[#ffffff]">
        <div className="mx-auto max-w-2xl py-14 sm:py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl font-site_header animate-fade-in-heading">
              {heading}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 animate-fade-in-content">
              {content}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-button">
              <a href={btnLink} target="_blank" rel="noopener noreferrer">
                <Button size='lg'>
                  {btnText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
