import { useState } from 'react';

const services = [
  {
    id: 'intel',
    title: 'INTELLIGENCE GATHERING',
    icon: '◉',
    color: '#00ff41',
    description: 'Deep reconnaissance and OSINT collection across all vectors. Human intelligence, signals intelligence, and custom-built collection frameworks.',
    tags: ['OSINT', 'HUMINT', 'SIGINT', 'GEOINT'],
  },
  {
    id: 'tools',
    title: 'CUSTOM TOOLING',
    icon: '⬢',
    color: '#00f0ff',
    description: 'Bespoke software solutions built for specific operational requirements. From collection frameworks to analysis pipelines, we engineer what you need.',
    tags: ['EXPLOITS', 'AUTOMATION', 'FRAMEWORKS', 'PAYLOADS'],
  },
  {
    id: 'analysis',
    title: 'THREAT ANALYSIS',
    icon: '◈',
    color: '#b000ff',
    description: 'Comprehensive analysis of threat landscapes, vulnerability surfaces, and attack vectors. We map the terrain so you can move with confidence.',
    tags: ['VULN ASSESSMENT', 'RISK MAPPING', 'ATTACK SURFACES'],
  },
  {
    id: 'infra',
    title: 'INFRASTRUCTURE',
    icon: '⬡',
    color: '#ff0040',
    description: 'Air-gapped servers, darknet relays, compromised infrastructure management. We maintain the backbone that keeps operations running.',
    tags: ['C2 INFRA', 'RELAYS', 'PROXIES', 'EXFIL'],
  },
  {
    id: 'social',
    title: 'SOCIAL ENGINEERING',
    icon: '◎',
    color: '#ffaa00',
    description: 'Custom personas, phishing campaigns, pretext development, and human-layer exploitation. The weakest link is always human.',
    tags: ['PHISHING', 'PRETEXT', 'PERSONAS', 'VISHING'],
  },
  {
    id: 'crypto',
    title: 'CRYPTOGRAPHY',
    icon: '⬣',
    color: '#00ff41',
    description: 'End-to-end encrypted communications, custom cipher implementations, and secure key management for operational communications.',
    tags: ['E2E ENCRYPTION', 'KEY MGMT', 'STEgANOGRAPHY'],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#00ff41]"></div>
            <span className="text-xs tracking-widest text-[#00ff41]">CAPABILITIES</span>
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold text-white mb-4">
            SERVICE <span className="neon-text">MATRIX</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            Full-spectrum operational support. From initial reconnaissance to final exfiltration, we cover every phase of the engagement.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-6 border border-[#1a1a2e] bg-[#0d0d14] card-hover cursor-pointer group ${
                activeService === service.id ? 'border-opacity-100' : ''
              }`}
              style={{
                borderColor: activeService === service.id ? service.color : undefined,
                boxShadow: activeService === service.id ? `0 0 20px ${service.color}20` : undefined,
              }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Orbitron'] text-sm font-bold tracking-wider text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider px-2 py-1 border border-[#1a1a2e] text-gray-500 group-hover:border-opacity-50 transition-colors"
                    style={{
                      borderColor: activeService === service.id ? `${service.color}40` : undefined,
                      color: activeService === service.id ? service.color : undefined,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderTop: `2px solid ${service.color}`,
                  borderRight: `2px solid ${service.color}`,
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderBottom: `2px solid ${service.color}`,
                  borderLeft: `2px solid ${service.color}`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
