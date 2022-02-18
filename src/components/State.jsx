import React from 'react';

export const State = ({ top, bottom }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start">
      <strong className="text-[48px] leading-[56px]">{top}</strong>
      <span>{bottom}</span>
    </div>
  );
};
