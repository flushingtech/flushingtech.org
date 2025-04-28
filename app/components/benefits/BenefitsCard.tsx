
import React from 'react';
import { BenefitsHomeType } from './benefits-data';

const BenefitsCard = ({ title, description, icon }: BenefitsHomeType) => {
  const Icon = icon;

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 max-w-sm mx-auto">
      <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-site_orange mb-4">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <h3 className="text-lg 2xl:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitsCard;
