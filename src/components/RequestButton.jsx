import React from 'react';

const button = {
  primary: ['bg-red'].join(' '),
  secondary: [
    'text-[14px]',
    'md:text-[16px]',
    'leading-[24px]',
    'md:leading-[32px]',
    'tracking-[-0.14px',
    'md:tracking-[-0.16px]',
    'px-4',
    'md:px-6',
    'py-3',
    'border-[1px]',
    'border-solid',
    'border-dark-blue-123',
    'hover:bg-dark-blue-123',
    'hover:text-cream-white-123',
  ].join(' '),
};

export const RequestButton = ({ buttonStyle }) => {
  return (
    <div className={`${button[buttonStyle]} font-bold rounded-md ease-linear duration-150 cursor-pointer`}>
      Request Beta Access
    </div>
  );
};
