import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, Mail, Phone, Tag, PenSquare, Send, Linkedin, Twitter, Instagram, Code, Smartphone, Megaphone, Handshake, MessageSquare } from 'lucide-react';

const phoneVariants = {
  ringing: {
    rotate: [0, -6, 6, -6, 6, 0, 0, 0, 0],
    y: [0, -4, -4, -4, -4, 0, 0, 0, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.5, 0.75, 1]
    }
  }
};

const AnimatedPhone = () => {
  return (
    <div className="absolute right-0 lg:-right-4 top-10 lg:top-12 w-full lg:w-[450px] h-[400px] flex items-center justify-center pointer-events-none z-0">
      
      {/* Floor Concentric Rings */}
      <div className="absolute bottom-12 w-72 h-20 border-2 border-blue-100/50 rounded-[100%] z-0" />
      <div className="absolute bottom-16 w-56 h-16 border-2 border-blue-200/50 rounded-[100%] z-0" />
      <div className="absolute bottom-20 w-36 h-12 bg-blue-50/50 rounded-[100%] z-0" />

      {/* Floating Chat Bubble with dashed line */}
      <motion.div 
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-4 bg-white px-5 py-3 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] z-30"
      >
        <div className="absolute -top-3 -left-3 bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center text-white border-4 border-[#EAF3FF]">
          <MessageSquare size={10} fill="currentColor" />
        </div>
        <span className="font-bold text-slate-800 text-xs leading-tight block text-center">
          We're here <br /> to help!
        </span>
      </motion.div>

      {/* Dashed Line SVG connecting chat bubble to phone */}
      <svg className="absolute top-20 left-12 w-32 h-24 z-10 overflow-visible pointer-events-none" viewBox="0 0 200 100">
        <path 
          d="M 10 10 C 10 60, 80 100, 150 40" 
          fill="transparent" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          strokeDasharray="5 5"
        />
        <path d="M 145 35 L 155 45 L 140 40 Z" fill="#3B82F6" />
      </svg>

      {/* Artificial Drop Shadow for Phone */}
      <div className="absolute bottom-24 right-20 w-48 h-10 bg-blue-900/15 blur-xl rounded-[100%] z-10" />

      {/* The 3D Phone Image */}
      <div className="relative z-20 translate-x-8 -translate-y-4">
        <img 
          src="/retro_phone.png" 
          alt="3D Blue Retro Telephone" 
          style={{ filter: 'contrast(1.2) brightness(1.05)' }}
          className="w-[280px] lg:w-[320px] h-auto object-contain mix-blend-multiply" 
        />
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <section className="relative min-h-screen bg-[#F0F6FF] pt-32 pb-10 px-4 md:px-8 lg:px-12 overflow-hidden flex justify-center items-start font-sans">
      
      {/* Background Shapes */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] bg-blue-200/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-blue-600 rounded-full opacity-90 pointer-events-none shadow-[inset_30px_30px_60px_rgba(255,255,255,0.2)]" />
      <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] bg-blue-400 rounded-full opacity-80 pointer-events-none blur-sm" />
      <div className="absolute top-[15%] right-[5%] w-[100px] h-[100px] bg-blue-300 rounded-full opacity-40 pointer-events-none blur-2xl" />
      
      {/* Subtle Dotted Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMzcsIDk5LCAyMzUsIDAuMSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-[1100px] bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] flex flex-col pt-10 pb-6 px-10 z-10">
        
        {/* Floating Social Icons Pill */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-5 bg-white shadow-lg rounded-2xl flex-col gap-5 py-6 px-3 z-20 border border-slate-50">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors bg-blue-50 p-2 rounded-xl"><Mail size={18} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors bg-blue-50 p-2 rounded-xl"><Linkedin size={18} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors bg-blue-50 p-2 rounded-xl"><Twitter size={18} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors bg-blue-50 p-2 rounded-xl"><Instagram size={18} /></a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 relative z-10 pl-0 lg:pl-8">
          
          {/* LEFT COLUMN: Typography & Form */}
          <div className="flex flex-col justify-center">
            
            <div className="mb-6">
              <h1 className="text-4xl lg:text-[48px] font-black text-[#0F172A] tracking-tighter leading-[1.1]">
                LET'S GET
              </h1>
              <h1 className="text-4xl lg:text-[48px] font-black text-blue-600 tracking-tighter leading-[1.1] mb-4">
                IN TOUCH
              </h1>
              <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-xs font-medium text-slate-500 max-w-[340px] leading-relaxed">
                We'd love to hear from you! Whether you have questions, feedback, or want to discuss a project, our team is ready to help.
              </p>
            </div>

            {/* The Form */}
            <form className="space-y-3 w-full max-w-[420px]">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={14} />
                  <input type="text" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" placeholder="Full Name*" />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={14} />
                  <input type="text" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" placeholder="Company Name*" />
                </div>
              </div>

              {/* Row 2: Email Address */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={14} />
                <input type="email" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" placeholder="Email Address*" />
              </div>

              {/* Row 3: Phone & Subject */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={14} />
                  <input type="tel" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" placeholder="Phone Number*" />
                </div>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={14} />
                  <input type="text" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" placeholder="Subject*" />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="relative">
                <PenSquare className="absolute left-3 top-3.5 text-blue-500" size={14} />
                <textarea rows={3} className="w-full bg-[#F8FAFC] border-2 border-slate-100 rounded-xl pl-9 pr-3 py-3 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 resize-none" placeholder="Message*"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow-[0_8px_15px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300 w-[180px] text-sm">
                  <Send size={14} className="-rotate-12" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Visuals */}
          <div className="relative flex flex-col items-center justify-between min-h-[400px]">
             
             {/* 3D Phone Area */}
             <AnimatedPhone />

             {/* Service Cards Footer Area */}
             <div className="grid grid-cols-4 gap-2 w-full max-w-[380px] mt-auto absolute bottom-2 right-0 lg:-right-4">
               {[
                 { icon: <Code size={20} />, text: "Web\nDev" },
                 { icon: <Smartphone size={20} />, text: "Mobile\nDev" },
                 { icon: <Megaphone size={20} />, text: "Digital\nMarket" },
                 { icon: <Handshake size={20} />, text: "CRM\nSol." },
               ].map((card, i) => (
                 <div key={i} className="bg-white rounded-xl shadow-[0_5px_15px_-5px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-center justify-center py-3 px-1 gap-2 hover:-translate-y-1 transition-all cursor-pointer">
                   <div className="text-blue-600">{card.icon}</div>
                   <span className="text-[9px] font-black text-slate-800 text-center uppercase tracking-tight whitespace-pre-line leading-[1.1]">
                     {card.text}
                   </span>
                 </div>
               ))}
             </div>
          </div>

        </div>

        {/* Footer Area inside Card */}
        <div className="mt-10 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3 w-full">
           <p className="text-[10px] font-semibold text-slate-800">
             © 2026 <span className="text-blue-600">SyncTech</span> Software Solutions. All rights reserved.
           </p>
           <div className="flex items-center gap-3 text-[10px] font-bold text-blue-600">
             <a href="/privacypolicy" className="hover:text-blue-800 transition-colors">Privacy Policy</a>
             <span className="text-slate-300">|</span>
             <a href="/termsofservice" className="hover:text-blue-800 transition-colors">Terms of Service</a>
             <span className="text-slate-300">|</span>
             <a href="/cookiespolicy" className="hover:text-blue-800 transition-colors">Cookie Policy</a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
