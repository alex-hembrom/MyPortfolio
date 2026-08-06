import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import mongoIcon from './assets/mongodb_icon.png';
import firebaseIcon from './assets/Firebase.png';
import Portfolioimage from './assets/Portfolioimage.png';


import sutraImg from './assets/sutra.png';
import cryptoWalletImg from './assets/CryptoWallet.jpeg';
import trafficImg from './assets/Traffic.png';
import honeypotImg from './assets/Honeypot.png';

const EMAILJS_SERVICE_ID = "service_whm7bgq";
const EMAILJS_TEMPLATE_ID = "template_yxz5k6b";
const EMAILJS_PUBLIC_KEY = "IKwe91pEY3uZknFI_";

function App() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: 'success',
            text: 'Message sent successfully! I will get back to you soon.'
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          setStatusMessage({
            type: 'error',
            text: 'Failed to send message. Please try again or email me directly.'
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-background font-sans text-gray-200 selection:bg-purple-500 selection:text-white relative overflow-hidden">
      
      {/* CORNER GRADIENT GLOW EFFECTS */}
      <div className="fixed -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-600/30 to-blue-500/20 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed -bottom-32 -right-32 w-[32rem] h-[32rem] bg-gradient-to-tl from-blue-600/30 to-purple-600/20 blur-[140px] rounded-full pointer-events-none z-0"></div>

      {/* FLOATING BACKGROUND TECH ICONS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.06] text-blue-300">
        {/* Database */}
        <svg className="w-10 h-10 absolute top-[12%] left-[4%] animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 4c4.69 0 8 1.5 8 2.5s-3.31 2.5-8 2.5-8-1.5-8-2.5S7.31 4 12 4z"/></svg>
        {/* Node.js */}
        <svg className="w-9 h-9 text-green-400 absolute top-[25%] left-[18%] animate-bounce duration-[7s]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2z"/></svg>
        {/* MongoDB */}
        <div className="absolute top-[8%] right-[15%] text-green-500 font-bold text-sm tracking-tighter opacity-80 animate-pulse">MongoDB</div>
        {/* AI Chip */}
        <svg className="w-10 h-10 text-purple-400 absolute top-[48%] left-[6%]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m16-6h2m-2 6h2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>
        {/* Java */}
        <div className="absolute top-[35%] right-[8%] text-red-400 font-bold text-base animate-pulse">Java</div>
        {/* C */}
        <div className="absolute top-[58%] right-[14%] text-blue-400 font-extrabold text-xl">C</div>
        {/* Python */}
        <div className="absolute top-[72%] left-[12%] text-yellow-300 font-bold text-base animate-bounce duration-[9s]">Python</div>
        {/* React */}
        <svg className="w-12 h-12 text-blue-400 absolute top-[22%] right-[25%]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse></svg>
        {/* Express.js */}
        <div className="absolute top-[82%] right-[22%] text-gray-300 font-light text-lg">ex</div>
        {/* VS Code */}
        <svg className="w-10 h-10 text-blue-400 absolute top-[68%] right-[5%]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        {/* C# */}
        <div className="absolute top-[42%] left-[24%] text-purple-300 font-extrabold text-base">C#</div>
        {/* Firebase */}
        <svg className="w-10 h-10 text-yellow-400 absolute top-[88%] left-[28%]" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 2a.5.5 0 0 0-.5.5v3.25L10 2.5a.5.5 0 0 0-.85.35v6.9L6 6.5a.5.5 0 0 0-.8.4v10.6a6.5 6.5 0 0 0 13 0V7.5a.5.5 0 0 0-.8-.4l-3.9 3.25V2.5a.5.5 0 0 0-.5-.5z"/></svg>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>
        {`
          @keyframes printReveal {
            0% { clip-path: inset(0 100% 0 0); opacity: 0; }
            5% { opacity: 1; }
            100% { clip-path: inset(0 0 0 0); opacity: 1; }
          }
          .animate-print {
            animation: printReveal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .animate-print-delayed {
            opacity: 0;
            animation: printReveal 3s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
          }
        `}
      </style>

      {/* HEADER / FIXED GLASS NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C10]/70 backdrop-blur-lg border-b border-gray-800/50 shadow-sm transition-all">
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center relative">
          
          {/* Left: Logo */}
          <a 
            href="#home"
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className="text-2xl font-extrabold tracking-tight text-white z-10 cursor-pointer inline-block transform hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300"
          >
            Alex.
          </a>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-400 absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="group relative inline-block text-white transform hover:-translate-y-1 transition-all duration-300">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="group relative inline-block transform hover:text-white hover:-translate-y-1 transition-all duration-300">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#technologies" className="group relative inline-block transform hover:text-white hover:-translate-y-1 transition-all duration-300">
              Tech
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="group relative inline-block transform hover:text-white hover:-translate-y-1 transition-all duration-300">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="group relative inline-block transform hover:text-white hover:-translate-y-1 transition-all duration-300">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#education" className="group relative inline-block transform hover:text-white hover:-translate-y-1 transition-all duration-300">
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right: Call to Action Button */}
          <div className="z-10 hidden sm:block">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] inline-block transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </nav>
      </header>

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-36 space-y-28 pb-20 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-16 scroll-mt-32">
          
          <div className="flex-1 space-y-6 z-10">
            {/* Top Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wide">
              Hello! I'm
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="text-white">Alex </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-print inline-block">
                Hembrom
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-3xl font-bold text-white tracking-wide">
              Software Engineer | Full Stack Developer
            </h2>
            
            {/* Work Summary Paragraph */}
            <div className="flex gap-5 pt-3">
              <div className="w-1.5 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] shrink-0"></div>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl lg:max-w-4xl leading-relaxed animate-print-delayed">
                I specialize in end-to-end full stack web development powered by the MERN stack and cutting-edge AI integrations. I transform complex ideas into highly practical, production-ready applications—building scalable backends, intuitive user interfaces, and custom AI agents that solve real-world problems seamlessly.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-7 py-3.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2">
                View My Work &rarr;
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-lg border border-gray-700 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white font-medium transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-80 h-80 md:w-96 md:h-[26rem] flex items-center justify-center">
              <div className="absolute inset-2 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 blur-[90px] rounded-full pointer-events-none opacity-70 animate-pulse"></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <img 
                   src={Portfolioimage} 
                   alt="Alex Hembrom" 
                   className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" 
                   style={{
                     WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 90%)',
                     maskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 90%)'
                   }}
                 />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-10"></div>

        {/* ABOUT ME SECTION */}
        <section id="about" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-10 md:p-16 h-full w-full overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold text-blue-400 tracking-widest uppercase">About Me</h4>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                  
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl pb-4 animate-print-delayed">
                    I'm Alex Hembrom, a passionate Software Engineer and full-stack developer. I love building beautiful, functional, and scalable software systems that solve real-world problems.
                  </p>
                  
                  <a 
                    href="/Alex_Hembrom_Resume.pdf" 
                    download="Alex_Hembrom_Resume.pdf"
                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 text-sm inline-flex items-center gap-2 border-none"
                  >
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  </a>
                </div>

                {/* Info Card with Hover Glow Effect */}
                <div className="lg:col-span-5 relative group/infocard transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover/infocard:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative bg-[#1A1D2D] border border-gray-800 group-hover/infocard:border-purple-500/50 rounded-2xl p-8 shadow-xl transition-all duration-500">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#13151F] rounded-xl text-gray-400 group-hover/infocard:text-blue-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Name</p>
                          <p className="text-sm text-gray-400">Alex Hembrom</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#13151F] rounded-xl text-gray-400 group-hover/infocard:text-blue-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Email</p>
                          <p className="text-sm text-gray-400">hembromalex431@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#13151F] rounded-xl text-gray-400 group-hover/infocard:text-blue-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Location</p>
                          <p className="text-sm text-gray-400">Kolkata, West Bengal</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#13151F] rounded-xl text-gray-400">
                          <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Availability</p>
                          <p className="text-sm text-gray-400">Available for work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES I WORK WITH SECTION */}
        <section id="technologies" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-10 md:p-16 h-full w-full overflow-hidden">
              <div className="space-y-8">
                
                <div>
                  <h4 className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Core Tech</h4>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technologies I Work With</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  
                  {/* MongoDB Card */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/techitem transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                    <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 flex flex-col items-center justify-center gap-4 h-full">
                      <img src={mongoIcon} alt="MongoDB" className="w-16 h-16 object-contain transform group-hover/techitem:scale-110 transition-transform duration-300" />
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg">MongoDB</h3>
                        <p className="text-gray-500 text-xs">Database</p>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Express.js Card */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/techitem transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                    <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 flex flex-col items-center justify-center gap-4 h-full">
                      <div className="w-16 h-16 flex items-center justify-center text-3xl font-light text-gray-300 transform group-hover/techitem:scale-110 transition-transform duration-300">
                        ex
                      </div>
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg">Express.js</h3>
                        <p className="text-gray-500 text-xs">Backend</p>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* React Card */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/techitem transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                    <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 flex flex-col items-center justify-center gap-4 h-full">
                      <svg className="w-16 h-16 text-blue-400 transform group-hover/techitem:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse>
                        <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                      </svg>
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg">React</h3>
                        <p className="text-gray-500 text-xs">Frontend</p>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Node.js Card */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/techitem transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                    <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 flex flex-col items-center justify-center gap-4 h-full">
                      <svg className="w-16 h-16 text-green-400 transform group-hover/techitem:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2ZM10.5 16.5V11.2L6 8.5V13.8L10.5 16.5ZM12 9.5L16.5 6.8L21 9.5L12 14.8L3 9.5L7.5 6.8L12 9.5ZM18 13.8V8.5L13.5 11.2V16.5L18 13.8Z"/>
                      </svg>
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg">Node.js</h3>
                        <p className="text-gray-500 text-xs">Runtime</p>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Firebase Card */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/techitem transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer col-span-2 sm:col-span-1">
                    <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 flex flex-col items-center justify-center gap-4 h-full">
                      <img src={firebaseIcon} alt="Firebase" className="w-16 h-16 object-contain transform group-hover/techitem:scale-110 transition-transform duration-300" />
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg">Firebase</h3>
                        <p className="text-gray-500 text-xs">BaaS & Database</p>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MY PROJECTS SECTION */}
        <section id="projects" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-8 md:p-14 h-full w-full overflow-hidden">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">My Projects</h4>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
                </div>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-medium transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 text-sm w-max">
                  View All Projects
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Project 1: Crypto Wallet */}
                <div className="relative group/card transition-all duration-500 hover:-translate-y-2 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-40 transition-opacity duration-500 -z-10"></div>
                  <div className="bg-[#1A1D2D] border border-gray-800 group-hover/card:border-blue-500/50 rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-500">
                    <div className="w-full h-56 bg-[#13151F] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50 group/img">
                      <img src={cryptoWalletImg} alt="Crypto Wallet" className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500" />
                      <a href="https://github.com/alex-hembrom/CRYPTOWALLLET.git" target="_blank" rel="noreferrer" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    </div>
                    <div className="space-y-2 px-1">
                      <h3 className="text-white font-bold text-xl group-hover/card:text-blue-400 transition-colors">Crypto Wallet</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Developed a mobile cryptocurrency wallet using React Native and Firebase with secure user authentication and real-time data synchronization. Integrated Web3 functionality using Ethers.js and Ganache to create Ethereum wallets, track live balances, and execute ETH transactions.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-1 pt-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">React Native</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Firebase</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Ethers.js</span>
                    </div>
                  </div>
                </div>

                {/* Project 2: Agentic Honeypot */}
                <div className="relative group/card transition-all duration-500 hover:-translate-y-2 z-10">
                  <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-40 transition-opacity duration-500 -z-10"></div>
                  <div className="bg-[#1A1D2D] border border-gray-800 group-hover/card:border-purple-500/50 rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-500">
                    <div className="w-full h-56 bg-[#13151F] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50 group/img">
                      <img src={honeypotImg} alt="Agentic Honeypot" className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500" />
                      <a href="https://github.com/alex-hembrom/honeypot-hackathon.git" target="_blank" rel="noreferrer" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    </div>
                    <div className="space-y-2 px-1">
                      <h3 className="text-white font-bold text-xl group-hover/card:text-blue-400 transition-colors">Agentic Honeypot</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Developed an AI-powered system using FastAPI to detect financial scam messages and simulate interactions with scammers. Contributed to building multi-turn conversation logic with intelligent responses to extract details like bank accounts and UPI IDs.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-1 pt-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Python</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">FastAPI</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Regex</span>
                    </div>
                  </div>
                </div>

                {/* Project 3: SUTRA */}
                <div className="relative group/card transition-all duration-500 hover:-translate-y-2 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-40 transition-opacity duration-500 -z-10"></div>
                  <div className="bg-[#1A1D2D] border border-gray-800 group-hover/card:border-blue-500/50 rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-500">
                    <div className="w-full h-56 bg-[#13151F] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50 group/img">
                      <img src={sutraImg} alt="SUTRA (School Assistant)" className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500" />
                      <a href="https://sutra-improvised.vercel.app/" target="_blank" rel="noreferrer" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    </div>
                    <div className="space-y-2 px-1">
                      <h3 className="text-white font-bold text-xl group-hover/card:text-blue-400 transition-colors">SUTRA (School Assistant)</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Implemented a gamified React application to help NGOs automate program design using the Logical Framework Approach (LFA). Built a multi-level wizard with Firebase Firestore for real-time cloud storage and efficient state management.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-1 pt-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">React.js</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Firebase</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Project 4: Traffic Sign Recognition */}
                <div className="relative group/card transition-all duration-500 hover:-translate-y-2 z-10">
                  <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-40 transition-opacity duration-500 -z-10"></div>
                  <div className="bg-[#1A1D2D] border border-gray-800 group-hover/card:border-purple-500/50 rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-500">
                    <div className="w-full h-56 bg-[#13151F] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50 group/img">
                      <img src={trafficImg} alt="Traffic Sign Recognition System" className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500" />
                      <a href="https://github.com/alex-hembrom/Traffic-Sign-Recognition.git" target="_blank" rel="noreferrer" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    </div>
                    <div className="space-y-2 px-1">
                      <h3 className="text-white font-bold text-xl group-hover/card:text-blue-400 transition-colors">Traffic Sign Recognition System</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Developed a machine learning desktop application to identify 43 types of traffic signs. Trained a custom CNN model using Keras and OpenCV, and integrated it with a Tkinter-based GUI for easy image testing.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 px-1 pt-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Python</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">Keras</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold">OpenCV</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & COMPETENCIES SECTION WITH MATCHED GRADIENT BORDER & HOVER ICON GLOW */}
        <section id="skills" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-8 md:p-14 h-full w-full overflow-hidden">
              <div className="text-center space-y-3 mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-widest uppercase">
                  Technical Arsenal
                </div>
                <h2 className="text-4xl font-extrabold text-white tracking-tight">Skills & Competencies</h2>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">
                  A comprehensive overview of technologies, frameworks, tools, and design skill sets I leverage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Languages */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Languages</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Java</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Python</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">C</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">JavaScript</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Frameworks */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Frameworks</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">React.js</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">React Native</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Node.js</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">FastAPI</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Databases */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Databases</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Firebase</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MongoDB</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MySQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Tools */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Tools</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Git</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">GitHub</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">VS Code</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Vite</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. AI Tools */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">AI Tools</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Kiro</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Copilot</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Gemini</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">ChatGPT</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Claude</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. ML & Core CS */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">ML & Core CS</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Keras</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">OpenCV</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">DSA</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">GCP</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Productivity */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Productivity</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MS Office</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Google Suite</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Spoken Languages */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 group/item transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  <div className="bg-[#1A1D2D] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#13151F] border border-blue-500/20 rounded-xl text-blue-400 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/50 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg">Spoken Languages</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">English</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Hindi</span>
                        <span className="px-3 py-1.5 bg-[#13151F] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Bengali</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & QUALIFICATIONS SECTION */}
        <section id="education" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-10 md:p-16 h-full w-full overflow-hidden">
              <div className="space-y-3 mb-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-widest uppercase">
                  Academic Background
                </div>
                <h2 className="text-4xl font-extrabold text-white tracking-tight">Education & Qualifications</h2>
              </div>

              <div className="space-y-6">
                
                <div className="bg-[#1A1D2D] border border-gray-800 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-600 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-accent-indigo"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#13151F] rounded-xl text-blue-400 shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6"/></svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-bold text-xl">B.Tech in Computer Science and Engineering</h3>
                        <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">CGPA 8.19</span>
                      </div>
                      <p className="text-gray-400 text-sm">Government College of Engineering and Leather Technology, Kolkata, West Bengal</p>
                    </div>
                  </div>
                  
                  <div className="md:text-right shrink-0">
                    <span className="px-4 py-1.5 bg-[#13151F] text-gray-300 rounded-full text-xs font-medium border border-gray-800">June 2021 – May 2025</span>
                  </div>
                </div>

                <div className="bg-[#1A1D2D] border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-600 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#13151F] rounded-xl text-blue-400 shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6"/></svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-bold text-xl">Class-XII(Science)</h3>
                        <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">70.8%</span>
                      </div>
                      <p className="text-gray-400 text-sm">Anandamath Vidyapith, West Bengal Council of Higher Secondary Education, Ichapur, West Bengal</p>
                    </div>
                  </div>
                  
                  <div className="md:text-right shrink-0">
                    <span className="px-4 py-1.5 bg-[#13151F] text-gray-300 rounded-full text-xs font-medium border border-gray-800">Higher Secondary Education</span>
                  </div>
                </div>

                <div className="bg-[#1A1D2D] border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-600 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#13151F] rounded-xl text-blue-400 shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6"/></svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-bold text-xl">Class-X</h3>
                        <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">64.43%</span>
                      </div>
                      <p className="text-gray-400 text-sm">Ramakrishna Vivekananda Mission Vidyapith, West Bengal Board of Secondary Education, Barrackpore, West Bengal</p>
                    </div>
                  </div>
                  
                  <div className="md:text-right shrink-0">
                    <span className="px-4 py-1.5 bg-[#13151F] text-gray-300 rounded-full text-xs font-medium border border-gray-800">Secondary Education</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION WITH WORKING EMAILJS FORM */}
        <section id="contact" className="relative scroll-mt-32 transition-transform duration-500 hover:-translate-y-2 group z-10 mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-500 h-full w-full">
            <div className="relative bg-[#13151F] rounded-[calc(2rem-1px)] p-10 md:p-16 h-full w-full overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <div className="space-y-8 flex flex-col justify-center">
                  <div>
                    <h4 className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Contact Me</h4>
                    <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                      Have a project in mind or want to work together? Feel free to send me a message.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400 border border-gray-800/50">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <p className="text-sm font-medium text-gray-200">hembromalex431@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400 border border-gray-800/50">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </div>
                      <p className="text-sm font-medium text-gray-200">+91 7439054250</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400 border border-gray-800/50">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <p className="text-sm font-medium text-gray-200">Kolkata, West Bengal</p>
                    </div>
                  </div>
                </div>

                {/* Working Form Box */}
                <div className="relative group/formcard transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover/formcard:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative bg-[#1A1D2D] border border-gray-800 group-hover/formcard:border-blue-500/50 rounded-2xl p-8 shadow-xl transition-all duration-500">
                    <form ref={formRef} onSubmit={handleSendMessage} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          name="from_name"
                          required
                          placeholder="Your Name" 
                          className="w-full bg-[#13151F] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors" 
                        />
                        <input 
                          type="email" 
                          name="from_email"
                          required
                          placeholder="Your Email" 
                          className="w-full bg-[#13151F] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors" 
                        />
                      </div>
                      <input 
                        type="text" 
                        name="subject"
                        required
                        placeholder="Subject" 
                        className="w-full bg-[#13151F] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors" 
                      />
                      <textarea 
                        name="message"
                        required
                        placeholder="Your Message" 
                        rows="5" 
                        className="w-full bg-[#13151F] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      ></textarea>
                      
                      {statusMessage.text && (
                        <p className={`text-xs font-semibold ${statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                          {statusMessage.text}
                        </p>
                      )}

                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-accent-purple text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-white font-bold tracking-wide uppercase">ALEX HEMBROM</h3>
          <p className="text-gray-500 text-sm">© 2026 Alex Hembrom. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4 text-gray-400">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
          </a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;