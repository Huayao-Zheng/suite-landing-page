import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 pt-6 ">
      <div className="font-bold text-[32px] leading-[32px] tracking-[-0.44px]">suite</div>
      <div className="font-bold text-[14px] leading-[24px] tracking-[-0.14px] px-4 py-3 border-[1px] border-solid border-dark-blue-123 rounded-md hover:bg-dark-blue-123 hover:text-cream-white-123 ease-linear duration-150 cursor-pointer">
        Request Beta Access
      </div>
    </header>
  );
};
