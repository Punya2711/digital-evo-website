import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { CTA } from '../components/CTA';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA />
      <About />
      <Footer />
    </>
  );
};
