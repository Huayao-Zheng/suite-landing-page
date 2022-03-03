import React from 'react';

import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { Testimonial } from './layout/Testimonial';

export const App = () => {
  return (
    <main className="font-epilogue bg-cream-white-123 min-h-screen text-dark-blue-123 ">
      <Header />
      <Hero />
      <Testimonial />
    </main>
  );
};
