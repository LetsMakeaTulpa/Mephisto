import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Terminal from './components/Terminal';
import Stats from './components/Stats';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0f] text-gray-200 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <MatrixRain />
      <div className="relative z-10 grid-overlay">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Terminal />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
