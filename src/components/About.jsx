import DigitalClock from './Clock'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    const Track = [
        {
            num: "$700",
            text: "Prize Pool",
            logo: "circle"
        },
        {
            num: "1000+",
            text: "Regitrations",
            logo: "star"
        },
        {
            num: "100+",
            text: "Hackers",
            logo: "traingle"
        },
        {
            num: "30+",
            text: "Projects",
            logo: "umbrella"
        }
    ]

    return (
        <div className="bg-[url('/images/About.svg')]  h-[120vh]  w-screen  bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
            <div className="records flex items-center justify-center h-[161px] mt-[17vh] mx-auto w-[92vw]">
                {/* <img src="/images/Group.svg" alt="" /> */}
                <div className="flex justify-between items-center w-full space-x-4 px-8 pb-8 pt-2">
                    {Track.map((data, index) => (
                        <motion.div
                            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        >
                            <div key={index} className="flex flex-col items-center justify-center  p-4 rounded-lg shadow-md">
                                <img src={`/images/${data.num}.svg`} alt='' className="mb-2" />
                                <span className="text-xl font-semibold text-white font-[Poppins] text-[28px]">{data.text}</span>
                                <img src={`/images/${data.logo}.svg`} alt="" className="mt-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-[22px] aboutinfo flex flex-row w-[96vw] items-center mx-auto justify-center">

                <span className="w-[634px] font-[Poppins] font-medium text-[25px] leading-[31.45px] text-white  text-start mr-24">
                    <motion.div variants={textVariant()}>
                        <img className='mb-4' src="/images/Abouttitle.svg" alt="" />
                        <span className="font-[Poppins]">
                            Step into the world of innovation and strategy
                            <br /> with
                            <span className='font-[Poppins] font-extrabold mx-2'>
                                CodeZen
                            </span>
                            , a thrilling 36-hour hackathon <br /> inspired by the electrifying theme of Squid Game!
                            <br />
                            <pre className='mt-2 w-[634px] font-[Poppins] font-medium text-[25px] leading-[31.45px] text-white  text-start '>
                                Organized by <span className='font-extrabold'>
                                    {("Code</>Geeks")}
                                </span> , the premier coding <br />society of Guru Tegh Bahadur 4th Centenary <br />Engineering College, this unique hackathon will <br />take place on 28th February and 1st March 2025.
                            </pre>
                        </span>
                    </motion.div>
                </span>
                <div className="ml-30 mt-2">
                    <motion.div variants={textVariant()}>
                        <DigitalClock />
                    </motion.div>
                </div>
            </div>
        </div >
        // </div >
    )
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;