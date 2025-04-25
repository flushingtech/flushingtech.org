import React from 'react';
import { BenefitsType } from './benefits-data';

const BenefitsCard = ({ title, description, headerColor }: BenefitsType) => {
  return (
    <div className='card-container h-max w-[200px] rounded shadow-lg flex flex-col gap-4 py-6 px-4 bg-neutral-100 flex-1'>
      <div className='card-header h-full w-full bg-lime-500 p-2'>
        <div className={`${headerColor} text-neutral-700 h-max w-full`}>
          <h3 className='text-2xl font-semibold leading-6'>
            {title}
          </h3>
        </div>
      </div>
      <div className='card-content w-full h-full'>
        {description}
      </div>
    </div>
  )
}

export default BenefitsCard;
