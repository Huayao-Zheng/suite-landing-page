import React from 'react';

import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { Testimonial } from './layout/Testimonial';
import { Footer } from './layout/Footer';

export const App = () => {
  return (
    <main className="font-epilogue bg-cream-white-123 min-h-screen text-dark-blue-123 ">
      <Header />
      <Hero />
      <div className="relative mt-[582px] md:mt-[600px] lg:mt-[460px] bg-cream-123">
        <Testimonial className="absolute w-full top-0 left-1/2 -translate-x-1/2  -translate-y-1/2" />
        <Footer />
      </div>
    </main>
  );
};
