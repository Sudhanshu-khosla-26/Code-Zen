import "./App.css";
// import { BrowserRouter } from "react-router-dom";
/* import About from './components/About'
import Frontmen from './components/Frontmen';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Prizes from './components/Priczes';
import Sponsors from './components/Sponsors';
import Track from './components/Track'
import Faqs from './components/Faqs' */
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
// import SvgAnimation from "./components/SquidAnim";
import Audio from "./components/Audio";
import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./components/Loader";
const About = lazy(() => import("./components/About"));
const Frontmen = lazy(() => import("./components/Frontmen"));
const HomePage = lazy(() => import("./components/HomePage"));
const Navbar = lazy(() => import("./components/Navbar"));
const Prizes = lazy(() => import("./components/Priczes"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Track = lazy(() => import("./components/Track"));
const Faqs = lazy(() => import("./components/Faqs"));

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [activePAGE, SETactivePAGE] = useState("");



  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 1500); // Adjust the timeout duration to match the length of your animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/*  {
        !animationCompleted &&
        <SvgAnimation />
      } */}
      {animationCompleted && <Navbar activePAGE={activePAGE} SETactivePAGE={SETactivePAGE} />}
      <Audio className={`${animationCompleted === false ? "hidden" : ""}`} />
      <div
        className={`overflow-x-hidden overflow-y-hidden  relative transition-opacity duration-1000 ease-in-out`}
      >
        {!animationCompleted && (
          <div className="z-30 flex flex-col fixed gap-5 items-center justify-center bg-black h-screen w-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div>
              <Loader />
            </div>
            <div className="w-32 max-w-full">
              <div className="h-0.5 w-full bg-pink-100 overflow-hidden">
                <div className="progress w-full h-full bg-pink-500 left-right"></div>
              </div>
            </div>
          </div>
        )}
        {animationCompleted && (
          <Suspense
            fallback={
              <div className="z-40 flex flex-col fixed gap-5 items-center justify-center bg-black h-screen w-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                <div>
                  <Loader />
                </div>
                <div className="w-32 max-w-full">
                  <div className="h-0.5 w-full bg-pink-100 overflow-hidden">
                    <div className="progress w-full h-full bg-pink-500 left-right"></div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="relative landAnim" onMouseEnter={() => SETactivePAGE("home")}>
              <HomePage />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("about")}>
              <About />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("tracks")}>
              <Track />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("sponsors")}>
              <Sponsors />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("prizes")}>
              <Prizes />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("frontmen")}>
              <Frontmen />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="relative" onMouseEnter={() => SETactivePAGE("FAQs")}>
              <Faqs />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#110202] to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>
          </Suspense>
        )
        }
        <div className="relative">
          <Footer />
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
