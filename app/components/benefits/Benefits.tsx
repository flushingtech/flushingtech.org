import React from 'react';
import { BENEFITS_DATA } from './benefits-data';
import BenefitsCard from './BenefitsCard';
import { BenefitsType } from './benefits-data';

const Benefits = () => {
  return (
    <>
      <div className='fav-res-container flex flex-col gap-16 container sm:px-16 px-4 items-center justify-center min-h-screen py-8'>
        <div className='favorite-heading flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold text-center font-site_header'>Benefits of Joining Flushing Tech</h2>
          <p className='text-muted-foreground text-xl text-center'>There are many!</p>
        </div>
        <div className='cards-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-content-center'>
          {BENEFITS_DATA.map(({ title, description }:BenefitsType ) => (
            <BenefitsCard title={title} description={description} />
          ))}
        </div>
      </div>
    </>
  )
};

export default Benefits;
