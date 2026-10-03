import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'INTEL', href: '#terminal' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1a1a2e]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-300">
            <span className="text-[#00ff41] font-bold text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300">M</span>
          </div>
          <span className="font-['Orbitron'] text-lg font-bold tracking-wider text-white">
            MEPHISTO<span className="text-[#00ff41]">INC</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest text-gray-400 hover:text-[#00ff41] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff41] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="px-4 py-2 border border-[#00ff41] text-[#00ff41] text-sm tracking-wider hover:bg-[#00ff41] hover:text-black transition-all duration-300">
            ENCRYPTED CHANNEL
          </button>
        </div>

        <button
          className="md:hidden text-[#00ff41]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 border-t border-[#1a1a2e] px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm tracking-widest text-gray-400 hover:text-[#00ff41] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {'>'} {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
