import React from 'react';

import Jeremy from '../images/image-jeremy-small.png';
import BgBlur from '../images/pattern-blur.svg';
import CurvedLine2 from '../images/pattern-curved-line-2.svg';

export const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="
      bg-dark-blue-123 text-center rounded-[15px] mt-[237px] px-4 pb-16 flex flex-col gap-10
      md:px-[97px]
      "
    >
      <div className="relative">
        <img
          className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-172px]"
          src={Jeremy}
          alt="Jeremy writing on smart phone"
        />
        <img className="h-[223px] mx-auto" src={BgBlur} alt="Blur background" />
      </div>

      <div>
        <img className="mx-auto w-[49px]" src={CurvedLine2} alt="curved line 2" />
      </div>

      <div className="text-cream-white-123">
        <h2 className="mb-10 text-[40px] leading-[48px] tracking-[-0.42px]">
          It just <strong>works.</strong>
        </h2>
        <blockquote className="text-[18px] leading-8 tracking-[0.09px]">
          <p className="mb-10 text-cream-123">
            “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need
            separate tools to do the same job. This thing is a miracle worker.”
          </p>
          <footer>
            <strong className="tracking-[-0.18px]">JEREMY ROBINSON</strong>
            <div className="text-[16px] text-cream-123 leading-[26px] tracking-[2.5px]">CMO, FYLO</div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
