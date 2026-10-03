export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[#1a1a2e] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center rotate-45">
                <span className="text-[#00ff41] font-bold text-sm -rotate-45">M</span>
              </div>
              <span className="font-['Orbitron'] text-lg font-bold tracking-wider text-white">
                MEPHISTO<span className="text-[#00ff41]">INC</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Boutique information brokerage. Custom tooling. Actionable intelligence. 
              Operating in the spaces between.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-['Orbitron'] text-xs tracking-widest text-gray-400 mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {['Services', 'Intel Feed', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-500 hover:text-[#00ff41] transition-colors">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Orbitron'] text-xs tracking-widest text-gray-400 mb-4">SECURE CHANNELS</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#00ff41]">◉</span>
                <span>PGP: 0xDEAD...BEEF</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#00f0ff]">◉</span>
                <span>XMPP: faustina@darknode.onion</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#b000ff]">◉</span>
                <span>Session: 05abc...def123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a2e] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600 tracking-wider">
            © 2026 MEPHISTO INC. ALL RIGHTS RESERVED. ALL WRONGS REVERSED.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-8 text-center">
          <pre className="text-[#00ff41] text-[10px] opacity-20 font-['JetBrains_Mono'] inline-block">
{`
 ██████╗ ███████╗██████╗ ███████╗███╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗
 ██╔══██╗██╔════╝██╔══██╗██╔════╝████╗  ██║╚══██╔══╝██║██╔═══██╗████╗  ██║
 ███████║█████╗  ██████╔╝█████╗  ██╔██╗ ██║   ██║   ██║██║   ██║██╔██╗ ██║
 ██╔══██║██╔══╝  ██╔══██╗██╔══╝  ██║╚██╗██║   ██║   ██║██║   ██║██║╚██╗██║
 ██║  ██║███████╗██████╔╝███████╗██║ ╚████║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
          </pre>
        </div>
      </div>
    </footer>
  );
}
