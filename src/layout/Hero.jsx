import React from 'react';

import { HeroIntro } from '../components/HeroIntro';
import { HeroImage } from '../components/HeroImage';
import { StatesList } from '../components/StatesList';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="myContainer grid- pt-[56px] md:pt-[80px] xl:pt-[67px] 
    grid gap-8"
    >
      {/* layout the grid template and pass the grid-itme classes through below's components */}
      <HeroIntro />
      <HeroImage />
      <StatesList />
    </section>
  );
};
