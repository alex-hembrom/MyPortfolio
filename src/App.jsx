import React from 'react';
import mongoIcon from './assets/mongodb_icon.png';
import firebaseIcon from './assets/Firebase.png';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-200 selection:bg-accent-purple selection:text-white pb-20">
      
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative">
        
        {/* Left: Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-white z-10">
          Alex.
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="text-white relative">
            Home
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent-indigo rounded-full"></span>
          </a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Theme Toggle (Placeholder matching the design) */}
        <div className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1 border border-gray-700 z-10">
          <button className="p-1.5 rounded-full text-yellow-500 hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
          </button>
          <button className="p-1.5 rounded-full bg-gray-700 text-white shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16">
        
        {/* HERO SECTION */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          
          {/* Left Side: Text & Actions */}
          <div className="flex-1 space-y-6 z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-xs font-semibold text-accent-indigo tracking-wide">
              Full Stack Developer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-white">Alex </span>
              <span className="text-accent-indigo">Hembrom</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Software Engineer
            </h2>
            
            <p className="text-base text-gray-400 max-w-lg leading-relaxed">
              I build modern, responsive, and scalable software systems using the MERN stack, specializing in frontend engineering and intelligent AI integrations to bring complex ideas to life on the web.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-accent-indigo text-white font-medium hover:bg-indigo-600 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2">
                View My Work &rarr;
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 text-white font-medium transition-colors flex items-center gap-2">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a href="#" className="p-2.5 rounded-full bg-background-lighter border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-background-lighter border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image & Floating Elements */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-indigo/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative w-72 h-96 rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-purple/5 border border-accent-indigo/30 p-1">
              <div className="w-full h-full rounded-xl bg-background-lighter overflow-hidden flex items-end justify-center pb-0">
                 <div className="text-gray-600 font-medium text-sm">Your Photo Here</div>
              </div>

              <div className="absolute -left-8 bottom-12 bg-background-card border border-gray-700/50 rounded-xl p-3 shadow-2xl backdrop-blur-md flex flex-col items-center">
                <span className="text-xl font-bold text-white">B.Tech</span>
                <span className="text-xs text-gray-400">CSE Graduate</span>
              </div>

              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-accent-indigo rounded-xl p-3 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-accent-indigo tracking-widest uppercase">About Me</h4>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <p className="text-gray-400 leading-relaxed max-w-md pb-4">
                I'm Alex Hembrom, a passionate Software Engineer and full-stack developer. I love building beautiful, functional, and scalable software systems that solve real-world problems.
              </p>
              <button className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 text-white font-medium transition-colors text-sm flex items-center gap-2">
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </button>
            </div>

            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Name</p>
                    <p className="text-sm text-gray-400">Alex Hembrom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="text-sm text-gray-400">hembromalex431@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Location</p>
                    <p className="text-sm text-gray-400">Kolkata, West Bengal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1A1D2D] rounded-xl text-gray-400">
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
        </section>

        {/* TECHNOLOGIES I WORK WITH SECTION (Restored) */}
        <section id="technologies" className="mb-32">
          <div className="space-y-8">
            
            {/* Header */}
            <div>
              <h4 className="text-xs font-bold text-accent-indigo tracking-widest uppercase mb-2">Core Tech</h4>
              <h2 className="text-3xl font-bold text-white tracking-tight">Technologies I Work With</h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* MongoDB Card */}
              <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-colors">
                
                {/* CUSTOM ICON */}
                <img src={mongoIcon} alt="MongoDB" className="w-16 h-16 object-contain" />
                
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">MongoDB</h3>
                  <p className="text-gray-500 text-xs">Database</p>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/* Express.js Card */}
              <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center text-3xl font-light text-gray-300">
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

              {/* React Card */}
              <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-colors">
                <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

              {/* Node.js Card */}
              <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-colors">
                <svg className="w-16 h-16 text-green-400" viewBox="0 0 24 24" fill="currentColor">
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

              {/* Firebase Card */}
              <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-gray-600 transition-colors">
                
                {/* CUSTOM ICON */}
                <img src={firebaseIcon} alt="Firebase" className="w-16 h-16 object-contain" />
                
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
        </section>

        {/* MY PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          
          {/* Header Area */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h4 className="text-xs font-bold text-accent-indigo tracking-widest uppercase mb-2">My Projects</h4>
              <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 text-white font-medium transition-colors text-sm w-max">
              View All Projects
            </a>
          </div>

          {/* Projects Grid (2x2 layout for 4 projects) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Crypto Wallet */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 hover:border-gray-600 transition-colors group">
              <div className="w-full h-48 bg-[#1A1D2D] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50">
                <span className="text-gray-600 text-sm font-medium">Crypto Wallet Screenshot</span>
                <a href="#" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-white font-bold text-xl">Crypto Wallet</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developed a mobile cryptocurrency wallet using React Native and Firebase with secure user authentication and real-time data synchronization. Integrated Web3 functionality using Ethers.js and Ganache to create Ethereum wallets, track live balances, and execute ETH transactions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-2 pt-2 mt-auto">
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">React Native</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Firebase</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Ethers.js</span>
              </div>
            </div>

            {/* Project 2: Agentic Honeypot */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 hover:border-gray-600 transition-colors group">
              <div className="w-full h-48 bg-[#1A1D2D] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50">
                <span className="text-gray-600 text-sm font-medium">Honeypot Screenshot</span>
                <a href="#" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-white font-bold text-xl">Agentic Honeypot</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developed an AI-powered system using FastAPI to detect financial scam messages and simulate interactions with scammers. Contributed to building multi-turn conversation logic with intelligent responses to extract details like bank accounts and UPI IDs.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-2 pt-2 mt-auto">
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Python</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">FastAPI</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Regex</span>
              </div>
            </div>

            {/* Project 3: SUTRA */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 hover:border-gray-600 transition-colors group">
              <div className="w-full h-48 bg-[#1A1D2D] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50">
                <span className="text-gray-600 text-sm font-medium">SUTRA Screenshot</span>
                <a href="#" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-white font-bold text-xl">SUTRA (School Assistant)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implemented a gamified React application to help NGOs automate program design using the Logical Framework Approach (LFA). Built a multi-level wizard with Firebase Firestore for real-time cloud storage and efficient state management.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-2 pt-2 mt-auto">
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">React.js</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Firebase</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Tailwind</span>
              </div>
            </div>

            {/* Project 4: Traffic Sign Recognition System */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 hover:border-gray-600 transition-colors group">
              <div className="w-full h-48 bg-[#1A1D2D] rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800/50">
                <span className="text-gray-600 text-sm font-medium">ML Model Screenshot</span>
                <a href="#" className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-white font-bold text-xl">Traffic Sign Recognition System</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developed a machine learning desktop application to identify 43 types of traffic signs. Trained a custom CNN model using Keras and OpenCV, and integrated it with a Tkinter-based GUI for easy image testing.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 px-2 pt-2 mt-auto">
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Python</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">Keras</span>
                <span className="px-3 py-1 bg-accent-indigo/10 text-accent-indigo rounded-md text-xs font-semibold">OpenCV</span>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS & COMPETENCIES SECTION */}
        <section id="skills" className="mb-32">
          <div className="text-center space-y-3 mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-xs font-semibold text-accent-indigo tracking-widest uppercase">
              Technical Arsenal
            </div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Skills & Competencies</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              A comprehensive overview of technologies, frameworks, tools, and design skill sets I leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Programming Languages */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Java</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Python</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">C</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">JavaScript</span>
                </div>
              </div>
            </div>

            {/* 2. Frameworks & Tech */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Frameworks & Tech</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">React.js</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">React Native</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">FastAPI</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* 3. Databases */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Firebase</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MongoDB</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MySQL</span>
                </div>
              </div>
            </div>

            {/* 4. Tools & Platforms */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Git</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">GitHub</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">VS Code</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Vite</span>
                </div>
              </div>
            </div>

            {/* 5. AI & Productivity Tools */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">AI & Productivity Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Kiro</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">GitHub Copilot</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Gemini</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">ChatGPT</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Claude</span>
                </div>
              </div>
            </div>

            {/* 6. Machine Learning & Core */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">ML & Core CS</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Keras</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">OpenCV</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">DSA</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Google Cloud</span>
                </div>
              </div>
            </div>

            {/* 7. Office & Suites */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Office & Suites</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">MS Word</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Excel</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">PowerPoint</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Google Docs</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Sheets</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Slides</span>
                </div>
              </div>
            </div>

            {/* 8. Languages Spoken */}
            <div className="bg-[#13151F] border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent-indigo/10 text-accent-indigo rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Languages Spoken</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">English</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Hindi</span>
                  <span className="px-3 py-1.5 bg-[#1A1D2D] border border-gray-800 text-gray-300 rounded-lg text-xs font-medium">Bengali</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default App;