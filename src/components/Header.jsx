import React from 'react';

import { Logo } from './Logo';
import { RequestButton } from './RequestButton';

export const Header = () => {
  return (
    <header className="max-w-[1190px] mx-auto transition-all flex justify-between items-center px-4 md:px-10 pt-6 md:pt-10">
      <Logo />
      <RequestButton buttonStyle="secondary" />
    </header>
  );
};
