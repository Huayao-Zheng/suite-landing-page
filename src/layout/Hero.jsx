import React from 'react';

import { StatesList } from '../components/StatesList';
import { HeroImage } from '../components/HeroImage';

export const Hero = () => {
  return (
    <section id="hero" className="myContainer pt-[56px] md:pt-[80px] xl:pt-[67px]">
      <HeroImage />
      <StatesList />
    </section>
  );
};
