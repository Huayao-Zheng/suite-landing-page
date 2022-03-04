import React from 'react';

import { JeremyImage } from '../components/JeremyImage';
import { CurvedLine } from '../components/CurvedLine';
import { TestimonialReview } from '../components/TestimonialReview';

import { useMediaQuery } from '../useMediaQuery';

export const Testimonial = ({ className }) => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <section className={`${isTablet ? 'myContainer' : ''} ${className}`} id="testimonial">
      <div className="bg-dark-blue-123 text-center rounded-[15px] flex flex-col gap-10 lg:flex-row lg:gap-0">
        <JeremyImage />
        <CurvedLine />
        <TestimonialReview />
      </div>
    </section>
  );
};
