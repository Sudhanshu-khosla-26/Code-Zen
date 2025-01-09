import DigitalClock from './Clock'
import { SectionWrapper } from '../hoc';

const About = () => {

    return (
        <div className="bg-[url('/images/About.svg')]  h-[120vh]  w-screen  bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
            <div className="records flex items-center justify-center h-[161px] mt-[17vh] mx-auto w-[92vw]">
                <img src="/images/Group.svg" alt="" />
            </div>
            <div className="mt-[62px] aboutinfo flex flex-row w-[96vw] items-center mx-auto justify-center">
                <span className="w-[634px] font-[Poppins] font-medium text-[25px] leading-[31.45px] text-white  text-start mr-24">
                    <img className='mb-4' src="/images/Abouttitle.svg" alt="" />
                    <span className="">
                        Step into the world of innovation and strategy
                        <br /> with
                        <span className='font-extrabold mx-2'>
                            CodeZen
                        </span>
                        , a thrilling 36-hour hackathon <br /> inspired by the electrifying theme of Squid Game!
                        <br />
                        <br />
                        Organized by
                        <span className='font-extrabold mx-2'>
                            {("Code</>Geeks")}
                        </span>
                        , the premier coding <br /> society of Guru Tegh Bahadur 4th Centenary <br /> Engineering College, this unique hackathon will <br /> take place on 28th February and 1st March 2025.
                    </span>
                </span>

                <div className="ml-30 mt-12">
                    <DigitalClock />
                </div>
            </div>
        </div >
    )
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;