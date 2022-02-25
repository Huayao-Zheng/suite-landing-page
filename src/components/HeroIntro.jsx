import React from 'react';

import { RequestButton } from './RequestButton';

import curvedLine from '../images/pattern-curved-line-1.svg';

export const HeroIntro = () => {
  return (
    <div className="grid place-items-start gap-8 max-w-[375px] mx-auto">
      <div className="text-[38px] leading-[44px] tracking-[-0.53px]">
        <p className="inline-block">
          <img src={curvedLine} alt="curved lined" className="w-[152px] h-[19px] ml-auto" />A{' '}
          <strong>super solution</strong>
        </p>

        <p>
          for your <strong>business.</strong>
        </p>
      </div>

      <p className="text-grey-123 leading-[28px] tracking-[-0.09px] max-w-[350px]">
        Our marketing and sales automations help you scale your outreach to get more leads for your company.
      </p>

      <RequestButton buttonStyle="primary" customStyle="" />
    </div>
  );
};
