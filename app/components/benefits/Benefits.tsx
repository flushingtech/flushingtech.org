import React from 'react';
import { BENEFITS_HOME_DATA, BenefitsHomeType } from './benefits-data';
import BenefitsCard from './BenefitsCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Benefits = () => {
  return (
    <section className="w-full benefits-section py-16 px-4 sm:px-16 bg-muted">
      <div className="benefits-heading flex flex-col gap-2 items-center mb-12">
        <h2 className="text-4xl font-semibold text-center font-site_header">
          Level Up with Flushing Tech
        </h2>
        <p className="text-muted-foreground text-xl text-center">Member Benefits</p>
      </div>

      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
        {BENEFITS_HOME_DATA.map(({ title, description, icon }: BenefitsHomeType, index) => (
          <div
            key={index}
            className={index === BENEFITS_HOME_DATA.length - 1 ? "sm:col-span-2 lg:col-span-1 flex justify-center" : ""}
          >
            <BenefitsCard title={title} description={description} icon={icon} />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <Link href='https://www.meetup.com/flushing-tech/' passHref target="_blank">
          <Button size="xl" className='px-4 sm:px-10'>
           See Everything We Offer
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Benefits;
