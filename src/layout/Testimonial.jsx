import React from 'react';

import SmallJeremy from '../images/image-jeremy-small.png';
import BigJeremy from '../images/image-jeremy-large.png';
import BgBlur from '../images/pattern-blur.svg';
import CurvedLine2 from '../images/pattern-curved-line-2.svg';

import { useMediaQuery } from '../useMediaQuery';

export const Testimonial = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section className={isDesktop ? 'myContainer' : null} id="testimonial">
      <div
        className="
       bg-dark-blue-123 text-center rounded-[15px] mt-[237px] flex flex-col gap-10
      lg:flex-row lg:gap-0
      "
      >
        <div
          style={{ backgroundImage: `url(${BgBlur})` }}
          className="
        relative w-full h-[223px] bg-no-repeat bg-center bg-[length:250px_250px] 
        md:bg-[length:350px_350px] 
        lg:bg-[length:350px_350px] lg:bg-bottom lg:h-[522px]"
        >
          <img
            className="
            absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-172px] 
            lg:top-auto lg:bottom-0 lg:left-[112px] lg:translate-x-0 lg:translate-y-0 "
            src={isDesktop ? BigJeremy : SmallJeremy}
            alt="Jeremy writing on smart phone"
          />
        </div>

        <div>
          <img className="mx-auto w-[49px] lg:w-[147px] lg:pt-[161px]" src={CurvedLine2} alt="curved line 2" />
        </div>

        <div className="text-cream-white-123 px-[16px] pb-[64px] lg:py-[88px] lg:pl-[52px] lg:pr-[125px]">
          <h2 className="mb-10 text-[40px] leading-[48px] tracking-[-0.42px]">
            It just <strong>works.</strong>
          </h2>
          <blockquote className="text-[18px] leading-8 tracking-[0.09px] max-w-[800px] mx-auto">
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
      </div>
    </section>
  );
};
