import React from 'react';

import { Logo } from '../components/Logo';
import { Copyright } from '../components/Copyright';
import { MediaIcons } from '../components/MediaIcons';

export const Footer = () => {
  return (
    <footer className="text-center">
      <div className="h-[420px]"></div>

      <div className="myContainer flex flex-col gap-[33px] pb-[80px] mg:pb-[72px] md:flex-row justify-between items-center">
        <Logo />
        <Copyright />
        <MediaIcons />
      </div>
    </footer>
  );
};
