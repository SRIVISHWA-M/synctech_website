import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Data-driven insights to measure performance and optimize campaigns.',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    pattern: 'radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)',
    tech: [
      { name: 'Google Analytics', desc: 'Web analytics service that tracks and reports website traffic.', logo: 'https://cdn.simpleicons.org/googleanalytics/F9AB00' },
      { name: 'Google Search Console', desc: 'Monitors, maintains, and troubleshoots site presence in Google.', logo: 'https://cdn.simpleicons.org/googlesearchconsole/4285F4' },
      { name: 'Google Tag Manager', desc: 'Manages JavaScript and HTML tags used for tracking and analytics.', logo: 'https://cdn.simpleicons.org/googletagmanager/246FDB' },
      { name: 'Looker Studio', desc: 'Converts data into customizable informative reports and dashboards.', logo: 'https://cdn.simpleicons.org/looker/4285F4' },
    ]
  },
  {
    id: 'advertising',
    title: 'Advertising',
    description: 'Targeted ad campaigns across major search and social networks.',
    bg: 'bg-gradient-to-br from-indigo-50 to-white',
    pattern: 'radial-gradient(circle at 0% 100%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)',
    tech: [
      { name: 'Google Ads', desc: 'Online advertising platform to reach customers on Google.', logo: 'https://cdn.simpleicons.org/googleads/4285F4' },
      { name: 'Meta Ads', desc: 'Comprehensive advertising across Facebook, Instagram, and Messenger.', logo: 'https://cdn.simpleicons.org/meta/0468FF' },
      { name: 'LinkedIn Ads', desc: 'B2B advertising platform to reach professionals and decision-makers.', logo: 'https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782131652/square-linkedin-logo-isolated-white-background_469489-892_o3q84v.avif' },
      { name: 'YouTube Ads', desc: 'Video advertising platform to engage users through visual storytelling.', logo: 'https://cdn.simpleicons.org/youtube/FF0000' },
    ]
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Advanced tools to improve organic search rankings and visibility.',
    bg: 'bg-gradient-to-br from-cyan-50 to-white',
    pattern: 'radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)',
    tech: [
      { name: 'SEMrush', desc: 'Online visibility management platform and content marketing SaaS.', logo: 'https://cdn.simpleicons.org/semrush/FF642D' },
      { name: 'Ahrefs', desc: 'SEO software suite for link building, keyword research, and site audits.', logo: 'https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782131365/primary-light-S5ZNO3MC_vxchur.png' },
      { name: 'Moz', desc: 'Inbound marketing and analytics software for SEO campaigns.', logo: 'https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782131454/Moz-Logo_s7l4li.png' },
      { name: 'Screaming Frog', desc: 'Website crawler that helps improve onsite SEO by extracting data.', logo: 'https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782131568/screaming-frog-social_wmskn6.png' },
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Automation platforms to engage audiences and nurture leads.',
    bg: 'bg-gradient-to-br from-sky-50 to-white',
    pattern: 'radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
    tech: [
      { name: 'Mailchimp', desc: 'Marketing automation platform and email marketing service.', logo: 'https://cdn.simpleicons.org/mailchimp/FFE01B' },
      { name: 'HubSpot', desc: 'CRM, marketing, sales, and customer service software.', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
      { name: 'Buffer', desc: 'Software application for the web and mobile, designed to manage social networks.', logo: 'https://cdn.simpleicons.org/buffer/231F20' },
      { name: 'Hootsuite', desc: 'Social media management platform, created by Ryan Holmes.', logo: 'https://cdn.simpleicons.org/hootsuite/000000' },
    ]
  }
];

// Calculate animation states for the Netflix carousel
const getCarouselPosition = (index: number, activeIndex: number) => {
  const diff = index - activeIndex;
  if (diff === 0) return { x: 0, scale: 1.1, opacity: 1, zIndex: 30, filter: 'blur(0px)' };
  if (diff === 1) return { x: '115%', scale: 0.85, opacity: 0.4, zIndex: 20, filter: 'blur(2px)' };
  if (diff === 2) return { x: '210%', scale: 0.7, opacity: 0.1, zIndex: 10, filter: 'blur(4px)' };
  if (diff === -1) return { x: '-115%', scale: 0.85, opacity: 0.4, zIndex: 20, filter: 'blur(2px)' };
  if (diff === -2) return { x: '-210%', scale: 0.7, opacity: 0.1, zIndex: 10, filter: 'blur(4px)' };
  return { x: diff > 0 ? '300%' : '-300%', scale: 0.5, opacity: 0, zIndex: 0, filter: 'blur(8px)' };
};

const MarketingTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [isAutomated, setIsAutomated] = useState(true);

  // The Automated Sequencing Engine
  useEffect(() => {
    if (!isAutomated) return;

    let timeout: NodeJS.Timeout;

    if (activeCategory === null) {
      // Find the next category to expand. If none, start with analytics.
      timeout = setTimeout(() => {
        setActiveCategory(categories[0].id);
        setActiveTechIndex(0);
      }, 2000); // Wait on overview for 2s
    } else {
      const currentCatIndex = categories.findIndex(c => c.id === activeCategory);
      const category = categories[currentCatIndex];

      timeout = setTimeout(() => {
        if (activeTechIndex < category.tech.length - 1) {
          // Move to next tech card in this category
          setActiveTechIndex(prev => prev + 1);
        } else {
          // Finished this category, collapse back to overview
          setActiveCategory(null);
          
          // Wait briefly, then advance to next category
          setTimeout(() => {
            if (isAutomated) {
               const nextCatIndex = (currentCatIndex + 1) % categories.length;
               setActiveCategory(categories[nextCatIndex].id);
               setActiveTechIndex(0);
            }
          }, 1500); // Time spent on overview before next category opens
        }
      }, 2500); // Time spent looking at a single active center card
    }

    return () => clearTimeout(timeout);
  }, [activeCategory, activeTechIndex, isAutomated]);

  const handleManualCategoryClick = (id: string) => {
    setIsAutomated(false);
    setActiveCategory(activeCategory === id ? null : id);
    setActiveTechIndex(0);
  };

  const activeCategoryData = categories.find(c => c.id === activeCategory);

  // Global Keyboard Navigation for Expanded State
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (activeCategory === null || !activeCategoryData) return;
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setIsAutomated(false);
        setActiveTechIndex(prev => Math.min(prev + 1, activeCategoryData.tech.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIsAutomated(false);
        setActiveTechIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsAutomated(false);
        setActiveCategory(null);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeCategory, activeCategoryData]);

  return (
    <section className="py-24 bg-[#F8FAFC] relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 block">
            Tools & Platforms
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Marketing Technologies We Use
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Powering Customer Relationships Through Intelligent Platforms
          </p>
        </div>

        {/* Dynamic Area */}
        <div className="min-h-[280px] flex items-start justify-center relative">
          <AnimatePresence mode="wait">
            
            {/* OVERVIEW STATE: Show all 4 categories */}
            {activeCategory === null && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl"
              >
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    onClick={() => handleManualCategoryClick(category.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleManualCategoryClick(category.id);
                      }
                    }}
                    className={`relative overflow-hidden rounded-[2rem] border border-slate-200/60 p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] bg-white group focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" style={{ background: category.pattern, backgroundColor: 'transparent' }} />
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{category.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{category.description}</p>
                    <div className="mt-8 flex gap-3 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                       {category.tech.slice(0,3).map((t, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shadow-sm">
                             <img src={t.logo} alt={t.name} className="w-full h-full object-contain" onError={(e) => e.currentTarget.src = "https://cdn.simpleicons.org/google/000"} />
                          </div>
                       ))}
                       {category.tech.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                             +1
                          </div>
                       )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* EXPANDED CATEGORY STATE: Netflix Carousel */}
            {activeCategory !== null && activeCategoryData && (
              <motion.div 
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Back Button & Title */}
                <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-12 z-50">
                  <button 
                    onClick={() => { setIsAutomated(false); setActiveCategory(null); }}
                    className="text-sm font-semibold text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-2"
                  >
                    ← Back to Categories
                  </button>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">{activeCategoryData.title}</h3>
                </div>

                {/* The Carousel Track */}
                <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
                   {activeCategoryData.tech.map((tech, idx) => {
                     const isCenter = idx === activeTechIndex;
                     const animProps = getCarouselPosition(idx, activeTechIndex);
                     
                     return (
                       <motion.div
                         key={tech.name}
                         animate={{
                           x: animProps.x,
                           scale: animProps.scale,
                           opacity: animProps.opacity,
                           zIndex: animProps.zIndex,
                           filter: animProps.filter,
                         }}
                         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                         className={`absolute w-[300px] md:w-[340px] bg-white/60 rounded-[2rem] border border-slate-100 p-10 flex flex-col items-center text-center backdrop-blur-xl ${isCenter ? 'shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] ring-1 ring-slate-200' : 'shadow-xl cursor-pointer'} focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                         role="button"
                         tabIndex={0}
                         onClick={() => {
                           if (!isCenter) {
                             setIsAutomated(false);
                             setActiveTechIndex(idx);
                           }
                         }}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault();
                             if (!isCenter) {
                               setIsAutomated(false);
                               setActiveTechIndex(idx);
                             }
                           }
                         }}
                       >
                         {/* Platform Logo */}
                         <div className={`w-20 h-20 mb-6 flex items-center justify-center transition-transform duration-700 ${isCenter ? 'scale-110 drop-shadow-md' : 'scale-90 grayscale opacity-70'}`}>
                            <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" onError={(e) => e.currentTarget.src = "https://cdn.simpleicons.org/google/000"} />
                         </div>
                         
                         {/* Platform Name */}
                         <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${isCenter ? 'text-slate-800' : 'text-slate-500'}`}>
                           {tech.name}
                         </h4>
                         
                         {/* Platform Description */}
                         <p className={`text-sm leading-relaxed transition-opacity duration-500 ${isCenter ? 'text-slate-500 opacity-100' : 'opacity-0'}`}>
                           {tech.desc}
                         </p>
                       </motion.div>
                     );
                   })}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-0 flex gap-3 mt-8 z-50">
                   {activeCategoryData.tech.map((_, idx) => (
                     <button 
                       key={idx}
                       onClick={() => { setIsAutomated(false); setActiveTechIndex(idx); }}
                       className={`h-2 rounded-full transition-all duration-500 ${idx === activeTechIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                     />
                   ))}
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default MarketingTechnologies;
