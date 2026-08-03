import React from 'react';

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
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
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
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          
          {/* Left Side: Text & Actions */}
          <div className="flex-1 space-y-6 z-10">
            {/* Dark Pill */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-xs font-semibold text-accent-indigo tracking-wide">
              Full Stack & AI Developer
            </div>
            
            {/* Same-line Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-white">Alex </span>
              <span className="text-accent-indigo">Hembrom</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Software Engineer
            </h2>
            
            <p className="text-base text-gray-400 max-w-lg leading-relaxed">
              I build modern, responsive, and scalable software systems, specializing in frontend engineering and intelligent AI integrations to bring complex ideas to life on the web.
            </p>
            
            {/* Primary Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-accent-indigo text-white font-medium hover:bg-indigo-600 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2">
                View My Work &rarr;
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 text-white font-medium transition-colors flex items-center gap-2">
                Contact Me
              </a>
            </div>

            {/* Social Icons Row */}
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
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-indigo/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Main Image Container */}
            <div className="relative w-72 h-96 rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-purple/5 border border-accent-indigo/30 p-1">
              <div className="w-full h-full rounded-xl bg-background-lighter overflow-hidden flex items-end justify-center pb-0">
                 {/* PLACEHOLDER FOR YOUR PHOTO */}
                 <div className="text-gray-600 font-medium text-sm">Your Photo Here</div>
              </div>

              {/* Floating Badge 1 (Fresher Adapted) */}
              <div className="absolute -left-8 bottom-12 bg-background-card border border-gray-700/50 rounded-xl p-3 shadow-2xl backdrop-blur-md flex flex-col items-center">
                <span className="text-xl font-bold text-white">B.Tech</span>
                <span className="text-xs text-gray-400">CSE Graduate</span>
              </div>

              {/* Floating Badge 2 (< /> icon) */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-accent-indigo rounded-xl p-3 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION (Moved down to match design) */}
        <section id="about" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
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

            {/* Right: Contact Detail Card */}
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

      </main>
    </div>
  );
}

export default App;