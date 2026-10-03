import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'INFORMATION IS THE ULTIMATE CURRENCY.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00ff4108] via-transparent to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff41] rounded-full opacity-[0.02] blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff] rounded-full opacity-[0.02] blur-[100px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#1a1a2e] rounded-full mb-8 bg-[#0d0d14]/50">
          <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
          <span className="text-xs tracking-widest text-gray-400 font-['JetBrains_Mono']">
            SYSTEM ONLINE // NODES ACTIVE: 2,847
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="glitch-text text-white" data-text="MEPHISTO">MEPHISTO</span>
          <br />
          <span className="neon-text">INC.</span>
        </h1>

        {/* Typed subtitle */}
        <div className="h-8 mb-8">
          <p className="text-lg md:text-xl text-gray-400 font-['JetBrains_Mono']">
            <span className="text-[#00ff41]">{'>'}</span> {displayText}
            <span className="animate-pulse text-[#00ff41]">█</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Boutique information brokerage operating in the unregulated corners of the global underground. 
          Custom tooling. Actionable intelligence. Zero trace footprint.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="group px-8 py-4 bg-[#00ff41] text-black font-bold tracking-wider text-sm hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <span>ACCESS SERVICES</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#terminal"
            className="px-8 py-4 border border-[#1a1a2e] text-gray-400 font-bold tracking-wider text-sm hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300"
          >
            LIVE TERMINAL
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-600 tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
