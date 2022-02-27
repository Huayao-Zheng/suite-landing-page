import React from 'react';

import { useMediaQuery } from '../useMediaQuery';

import HeroImageForMobile from '../images/image-hero-landscape.png';
import HeroImageForTabletAndUp from '../images/image-hero-portrait.png';

export const HeroImage = ({ className = '' }) => {
  const isTabletAndUp = useMediaQuery('(min-width: 768px)');

  return (
    <img
      src={isTabletAndUp ? HeroImageForTabletAndUp : HeroImageForMobile}
      className={`mx-auto md:grid-co ${className}`}
      alt="phone"
    />
  );
};
