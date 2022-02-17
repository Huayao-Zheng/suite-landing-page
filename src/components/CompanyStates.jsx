import React from 'react';

const states = [
  { top: '2K+', bottom: 'COMPANIES' },
  { top: '8', bottom: 'LANGUAGES' },
  { top: '1.2M', bottom: 'LEADS' },
];

export const CompanyStates = () => {
  return (
    <div className="flex flex-col gap-8 justify-between md:flex-row md:gap-[10px] md:px-[60px] lg:flex-col lg:gap-[63px]">
      {states.map(({ top, bottom }, idx) => (
        <div key={idx} className="flex flex-col justify-center items-center lg:items-start">
          <strong className="text-[48px] leading-[56px]">{top}</strong>
          <span>{bottom}</span>
        </div>
      ))}
    </div>
  );
};
