import './App.css'
import About from './components/About'
import Frontmen from './components/Frontmen';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Prizes from './components/Priczes';
import Sponsors from './components/Sponsors';
import Track from './components/Track'
import Faqs from './components/Faqs'
function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden relative">
        <div className="relative">
          <HomePage />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        {/* <div className="bg-black h-4">

        </div> */}
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
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}

export default App;
