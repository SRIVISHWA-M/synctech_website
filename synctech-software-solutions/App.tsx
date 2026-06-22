import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Operations from "./components/Operations";
import Portfolio from "./components/Portfolio";
import SocialProof from "./components/SocialProof";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import TermsOfService from "./components/termsofservice"
import PrivacyPolicy from "./components/privacypolicy";
import CookiesPolicy from "./components/cookiespolicy";
import IndustriesSection from "./components/IndustriesSection";
import EnterpriseTechStack from "./components/EnterpriseTechStack";
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <IndustriesSection/>
        <Operations />
        <EnterpriseTechStack/>
        <Portfolio />
        <SocialProof />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/cookiespolicy" element={<CookiesPolicy />} />
      </Routes>
    </div>
  );
}

export default App;