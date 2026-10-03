import { useState, useEffect, useRef } from 'react';

const terminalLines = [
  { type: 'system', text: '[SYSTEM] Mephisto Inc. Terminal v4.2.1 initialized' },
  { type: 'system', text: '[SYSTEM] Encryption: AES-256-GCM | Channel: TOR-relay-7' },
  { type: 'system', text: '[SYSTEM] Authentication: VERIFIED // Clearance: OMEGA' },
  { type: 'blank', text: '' },
  { type: 'command', text: '$ mephisto --status --verbose' },
  { type: 'output', text: '┌─────────────────────────────────────────────┐' },
  { type: 'output', text: '│  NETWORK STATUS: OPERATIONAL                │' },
  { type: 'output', text: '│  Active Nodes: 2,847                        │' },
  { type: 'output', text: '│  Data Streams: 142 active                   │' },
  { type: 'output', text: '│  Last Breach Test: 72h ago (PASSED)         │' },
  { type: 'output', text: '│  Threat Level: LOW                          │' },
  { type: 'output', text: '└─────────────────────────────────────────────┘' },
  { type: 'blank', text: '' },
  { type: 'command', text: '$ intel-query --target "phoenix-project" --depth 3' },
  { type: 'output', text: '[*] Querying distributed intelligence network...' },
  { type: 'output', text: '[*] Cross-referencing 847 data sources...' },
  { type: 'success', text: '[+] 23 relevant intelligence packages found' },
  { type: 'success', text: '[+] Confidence rating: 94.7%' },
  { type: 'output', text: '[*] Compiling report... encrypting for delivery...' },
  { type: 'success', text: '[+] Report delivered via secure channel' },
  { type: 'blank', text: '' },
  { type: 'command', text: '$ tool-deploy --type "collection" --target "internal"' },
  { type: 'output', text: '[*] Generating custom collection framework...' },
  { type: 'output', text: '[*] Obfuscation layer: polymorphic engine v3' },
  { type: 'output', text: '[*] Persistence mechanism: WMI event subscription' },
  { type: 'success', text: '[+] Deployment package ready (47.2 KB)' },
  { type: 'success', text: '[+] Evasion rate: 99.2% across 47 AV engines' },
  { type: 'blank', text: '' },
  { type: 'system', text: '[SYSTEM] Awaiting next directive...' },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, terminalLines[visibleLines].type === 'blank' ? 200 : 
         terminalLines[visibleLines].type === 'command' ? 800 : 150);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [visibleLines, isPlaying]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const startTerminal = () => {
    setVisibleLines(0);
    setIsPlaying(true);
  };

  const getLineColor = (type: string) => {
    switch (type) {
      case 'system': return 'text-[#00f0ff]';
      case 'command': return 'text-[#00ff41]';
      case 'output': return 'text-gray-400';
      case 'success': return 'text-[#00ff41]';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="terminal" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#00f0ff]"></div>
            <span className="text-xs tracking-widest text-[#00f0ff]">LIVE FEED</span>
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold text-white mb-4">
            OPERATIONS <span className="neon-text-cyan">TERMINAL</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            Real-time operational feed. Watch intelligence gathering, tool deployment, and network management in action.
          </p>
        </div>

        {/* Terminal window */}
        <div className="terminal-window neon-border">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]"></div>
            <div className="terminal-dot bg-[#ffbd2e]"></div>
            <div className="terminal-dot bg-[#28c840]"></div>
            <span className="ml-4 text-xs text-gray-500 font-['JetBrains_Mono']">
              mephisto@darknode:~$ — secure-session
            </span>
          </div>
          
          <div
            ref={terminalRef}
            className="p-6 min-h-[400px] max-h-[500px] overflow-y-auto bg-[#050508] font-['JetBrains_Mono'] text-sm leading-relaxed"
          >
            {visibleLines === 0 && !isPlaying && (
              <div className="flex flex-col items-center justify-center h-[350px] text-center">
                <div className="text-[#00ff41] text-4xl mb-4 animate-pulse">▶</div>
                <p className="text-gray-500 mb-4">Terminal session ready</p>
                <button
                  onClick={startTerminal}
                  className="px-6 py-2 border border-[#00ff41] text-[#00ff41] text-sm tracking-wider hover:bg-[#00ff41] hover:text-black transition-all duration-300"
                >
                  INITIALIZE SESSION
                </button>
              </div>
            )}

            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={`${getLineColor(line.type)} ${line.type === 'blank' ? 'h-4' : ''}`}>
                {line.text}
              </div>
            ))}

            {isPlaying && visibleLines > 0 && visibleLines < terminalLines.length && (
              <span className="inline-block w-2 h-4 bg-[#00ff41] animate-pulse ml-1"></span>
            )}

            {!isPlaying && visibleLines === terminalLines.length && visibleLines > 0 && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[#00ff41]">$</span>
                <span className="inline-block w-2 h-4 bg-[#00ff41] animate-pulse"></span>
              </div>
            )}
          </div>
        </div>

        {/* Replay button */}
        {!isPlaying && visibleLines === terminalLines.length && (
          <div className="text-center mt-6">
            <button
              onClick={startTerminal}
              className="px-6 py-2 border border-[#1a1a2e] text-gray-500 text-sm tracking-wider hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300"
            >
              ↻ REPLAY SESSION
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
