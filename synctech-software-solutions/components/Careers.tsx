import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowRight, Lightbulb, TrendingUp, Users, GraduationCap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Careers: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      icon: <Lightbulb size={24} className="text-blue-600" />,
      title: "Innovative Projects",
      desc: "Work on cutting-edge web, mobile, AI, cloud, and enterprise software solutions.",
      bg: "bg-blue-50"
    },
    {
      icon: <GraduationCap size={24} className="text-blue-600" />,
      title: "Continuous Learning",
      desc: "Grow your skills through real-world challenges and emerging technologies.",
      bg: "bg-blue-50"
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Collaborative Culture",
      desc: "Work alongside passionate professionals in a supportive environment.",
      bg: "bg-blue-50"
    },
    {
      icon: <TrendingUp size={24} className="text-blue-600" />,
      title: "Career Growth",
      desc: "Build a rewarding long-term career with opportunities for advancement.",
      bg: "bg-blue-50"
    }
  ];

  const faqs = [
    {
      q: "When will new positions be posted?",
      a: "We continuously monitor our project needs. New positions are posted as soon as they become available. We recommend checking back every few weeks or joining our talent network."
    },
    {
      q: "Can I submit my resume even if there are no openings?",
      a: "Absolutely! We highly encourage proactive applications. By submitting your resume now, you'll be among the first we consider when a relevant role opens up."
    },
    {
      q: "How can I stay informed about future opportunities?",
      a: "The best way is to join our Talent Network by submitting your resume. You can also follow our company page on LinkedIn for the latest updates and announcements."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      
      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              CAREERS AT SYNCTECHN
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Build Your Future With <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                SyncTech Software Solutions
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              Join a team passionate about innovation, technology, and creating impactful digital solutions for businesses worldwide.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CURRENT OPPORTUNITIES (EMPTY STATE) */}
      {/* ========================================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Current Opportunities</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore our open roles and find the perfect fit for your skills and career aspirations.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeIn}
            className="bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 text-center relative overflow-hidden"
          >
            {/* Glass decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-40" />
            
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-100/50 shadow-sm relative z-10">
              <Briefcase size={32} className="text-blue-600" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 relative z-10 tracking-tight">
              No Open Positions Available
            </h3>
            
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 relative z-10">
              We currently do not have any active job openings. However, we're continuously growing and may have opportunities in software development, AI solutions, mobile applications, web development, cloud technologies, UI/UX design, digital marketing, and enterprise software development in the future.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 max-w-xl mx-auto mb-10 relative z-10">
              <p className="text-slate-600 font-medium text-sm">
                Please check back later or send us your resume for future opportunities.
              </p>
            </div>
            
            <div className="relative z-10">
              <a href="mailto:hello@synctech.io" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-300 group">
                Send Your Resume
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WHY WORK WITH US */}
      {/* ========================================= */}
      <section className="py-24 bg-white border-y border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Work With Us</h2>
            <p className="text-slate-600 text-lg">Discover the benefits of joining our forward-thinking team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[24px] p-8 border border-slate-200/60 hover:border-blue-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${feature.bg} border border-blue-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================= */}
      {/* FAQ SECTION */}
      {/* ========================================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our hiring process.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${openFaq === i ? 'text-blue-700' : 'text-slate-800'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors flex-shrink-0 ${openFaq === i ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* BOTTOM CTA */}
      {/* ========================================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready for Future Opportunities?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We're always interested in meeting talented individuals who want to make an impact through technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
              Contact Us
            </Link>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Careers;
