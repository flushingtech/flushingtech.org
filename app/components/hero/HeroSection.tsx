import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  content: string;
  btnText: string;
}

const HeroSection = ({ heading, content, btnText }: HeroSectionProps) => {
  return (
    <>
      <div className="relative isolate px-6 pt-8 lg:px-8 bg-[#FBE8D8]">
        <div className="mx-auto max-w-2xl py-14 sm:py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl font-site_header animate-fade-in-heading">
              {heading}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 animate-fade-in-content">
              {content}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-button">
              <Link href='https://www.meetup.com/flushing-tech/' passHref>
                <Button size='lg'>
                  {btnText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
