import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import ServicesLandingPage from "./pages/ServicesLandingPage";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import AISolutions from "./pages/services/AISolutions"
import DigitalMarketing from "./pages/services/DigitalMarketing";
import CRMSolutions from "./pages/services/CRMSolutions";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id (removing the # character)
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
          <Route path="/services">
            <Route index element={<ServicesLandingPage />} />
            <Route path="MobileDevelopment" element={<MobileDevelopment />} />
            <Route path="WebDevelopment" element={<WebDevelopment />} />
            <Route path="DigitalMarketing" element={<DigitalMarketing />} />
            <Route path="SoftwareDevelopment" element={<SoftwareDevelopment/>}/>
            <Route path="AISolutions" element={<AISolutions/>}/>
            <Route path="crm" element={<CRMSolutions />} />
          </Route>
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
