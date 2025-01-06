import './App.css'
import About from './components/About'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden relative">
        <div className="relative">
          <HomePage />
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        {/* <div className="bg-black h-4">

        </div> */}
        <div className="relative">
          <About />
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}

export default App;
