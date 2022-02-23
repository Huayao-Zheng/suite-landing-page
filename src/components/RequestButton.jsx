import React from 'react';

const button = {
  primary: [''].join(' '),
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

export const RequestButton = ({ buttonStyle, customStyle = '' }) => {
  if (buttonStyle === 'primary') {
    return (
      <button
        className={`bg-dark-blue-123 text-cream-white-123 text-[18px] px-8 py-[15px]
         font-bold rounded-md transition-all`}
      >
        Request Beta Access
      </button>
    );
  }

  return (
    <button className={`${button[buttonStyle]} ${customStyle} font-bold rounded-md transition-all`}>
      Request Beta Access
    </button>
  );
};
