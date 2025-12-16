import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { QuickBooksFeature } from './components/QuickBooksFeature';
import { PayrollTax } from './components/PayrollTax';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuickBooksFeature />
        <PayrollTax />
        <Testimonials />
        <FAQ />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;