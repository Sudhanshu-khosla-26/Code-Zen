import { Tilt } from 'react-tilt';
import '../App.css'
import { SectionWrapper } from '../hoc';

const HomePage = () => {
    const defaultOptions = {
        reverse: true, // reverse the tilt direction
        max: 35, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    return (
        <>
            <div className=" bg-[url('/images/Website.svg')] h-[120vh]  w-screen  bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
                <div className="flex justify-center items-center flex-col mr-6 mt-12">
                    <div className=" logos flex justify-center items-center flex-col">
                        <img className='relative' src="/images/logo.svg" alt="" />
                    </div>
                    <div className="title m-0">
                        <img className='relative bottom-8' src="/images/title.svg" alt="" />
                    </div>
                    <span className='relative bottom-10 text-white max-w-[786px] text-center flex items-center justify-center flex-col'>
                        <span className=' font-bold text-[20px]'>

                            Delhi’s Techiest Hackathon Ever!
                        </span>
                        {/* <br /> */}
                        A hackathon that brings modern vibe to the field of tech. Experience the
                        <br />
                        exciting tracks, all around competitions and a night full of enjoyment and coding!
                    </span>
                    <Tilt Options={defaultOptions} className="">
                        <button className="pointer register relative bottom-4 flex items-center justify-center bg-gradient-to-t text-[#ffffff] font-medium text-[21px] from-[#DE264D] to-[#EF508B] w-[170px] h-[50px] rounded-[47px]">
                            Register Now
                        </button>
                    </Tilt>
                </div>
            </div>
        </>
    );
}

const WrappedHomePage = SectionWrapper(HomePage, "home");
export default WrappedHomePage;