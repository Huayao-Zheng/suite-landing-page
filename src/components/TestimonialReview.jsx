import React from 'react';

export function TestimonialReview() {
  return (
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
  );
}
