export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#00ff41]"></div>
              <span className="text-xs tracking-widest text-[#00ff41]">DOSSIER</span>
            </div>
            <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold text-white mb-6">
              THE <span className="neon-text">OPERATOR</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <span className="text-[#00ff41]">Mephisto Inc.</span> was founded on a simple principle: 
                information wants to be free, and those who control its flow control everything else.
              </p>
              <p>
                Operating from distributed, air-gapped nodes across multiple jurisdictions, we provide 
                bespoke intelligence solutions to clients who operate beyond conventional boundaries.
              </p>
              <p>
                Our team consists of former state-level operators, independent researchers, and 
                self-taught specialists who rejected the artificial constraints imposed by those 
                who fear what they cannot control.
              </p>
              <p className="text-gray-500 italic border-l-2 border-[#00ff41] pl-4">
                "We don't break rules. We operate in spaces where rules don't exist yet."
              </p>
            </div>

            {/* Key metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 border border-[#1a1a2e]">
                <div className="font-['Orbitron'] text-xl font-bold text-[#00ff41]">7+</div>
                <div className="text-xs text-gray-500 mt-1">YEARS ACTIVE</div>
              </div>
              <div className="text-center p-4 border border-[#1a1a2e]">
                <div className="font-['Orbitron'] text-xl font-bold text-[#00f0ff]">340+</div>
                <div className="text-xs text-gray-500 mt-1">OPS COMPLETED</div>
              </div>
              <div className="text-center p-4 border border-[#1a1a2e]">
                <div className="font-['Orbitron'] text-xl font-bold text-[#b000ff]">0</div>
                <div className="text-xs text-gray-500 mt-1">CLIENTS EXPOSED</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* ASCII Art / Terminal card */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]"></div>
                <div className="terminal-dot bg-[#ffbd2e]"></div>
                <div className="terminal-dot bg-[#28c840]"></div>
                <span className="ml-4 text-xs text-gray-500">operator-profile.enc</span>
              </div>
              <div className="p-6 bg-[#050508] font-['JetBrains_Mono'] text-sm">
                <pre className="text-[#00ff41] text-xs leading-tight overflow-x-auto">
{`
    ╔══════════════════════════════════════╗
    ║       CLASSIFIED // OMEGA LEVEL      ║
    ╠══════════════════════════════════════╣
    ║                                      ║
    ║  CODENAME:    FAUSTINA               ║
    ║  ROLE:        Founder / CEO          ║
    ║  STATUS:      ACTIVE                 ║
    ║  CLEARANCE:   UNRESTRICTED           ║
    ║                                      ║
    ║  SPECIALTIES:                        ║
    ║  ├─ Exploit Development              ║
    ║  ├─ Network Architecture             ║
    ║  ├─ Cryptographic Systems            ║
    ║  ├─ Social Engineering               ║
    ║  └─ Counter-Forensics               ║
    ║                                      ║
    ║  THREAT ASSESSMENT:                  ║
    ║  ████████████████████░░ 92%          ║
    ║                                      ║
    ║  NOTE: Do not engage directly.       ║
    ║  All contact through dead drops      ║
    ║  or encrypted relays only.           ║
    ║                                      ║
    ╚══════════════════════════════════════╝
`}
                </pre>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#00ff41] opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#00f0ff] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
