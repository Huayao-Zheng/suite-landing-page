import React from 'react';

import { HeroIntro } from '../components/HeroIntro';
import { HeroImage } from '../components/HeroImage';
import { StatesList } from '../components/StatesList';

export const Hero = () => {
  return (
    <section id="hero" className="myContainer pt-[56px] md:pt-[80px] xl:pt-[67px] md:grid">
      <HeroIntro />
      <HeroImage />
      <StatesList />
    </section>
  );
};
