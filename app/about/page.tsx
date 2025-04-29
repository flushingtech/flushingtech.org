
import Image from 'next/image';
import HeroSection from '../components/hero/HeroSection';
import { Button } from '@/components/ui/button';
import { Handshake, Users } from 'lucide-react';
import { BenefitsGrid } from '../components/benefits/BenefitsGrid';
import FAQSection from '../components/faq/FAQSection';


const page = () => {
  return (
    <div className='bg-[#FBE8D8]'>
      <HeroSection
        heading='About Flushing-Tech'
        content='Flushing-Tech is a tech group based in Flushing, New York that hosts bi-weekly meetups for developers, designers, and tech enthusiasts. Our mission is to build a vibrant tech community in Flushing and provide a platform for learning, networking, and collaboration.'
        btnText='Join Our Meetup'
      />
      <section className="bg-white flex flex-col sm:flex-row items-center justify-between gap-12 px-6 py-16 sm:px-12 sm:py-24">
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px] relative border-2 border-accent rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src="/major-tom-agency-MJqMxzsxLtM-unsplash.jpg"
            alt="placeholder image"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-6 text-left max-w-lg">
          <h3 className="text-3xl font-semibold">The Flushing Tech Experience</h3>
          <p className="text-base text-gray-600">
            Flushing-Tech is more than just a meetup — it's a thriving community of developers, designers, and tech enthusiasts who are passionate about building, learning, and collaborating.
            We host bi-weekly hackathons where we brainstorm, vote on project ideas, and create exciting tech together.
            While a winner is crowned, the real goal is to have fun, grow your skills, meet new people, and be part of an ever-evolving tech scene.
            Whether you're looking to network, make new friends, or just enjoy the creative energy of Flushing's tech community, you'll find a place here with us!
          </p>
          <div>
            <Button size="lg">Join Our Meetup</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-8 items-center justify-center px-6 py-12 bg-site_navy text-white">
        {/* Meetup Rating */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md border border-gray-700 flex items-center justify-center bg-black">
            <Handshake className="w-8 h-8 text-peach" />
          </div>
          <div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-1.5 rounded-full">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm font-semibold">4.7</span>
              <span className="text-sm text-gray-300">on Meetup</span>
            </div>
            <p className="mt-1 text-sm text-gray-400">Based on community reviews</p>
          </div>
        </div>

        {/* Member Count */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md border border-gray-700 flex items-center justify-center bg-black">
            <Users className="w-8 h-8 text-peach" />
          </div>
          <div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-1.5 rounded-full">
              <span className="text-peach text-lg">630+</span>
              <span className="text-sm text-gray-300">members</span>
            </div>
            <p className="mt-1 text-sm text-gray-400">And growing fast!</p>
          </div>
        </div>
      </section>
      <section>
        <BenefitsGrid />
      </section>
      <section className='bg-muted'>
        <FAQSection />
      </section>
    </div>
  );
};

export default page;
