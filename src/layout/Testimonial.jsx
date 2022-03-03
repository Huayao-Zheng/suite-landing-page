import React from 'react';

import Jeremy from '../images/image-jeremy-small.png';
import BgBlur from '../images/pattern-blur.svg';
import CurvedLine2 from '../images/pattern-curved-line-2.svg';

export const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-dark-blue-123 rounded-[15px] mt-[237px]">
      <div className="relative">
        <img
          className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-172px]"
          src={Jeremy}
          alt="Jeremy writing on smart phone"
        />
        <img className="h-[223px] mx-auto" src={BgBlur} alt="Blur background" />
      </div>

      <div>
        <img src={CurvedLine2} alt="curved line 2" />
      </div>

      <div className="text-cream-white-123">
        <h2 className="">
          It just <strong>works.</strong>
        </h2>
        <blockquote>
          <p>
            “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need
            separate tools to do the same job. This thing is a miracle worker.”
          </p>
          <footer>
            <strong>JEREMY ROBINSON</strong>
            <div>CMO, FYLO</div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
