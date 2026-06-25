import React from "react";
import { Routes, Route } from "react-router-dom";

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
import TermsOfService from "./components/termsofservice";
import PrivacyPolicy from "./components/privacypolicy";
import CookiesPolicy from "./components/cookiespolicy";
import IndustriesSection from "./components/IndustriesSection";
import EnterpriseTechStack from "./components/EnterpriseTechStack";

import MobileDevelopment from "./services/mobiledevelopment";
import WebDevelopment from "./services/webdevelopment";
import DigitalMarketing from "./services/digitalmarketing";
import CRMSolutions from "./services/crm";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import Careers from "./components/Careers";
import Features from "./components/Features";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      {/* <Pricing /> */}
      <WhyUs />
      <IndustriesSection/>
      <Operations />
      <EnterpriseTechStack/>
      {/*<Portfolio />*/}
      {/*<SocialProof />*/}
      <Support />
      {/*<Contact />*/}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/services">
            <Route path="mobiledevelopment" element={<MobileDevelopment />} />
            <Route path="webdevelopment" element={<WebDevelopment />} />
            <Route path="digitalmarketing" element={<DigitalMarketing />} />
            <Route path="crm" element={<CRMSolutions />} />
          </Route>
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;