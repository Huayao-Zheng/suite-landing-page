import React from 'react';
import { State } from './State';

const states = [
  { top: '2K+', bottom: 'COMPANIES' },
  { top: '8', bottom: 'LANGUAGES' },
  { top: '1.2M', bottom: 'LEADS' },
];

export const StatesList = ({ className = '' }) => {
  return (
    <div
      className={`
      flex flex-col gap-8 justify-between 
      md:flex-row md:gap-[10px] md:px-[60px] 
      lg:flex-col lg:gap-[63px] lg:justify-center lg:px-[0] lg:pl-[96px]
      ${className}`}
    >
      {states.map(({ top, bottom }, idx) => (
        <State key={idx} top={top} bottom={bottom} />
      ))}
    </div>
  );
};
