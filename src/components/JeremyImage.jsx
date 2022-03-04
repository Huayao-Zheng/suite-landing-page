import React from 'react';

import SmallJeremy from '../images/image-jeremy-small.png';
import BigJeremy from '../images/image-jeremy-large.png';
import BgBlur from '../images/pattern-blur.svg';

export const JeremyImage = ({ isDesktop }) => {
  return (
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
  );
};
