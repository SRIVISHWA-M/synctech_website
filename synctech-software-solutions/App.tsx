import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Operations from './components/Operations';
import Portfolio from './components/Portfolio';
import SocialProof from './components/SocialProof';
import Support from './components/Support';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <Operations />
        <Portfolio />
        <SocialProof />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;