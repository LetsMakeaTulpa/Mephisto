import { useState, useEffect } from 'react';

export default function Stats() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '2,847', label: 'ACTIVE NODES', icon: '⬡' },
    { value: '99.97%', label: 'UPTIME', icon: '◈' },
    { value: '<0.3s', label: 'AVG RESPONSE', icon: '◇' },
    { value: '0', label: 'COMPROMISES', icon: '◆' },
  ];

  return (
    <section className={`relative py-16 border-y border-[#1a1a2e] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl mb-2 text-[#00ff41] opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <div className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
