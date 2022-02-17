import React from 'react';

import { Logo } from '../components/Logo';
import { RequestButton } from '../components/RequestButton';

export const Header = () => {
  return (
    <header className="myContainer flex justify-between items-center pt-6 md:pt-10">
      <Logo />
      <RequestButton buttonStyle="secondary" />
    </header>
  );
};
