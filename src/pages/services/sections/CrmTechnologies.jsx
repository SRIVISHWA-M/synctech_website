import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TechIcon({ src, alt, className }) {
  if (src.includes("cloudinary.com") || src.includes("wikimedia.org") || src.includes("swimburger.net")) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  }

  const match = src.match(/cdn\.simpleicons\.org\/([^/]+)(?:\/([^/]+))?/);
  if (match) {
    const slug = match[1];
    let color = match[2] || "currentColor";
    if (color !== "currentColor" && color !== "black" && color !== "white" && !color.startsWith("#")) {
      color = `#${color}`;
    }
    return (
      <div
        className={className}
        style={{
          backgroundColor: color,
          WebkitMask: `url(https://cdn.jsdelivr.net/npm/simple-icons@11.10.0/icons/${slug}.svg) no-repeat center / contain`,
          mask: `url(https://cdn.jsdelivr.net/npm/simple-icons@11.10.0/icons/${slug}.svg) no-repeat center / contain`,
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}

const categories = [
  {
    id: "crm",
    title: "CRM",
    description: "Centralized customer relationship management solutions.",
    bg: "bg-gradient-to-br from-indigo-50 to-white",
    pattern:
      "radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)",
    tech: [
      {
        name: "Salesforce",
        desc: "Leading cloud-based customer relationship management platform.",
        logo: "https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782132429/Salesforce.com_logo.svg_y4dpwa.webp",
      },
      {
        name: "HubSpot CRM",
        desc: "Inbound marketing, sales, and CRM platform.",
        logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
      },
      {
        name: "Zoho CRM",
        desc: "Customer relationship management for growing businesses.",
        logo: "https://cdn.simpleicons.org/zoho/E3242B",
      },
      {
        name: "Microsoft Dynamics 365",
        desc: "Enterprise CRM and business management platform.",
        logo: "https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782132451/684ac35abde0813cbb1c7854_Capture_d_e%CC%81cran_le_2025-06-12_a%CC%80_14.08.36_i6bsjx.webp",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Automating business operations and workflows.",
    bg: "bg-gradient-to-br from-purple-50 to-white",
    pattern:
      "radial-gradient(circle at 0% 100%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
    tech: [
      {
        name: "Power Automate",
        desc: "Workflow automation across Microsoft services.",
        logo: "https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782132487/unnamed_dz1azo.webp",
      },
      {
        name: "Zapier",
        desc: "Connects apps and automates workflows.",
        logo: "https://cdn.simpleicons.org/zapier/FF4A00",
      },
      {
        name: "Make",
        desc: "Visual automation platform for business processes.",
        logo: "https://cdn.simpleicons.org/make/000000",
      },
      {
        name: "HubSpot Workflows",
        desc: "Automated customer engagement and nurturing.",
        logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Transforming business data into actionable insights.",
    bg: "bg-gradient-to-br from-emerald-50 to-white",
    pattern:
      "radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
    tech: [
      {
        name: "Power BI",
        desc: "Business intelligence and analytics platform.",
        logo: "https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782132525/download_bzyffx.webp",
      },
      {
        name: "Google Analytics",
        desc: "Website traffic and user behavior analytics.",
        logo: "https://cdn.simpleicons.org/googleanalytics/F9AB00",
      },
      {
        name: "Looker Studio",
        desc: "Interactive reporting and data visualization.",
        logo: "https://cdn.simpleicons.org/looker/4285F4",
      },
      {
        name: "CRM Dashboards",
        desc: "Real-time customer and sales performance tracking.",
        logo: "https://res.cloudinary.com/dzf7f5ag3/image/upload/v1782132633/Zoho_CRM__application_keojnr.webp",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Scalable cloud infrastructure for modern businesses.",
    bg: "bg-gradient-to-br from-sky-50 to-white",
    pattern:
      "radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)",
    tech: [
      {
        name: "Microsoft Azure",
        desc: "Enterprise cloud platform for applications and infrastructure.",
        logo: "https://swimburger.net/media/ppnn3pcl/azure.webp",
      },
      {
        name: "AWS",
        desc: "Scalable cloud computing services and infrastructure.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.webp",
      },
      {
        name: "Google Cloud",
        desc: "Cloud platform for analytics, AI, and infrastructure.",
        logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
      },
      {
        name: "Cloud CRM Platforms",
        desc: "Cloud-native customer relationship management solutions.",
        logo: "https://cdn.simpleicons.org/icloud/3693F4",
      },
    ],
  },
];

// Calculate animation states for the Netflix carousel
const getCarouselPosition = (index, activeIndex) => {
  const diff = index - activeIndex;
  // Center card is 30% larger (scale: 1.3 relative to 1.0, or in my relative scale 1.15 vs 0.85)
  if (diff === 0)
    return { x: 0, scale: 1.15, opacity: 1, zIndex: 30, filter: "blur(0px)" };
  if (diff === 1)
    return {
      x: "120%",
      scale: 0.85,
      opacity: 0.5,
      zIndex: 20,
      filter: "blur(2px)",
    };
  if (diff === 2)
    return {
      x: "230%",
      scale: 0.7,
      opacity: 0.1,
      zIndex: 10,
      filter: "blur(4px)",
    };
  if (diff === -1)
    return {
      x: "-120%",
      scale: 0.85,
      opacity: 0.5,
      zIndex: 20,
      filter: "blur(2px)",
    };
  if (diff === -2)
    return {
      x: "-230%",
      scale: 0.7,
      opacity: 0.1,
      zIndex: 10,
      filter: "blur(4px)",
    };
  return {
    x: diff > 0 ? "300%" : "-300%",
    scale: 0.5,
    opacity: 0,
    zIndex: 0,
    filter: "blur(8px)",
  };
};

const CrmTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [isAutomated, setIsAutomated] = useState(true);

  // The Automated Sequencing Engine
  useEffect(() => {
    if (!isAutomated) return;

    let timeout;

    if (activeCategory === null) {
      // Find the next category to expand. If none, start with CRM.
      timeout = setTimeout(() => {
        setActiveCategory(categories[0].id);
        setActiveTechIndex(0);
      }, 3000); // Wait on overview for 3s to read the final message
    } else {
      const currentCatIndex = categories.findIndex(
        (c) => c.id === activeCategory,
      );
      const category = categories[currentCatIndex];

      timeout = setTimeout(() => {
        if (activeTechIndex < category.tech.length - 1) {
          // Move to next tech card in this category
          setActiveTechIndex((prev) => prev + 1);
        } else {
          // Finished this category, collapse back to overview
          setActiveCategory(null);
          // Wait briefly, then advance to next category
          setTimeout(() => {
            if (isAutomated) {
              const nextCatIndex = (currentCatIndex + 1) % categories.length;
              // If we wrapped back to 0, we can just let it sit on overview longer
              if (nextCatIndex !== 0) {
                setActiveCategory(categories[nextCatIndex].id);
                setActiveTechIndex(0);
              }
            }
          }, 1500); // Time spent on overview before next category opens
        }
      }, 3000); // Time spent looking at a single active center card
    }

    return () => clearTimeout(timeout);
  }, [activeCategory, activeTechIndex, isAutomated]);

  const handleManualCategoryClick = (id) => {
    setIsAutomated(false);
    setActiveCategory(activeCategory === id ? null : id);
    setActiveTechIndex(0);
  };

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  // Global Keyboard Navigation for Expanded State
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (activeCategory === null || !activeCategoryData) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIsAutomated(false);
        setActiveTechIndex((prev) =>
          Math.min(prev + 1, activeCategoryData.tech.length - 1),
        );
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIsAutomated(false);
        setActiveTechIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsAutomated(false);
        setActiveCategory(null);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [activeCategory, activeCategoryData]);

  return (
    <section className="py-12 md:py-16 bg-[#F0F6FF] relative font-sans overflow-hidden">
      {/* Ambient Radial Spotlight & Particles */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnzmMTAgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bS0yMCAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 block">
            CRM Platforms
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Technology We Work With
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
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleManualCategoryClick(category.id);
                      }
                    }}
                    className={`relative overflow-hidden rounded-[24px] border border-slate-200/60 p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] bg-white group min-h-[200px] focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  >
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: category.pattern,
                        backgroundColor: "transparent",
                      }}
                    />
                    <div
                      className={`absolute inset-0 ${category.bg} opacity-10 pointer-events-none`}
                    />

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
                        {category.description}
                      </p>

                      {/* Mini Logos row */}
                      <div className="flex gap-2 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        {category.tech.slice(0, 3).map((t, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shadow-sm"
                          >
                            <TechIcon
                              src={t.logo}
                              alt={t.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                        {category.tech.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                            +1
                          </div>
                        )}
                      </div>
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
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Back Button & Title */}
                <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-12 z-50">
                  <button
                    onClick={() => {
                      setIsAutomated(false);
                      setActiveCategory(null);
                    }}
                    className="text-sm font-semibold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200"
                  >
                    ← Overview
                  </button>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    {activeCategoryData.title}
                  </h3>
                </div>

                {/* The Carousel Track */}
                <div className="relative w-full h-[450px] flex items-center justify-center perspective-1000 mt-12">
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
                        transition={{
                          duration: 0.8,
                          type: "spring",
                          bounce: 0.15,
                        }}
                        className={`absolute w-[300px] md:w-[340px] bg-white rounded-[24px] border border-slate-100 p-10 flex flex-col items-center text-center backdrop-blur-xl ${isCenter ? "shadow-[0_30px_80px_-20px_rgba(37,99,235,0.25)] ring-1 ring-blue-500/10" : "shadow-xl cursor-pointer"} focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          if (!isCenter) {
                            setIsAutomated(false);
                            setActiveTechIndex(idx);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            if (!isCenter) {
                              setIsAutomated(false);
                              setActiveTechIndex(idx);
                            }
                          }
                        }}
                      >
                        {/* Platform Logo */}
                        <div
                          className={`w-24 h-24 mb-8 flex items-center justify-center transition-transform duration-700 ${isCenter ? "scale-110 drop-shadow-xl" : "scale-90 grayscale opacity-70"}`}
                        >
                          <TechIcon
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Platform Name */}
                        <h4
                          className={`text-2xl font-bold mb-4 transition-colors duration-500 ${isCenter ? "text-slate-800" : "text-slate-500"}`}
                        >
                          {tech.name}
                        </h4>

                        {/* Platform Description */}
                        <p
                          className={`text-sm leading-relaxed transition-opacity duration-500 ${isCenter ? "text-slate-500 opacity-100" : "opacity-0"}`}
                        >
                          {tech.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-[-20px] flex gap-3 mt-8 z-50">
                  {activeCategoryData.tech.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutomated(false);
                        setActiveTechIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-500 ${idx === activeTechIndex ? "w-10 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Final Message (Only visible on Overview after full sequence or just generally below) */}
        <AnimatePresence>
          {activeCategory === null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Built with Industry-Leading Technologies
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CrmTechnologies;
