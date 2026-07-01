import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
  Check,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Code2,
  BookOpen
} from "lucide-react";
import SEO from "../../components/SEO";
import { blogs } from "../../data/blogs/index.js";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const blog = blogs[id];

  const headings = useMemo(() => {
    return blog
      ? blog.content.filter((block) => block.type === "heading")
      : [];
  }, [blog]);

  useEffect(() => {
    if (!blog || headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      let currentActive = "";
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentActive = heading.id;
          }
        }
      }

      if (!currentActive && headings[0]) {
        currentActive = headings[0].id;
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog, headings]);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="text-center max-w-md p-8 bg-white border border-slate-100 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Article Not Found</h2>
          <p className="text-slate-500 mb-6">
            The blog post you are looking for does not exist or has been relocated to another address.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Tracking flag to apply drop-cap style on the first paragraph block
  let renderedParagraphCount = 0;

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 relative pb-24">
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 9px;
        }
      `}</style>
      <SEO
        title={`${blog.title} | SyncTech Insights`}
        description={blog.description}
        keywords={`${blog.category}, SyncTech solutions, ${blog.title}`}
      />

      {/* Decorative Orbs (Soft Light Opacity) */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none floating-orb" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none glow-orb" />

      {/* Elegant sticky sub-navigation bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-[64px] z-30 py-4.5 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
          <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <span className="hover:text-slate-600 cursor-pointer">Blog</span>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-blue-600 font-extrabold">{blog.category}</span>
          </div>
        </div>
        {/* Scroll Progress Indicator */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Immersive Light-Mode Split Hero Panel */}
        <header className="max-w-7xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-100 shadow-sm rounded-[32px] p-6 md:p-12 relative overflow-hidden text-slate-800">
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b03_1px,transparent_1px),linear-gradient(to_bottom,#1e293b03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          {/* Decorative glows inside card */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Left info column */}
          <div className="lg:col-span-7 relative z-10 space-y-6">
            
            {/* Category tag & Date */}
            <div className="flex items-center gap-3.5 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 shadow-inner">
                {blog.category}
              </span>
              <span className="text-slate-350">•</span>
              <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                <Calendar size={13} className="text-slate-400" />
                {blog.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {blog.title}
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              {blog.description}
            </p>

            {/* Author info & Read time row */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/10"
                />
                <div>
                  <p className="text-sm font-bold text-slate-800">{blog.author.name}</p>
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">{blog.author.role}</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-150 hidden sm:block" />
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                <Clock size={15} className="text-slate-450" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Right cover column */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </header>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: TOC & Share Sidebar */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-[150px] space-y-8">
                         {headings.length > 0 && (
                <div className="p-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2 pl-4">
                    <BookOpen size={13} className="text-slate-400" />
                    Table of Contents
                  </h4>
                  {/* Outer scrollable container with padding-left to prevent overflow clipping */}
                  <div className="max-h-[260px] overflow-y-auto pl-4 pr-2 scrollbar-thin">
                    <div className="relative border-l border-slate-200 pl-4 space-y-2.5">
                      {headings.map((heading) => {
                        const isActive = activeSection === heading.id;
                        return (
                          <div key={heading.id} className="relative group/toc">
                            {/* Timeline Dot Indicator */}
                            <div
                              className={`absolute rounded-full transition-all duration-300 ${
                                isActive
                                  ? "w-2.5 h-2.5 bg-blue-600 left-[-21px] top-[4px] ring-4 ring-blue-100/85"
                                  : "w-1.5 h-1.5 bg-slate-350 left-[-19px] top-[6px] group-hover/toc:bg-slate-400"
                              }`}
                            />
                            <a
                              href={`#${heading.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById(heading.id);
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth" });
                                }
                              }}
                              className={`block text-xs font-semibold leading-normal transition-all duration-200 ${
                                isActive
                                  ? "text-blue-600 translate-x-1"
                                  : "text-slate-500 hover:text-slate-800"
                              }`}
                            >
                              {heading.text}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Share widget inside sidebar - Compact Horizontal Icons (Low Vertical Height) */}
              <div className="bg-white border border-slate-100 rounded-[20px] p-3 shadow-sm text-slate-850 flex flex-col gap-2">
                <h4 className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider text-center">
                  Share Article
                </h4>
                <div className="flex items-center justify-center gap-1.5">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-all"
                    title="Share on LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-all"
                    title="Share on Twitter / X"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-all"
                    title="Share on Facebook"
                  >
                    <Facebook size={14} />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-all relative"
                    title="Copy Link"
                  >
                    {copied ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Link2 size={14} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Center/Right Column: Main Blog Content */}
          <main className="lg:col-span-10 bg-white border border-slate-100 shadow-sm rounded-[32px] p-6 md:p-10 lg:p-12 overflow-hidden text-slate-700">
            {/* Mobile share row */}
            <div className="flex flex-wrap lg:hidden items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4.5 mb-8 text-slate-600">
              <span className="text-sm font-bold text-slate-600 flex items-center gap-2">
                <Share2 size={15} />
                Share Insights:
              </span>
              <div className="flex gap-2 bg-white p-1 rounded-xl border border-slate-150">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-all"
                  aria-label="Share on Twitter / X"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={16} />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-all"
                  aria-label="Copy article link"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-600" />
                  ) : (
                    <Link2 size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Block parser */}
            <div className="prose max-w-none prose-slate">
              {blog.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    renderedParagraphCount++;
                    // Apply stylized drop-cap on first paragraph for premium layout
                    const isFirstParagraph = renderedParagraphCount === 1;
                    return (
                      <p
                        key={index}
                        className={`text-slate-700 leading-relaxed mb-6 text-base md:text-lg ${
                          isFirstParagraph
                            ? "first-letter:text-5xl first-letter:font-extrabold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:font-sans"
                            : ""
                        }`}
                      >
                        {block.text}
                      </p>
                    );

                  case "heading":
                    return (
                      <h2
                        key={index}
                        id={block.id}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-10 mb-4.5 scroll-mt-24 pb-2.5 border-b border-slate-100"
                      >
                        {block.text}
                      </h2>
                    );

                  case "list":
                    return (
                      <ul
                        key={index}
                        className="list-none pl-1 space-y-3.5 my-8 text-slate-700 text-base md:text-lg"
                      >
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-500/15">
                              <Check size={11} className="stroke-[3]" />
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "quote":
                    return (
                      <div
                        key={index}
                        className="relative pl-8 pr-6 py-6 my-10 bg-gradient-to-br from-blue-50/20 to-cyan-50/10 border-l-4 border-cyan-500 rounded-r-3xl overflow-hidden shadow-sm"
                      >
                        {/* Background Quotation Mark icon overlay */}
                        <div className="absolute top-[-10px] right-4 text-[120px] font-serif text-cyan-500/10 select-none leading-none pointer-events-none">
                          “
                        </div>
                        <p className="text-lg md:text-xl text-slate-800 font-semibold italic mb-3 relative z-10 leading-relaxed">
                          "{block.text}"
                        </p>
                        {block.author && (
                          <cite className="block text-xs font-bold text-slate-400 not-italic uppercase tracking-widest relative z-10">
                            — {block.author}
                          </cite>
                        )}
                      </div>
                    );

                  case "code":
                    return (
                      <div key={index} className="relative group/code my-8 rounded-2xl overflow-hidden shadow-xl border border-slate-150 bg-[#0c101a] text-slate-100 font-mono text-sm leading-relaxed">
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-850 bg-slate-950/80 text-slate-400 font-sans text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="font-semibold uppercase tracking-wider text-slate-500 text-[10px]">
                            {block.language || "code"}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(block.code);
                            }}
                            className="hover:text-white transition-colors text-xs font-semibold px-2 py-1 rounded bg-slate-900 border border-slate-800"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="p-5 overflow-x-auto text-[13px] md:text-[14px]">
                          <code>{block.code}</code>
                        </pre>
                      </div>
                    );

                  case "image":
                    return (
                      <div key={index} className="my-8 space-y-2">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-video max-h-[450px]">
                          <img
                            src={block.url}
                            alt={block.caption || "Blog illustration"}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        {block.caption && (
                          <p className="text-center text-xs text-slate-500 italic font-semibold">
                            {block.caption}
                          </p>
                        )}
                      </div>
                    );

                  case "table":
                    return (
                      <div key={index} className="my-8 overflow-hidden rounded-2xl border border-blue-200 shadow-md shadow-blue-500/5 bg-white">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-blue-200 text-sm">
                            <thead className="bg-gradient-to-r from-blue-600 to-cyan-500">
                              <tr>
                                {block.headers.map((header, i) => (
                                  <th
                                    key={i}
                                    className="px-6 py-4.5 text-left text-xs font-extrabold text-white uppercase tracking-wider border-r border-white/20 last:border-r-0"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-100 bg-white">
                              {block.rows.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  className="odd:bg-white even:bg-blue-50/10 hover:bg-blue-50/30 transition-all duration-150"
                                >
                                  {row.map((cell, cellIndex) => (
                                    <td
                                      key={cellIndex}
                                      className="px-6 py-4 text-slate-700 font-semibold text-sm border-r last:border-r-0 border-blue-100"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* Immersive CTA Box */}
            <div className="mt-12 p-6 md:p-10 rounded-[24px] bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-lg">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
              <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                  Partner with SyncTech
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Ready to translate these insights into real operational efficiency?
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Let's design and build your custom web applications, SaaS dashboards, or CRM integrations. Reach out to our solutions architect desk for a free feasibility review.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                  >
                    Schedule a Consultation
                    <ArrowLeft size={14} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* FAQ Section outside container for full width */}
        {blog.faqs && blog.faqs.length > 0 && (
          <div className="mt-20 pt-16 border-t border-slate-200 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-4 border border-blue-100">
                <HelpCircle size={14} />
                Reader FAQS
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h3>
            </div>
            
            <div className="space-y-4">
              {blog.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/10 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <span className={`font-bold md:text-lg transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-850'}`}>
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="p-5 md:p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-200/80">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
