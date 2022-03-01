import React from 'react';

import { HeroIntro } from '../components/HeroIntro';
import { HeroImage } from '../components/HeroImage';
import { StatesList } from '../components/StatesList';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="myContainer grid- pt-[56px] md:pt-[80px] xl:pt-[67px] 
      grid gap-8
      md:grid-cols-[408px_77px_204px] md:grid-rows-[1fr_83px] md:gap-0 md:place-content-center
      "
    >
      <HeroIntro className="md:row-span-1 md:col-start-1 md:col-end-3" />
      <HeroImage className="" />
      <StatesList className="" />
    </section>
  );
};
