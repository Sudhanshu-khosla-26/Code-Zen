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
import { useState, useEffect } from 'react';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  let audio = new Audio("squidaudio.mp3");
  const playAudio = () => {
    audio.play();
  }

  useEffect(() => {
    playAudio();
  }, [playAudio]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 16000); // Adjust the timeout duration to match the length of your animation

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <SvgAnimation className={`${animationCompleted === true ? "" : "hidden"}`} />
      {animationCompleted && <Navbar />}

      <div className={`${animationCompleted === false ? "hidden" : ""} overflow-x-hidden relative transition-opacity duration-1000 ease-in-out`}>
        <div className="relative">
          <HomePage />
          <div className="absolute  bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <About loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Track loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Sponsors loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Prizes loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Frontmen loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Faqs loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#110202] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="relative">
          <Footer loading="lazy" />
        </div>
      </div>

      <Analytics />
    </BrowserRouter>
  );
}

export default App;
