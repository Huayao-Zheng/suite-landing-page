import React from 'react';

import { CompanyStates } from '../components/CompanyStates';

import { useMediaQuery } from '../useMediaQuery';

import HeroImageForMobile from '../images/image-hero-landscape.png';
import HeroImageForDesktopAndtablet from '../images/image-hero-portrait.png';

export const Hero = () => {
  const isTabletAndUp = useMediaQuery('(min-width: 768px)');

  return (
    <section id="hero" className="myContainer pt-[56px] md:pt-[80px] xl:pt-[67px]">
      <img
        src={isTabletAndUp ? HeroImageForDesktopAndtablet : HeroImageForMobile}
        alt="phone"
        className="sssssssssssssssssssssss"
      />
      <CompanyStates />
    </section>
  );
};
