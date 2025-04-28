'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Project = {
	title: string;
	description: string;
	image: string;
	link: string;
};

type External = {
	text: string;
	link: string;
};

const VotteInfo: External = {
	text: '👉 Vote on the next hackathon ideas! 👈',
	link: process.env.NEXT_PUBLIC_VOTTE_URL as string,
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
    title: "Smart Homes",
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
  {
    title: "Votte",
    description:
      "Deployed the Votte app to Vercel, and started connecting it to a database powered by Neon.tech",
    image: "/votte.jpg",
    link: "https://github.com/flushingtech/Votte_Backend",
  },
  {
    title: "Votte",
    description:
      "Deployed the Votte app to Vercel, and started connecting it to a database powered by Neon.tech",
    image: "/votte.jpg",
    link: "https://github.com/flushingtech/Votte_Backend",
  },
];

function GridLayout() {
  /*
  Part 1:
  create a simple grid based images in a single container
  Part 2:
  create an onclick event for each image which leads to a new container that shows
  the image displayed in Projects CarouselComponent
  Part 3: 
  Implementing such things.
  */

  const [slideNumber, setSlideNumber] = useState(0);

  return (
  <section className="bg-peach overflow-x-hidden">
      <div className="w-screen flex flex-col item-center pt-10 pb-4 pl-10 pr-10 md:pt-28 md:pb-36">
        <h2 className="block text-4xl font-site_header text-center font-bold pb-10">
          {"//"}Check Out Our <span className="text-site_red">Projects</span>
        </h2>
          <div className="grid grid-cols-4 gap-10 width-200 height-200">
            {
              projects && projects.map((project, index) => {
                return (
                  <div className='max-w-30 cursor-pointer transform h-25 bg-blue-400 w-25 transition duration-500 hover:scale-125 hover:bg-blue-600'  key={index}>
                  <img src={project.image} alt='' 
                  />
                  </div>
                );
              })
            }
          </div>
        </div>
    </section>

  );
}

function ProjectsCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi, onSelect]);

	return (
		<section className='bg-peach overflow-x-hidden'>
			<div className='w-screen flex flex-col item-center pt-10 pb-4 md:pt-28 md:pb-36'>
				<h2 className='block text-4xl font-site_header text-center font-bold'>
					{'//'}Check Out Our <span className='text-site_red'>Projects</span>
				</h2>
				<div className='mt-4 text-4xl text-site_orange text-center hover:bg-sky-700 text-site_header'>
					<Link href={VotteInfo.link}>{VotteInfo.text}</Link>
				</div>
				<div ref={emblaRef}>
					<div className='flex mt-10 md:mt-20'>
						{projects.map((project, index) => (
							<div key={index} className='flex-[0_0_100%]'>
								<div className='container w-[80%] flex flex-col md:flex-row gap-8 items-center mx-auto'>
									<div className='md:w-1/2 relative'>
										<a {...(project.link !== '' ? { href: project.link } : {})}>
											<Image
												src={project.image}
												alt={`${project.title} Image`}
												width={1000}
												height={1000}
												className='border-4 border-site_red w-full'
											/>
										</a>
										<div className='absolute bottom-8 left-0 right-0 flex justify-center'>
											<div className='flex space-x-8'>
												{projects.map((_, dotIndex) => (
													<Button
														key={dotIndex}
														variant='ghost'
														size='sm'
														className={`w-5 h-5 p-0 rounded-full ${
															dotIndex === selectedIndex
																? 'bg-site_red'
																: 'bg-site_orange'
														}`}
														onClick={() => scrollTo(dotIndex)}
														aria-label={`Go to project ${dotIndex + 1}`}
													/>
												))}
											</div>
										</div>
									</div>
									<div className='md:w-1/2'>
										<h3 className='text-3xl font-bold font-site_header m-auto mb-12 text-gray-900 text-center md:w-1/2 md:text-5xl'>
											{project.title}
										</h3>
										<p className='text-lg m-auto mb-6 text-gray-700 font-site_1st_paragraph text-center md:w-3/4 md:text-3xl'>
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
export {ProjectsCarouselComponent, GridLayout}
