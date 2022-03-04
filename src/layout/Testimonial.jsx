import React from 'react';

import { JeremyImage } from '../components/JeremyImage';
import { CurvedLine } from '../components/CurvedLine';
import { TestimonialReview } from '../components/TestimonialReview';

import { useMediaQuery } from '../useMediaQuery';

export const Testimonial = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section className={isDesktop ? 'myContainer' : null} id="testimonial">
      <div className="bg-dark-blue-123 text-center rounded-[15px] mt-[237px] flex flex-col gap-10 lg:flex-row lg:gap-0">
        <JeremyImage isDesktop={isDesktop} />
        <CurvedLine />
        <TestimonialReview />
      </div>
    </section>
  );
};
