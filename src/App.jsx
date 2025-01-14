import './App.css'
import { BrowserRouter } from "react-router-dom"
import About from './components/About'
import Frontmen from './components/Frontmen';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Prizes from './components/Priczes';
import Sponsors from './components/Sponsors';
import Track from './components/Track'
import Faqs from './components/Faqs'
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import SvgAnimation from './components/SquidAnim';
import Audio from './components/Audio';
import { useState, useEffect } from 'react';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 16000); // Adjust the timeout duration to match the length of your animation

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      {
        !animationCompleted &&
        <SvgAnimation />
      }
      {animationCompleted && <Navbar />}
      <Audio className={`${animationCompleted === false ? "hidden" : ""}`} />
      <div className={`${animationCompleted === false ? "hidden" : ""} overflow-x-hidden overflow-y-hidden  relative transition-opacity duration-1000 ease-in-out`}>
        <div className="relative">
          <HomePage />
          <div className="absolute  bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <About />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Track />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Sponsors />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Prizes />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Frontmen />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Faqs />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#110202] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>

      <Analytics />
    </BrowserRouter>
  );
}

export default App;
