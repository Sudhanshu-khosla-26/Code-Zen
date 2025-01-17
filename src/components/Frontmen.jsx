import { SectionWrapper } from '../hoc';
import "../App.css";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';



const Frontmen = () => {
    return (
        <div className="bg-[url('/images/Frontmen.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col w-[100vw] gap-8 flex-wrap  items-center justify-center mt-[100px] ">
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)} className="flex flex-row justify-center items-center gap-16 ">
                    <CARD>
                        <div className="front absolute w-full h-full bg-[#FFFFFF]">
                            <img className="" src="/images/ATCARD.svg" />
                            {/* <img src="/images/SQUARE.svg" alt="" className="relative z-[2] top-[6vh] left-[1.5vw]" />
                            <img src={`/images/ATHALF.svg`} alt="" className="relative z-0 bottom-[27.7vh] left-[0.65vw]" />
                            <img src={`/images/AT.svg`} alt="" className="relative z-[5] bottom-[66.8vh] left-[0.6vw]" /> */}
                        </div>
                        <div className="back absolute w-full h-full bg-gradient-to-b from-[#A90D2C] to-[#FFFFFF]">
                            <div className="flex justify-between items-center flex-col gap-4 p-6 h-full">
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <img src="/images/ATNAME.svg" alt="" />
                                    <span className="font-normal mt-2 text-[20px] leading-[19.6px] font-[Poppins]">Lead Organiser</span>
                                </div>
                                <div className="links flex gap-4">
                                    <a href='https://www.instagram.com/its_atharv_tripathi' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/INSTA.svg" alt="" className="" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/atharv7740' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/LINKEDIN.svg" alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CARD>
                    <CARD>
                        <div className="front absolute w-full h-full bg-[#FFFFFF]">
                            <img className="" src="/images/ARCARD.svg" />
                            {/* <img src="/images/SQUARE.svg" alt="" className="relative z-[2] top-[6vh] left-[1.5vw]" />
                            <img src={`/images/ARHALF.svg`} alt="" className="relative z-0 bottom-[27.7vh] left-[0.65vw]" />
                            <img src={`/images/AR.svg`} alt="" className="relative z-[5] bottom-[65.3vh] left-[2.6vw]" /> */}
                        </div>
                        <div className="back absolute w-full h-full bg-gradient-to-b from-[#A90D2C] to-[#FFFFFF]">
                            <div className="flex justify-between items-center flex-col gap-4 p-6 h-full">
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <img src="/images/ART.svg" alt="" />
                                    <span className="font-normal mt-2 text-[20px] leading-[19.6px] font-[Poppins]">Lead Organiser</span>
                                </div>
                                <div className="links flex gap-4">
                                    <a href='https://www.instagram.com/arpitrajput.exe' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/INSTA.svg" alt="" className="" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/arpit-rajput-831393213' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/LINKEDIN.svg" alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CARD>
                </motion.div>
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)} className="flex flex-row justify-center mt-4 items-center gap-16">
                    <CARD>
                        <div className="front absolute w-full h-full bg-[#FFFFFF]">
                            <img className="" src="/images/SKCARD.svg" />
                            {/* <img src="/images/SQUARE.svg" alt="" className="relative z-[2] top-[6vh] left-[1.5vw]" />
                            <img src={`/images/SKHALF.svg`} alt="" className="relative z-0 bottom-[29vh] left-[0.65vw]" />
                            <img src={`/images/SK.svg`} alt="" className="relative z-[5] bottom-[70vh] left-[1.75Vw]" /> */}
                        </div>
                        <div className="back absolute w-full h-full bg-gradient-to-b from-[#A90D2C] to-[#FFFFFF]">
                            <div className="flex justify-between items-center flex-col gap-4 p-6 h-full">
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <img src="/images/SKNAME.svg" alt="" />
                                    <span className="font-normal mt-2 text-[20px] leading-[19.6px] font-[Poppins]">Co-Organiser</span>
                                </div>
                                <div className="links flex gap-4">
                                    <a href='https://www.instagram.com/imskumarj/' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/INSTA.svg" alt="" className="" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/imskumarj/' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/LINKEDIN.svg" alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CARD>
                    <CARD>
                        <div className="front absolute w-full h-full bg-[#FFFFFF]">
                            <img className="" src="/images/KACARD.svg" />
                            {/* <img src="/images/SQUARE.svg" alt="" className="relative z-[2] top-[6vh] left-[1.5vw]" />
                            <img src={`/images/KAHALF.svg`} alt="" className="relative z-0 bottom-[28.5vh] left-[0.65vw]" />
                            <img src={`/images/KA.svg`} alt="" className="relative z-[5] bottom-[66.8vh] left-[0.6vw]" /> */}
                        </div>
                        <div className="back absolute w-full h-full bg-gradient-to-b from-[#A90D2C] to-[#FFFFFF]">
                            <div className="flex justify-between items-center flex-col gap-4 p-6 h-full">
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <img src="/images/KANAME.svg" alt="" />
                                    <span className="font-normal mt-2 text-[20px] leading-[19.6px] font-[Poppins]">Co-Organiser</span>
                                </div>
                                <div className="links flex gap-4">
                                    <a href='https://www.instagram.com/kiyraaaaa_/' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/INSTA.svg" alt="" className="" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/kashvi15/' target='_blanket' className='cursor-pointer'>
                                        <img src="/images/LINKEDIN.svg" alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CARD>
                    <CARD>
                        <div className="front absolute w-full h-full bg-[#FFFFFF]">
                            <img className="" src="/images/ACARD.svg" />
                            {/* <img src="/images/SQUARE.svg" alt="" className="relative z-[2] top-[6vh] left-[1.5vw]" />
                            <img src={`/images/AHALF.svg`} alt="" className="relative z-0 bottom-[28.5vh] left-[0.65vw]" />
                            <img src={`/images/A.svg`} alt="" className="relative z-[5] bottom-[66.8vh] left-[0.6vw]" /> */}
                        </div>
                        <div className="back absolute w-full h-full bg-gradient-to-b from-[#A90D2C] to-[#FFFFFF]">
                            <div className="flex justify-between items-center flex-col gap-4 p-6 h-full">
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <img src="/images/ANAME.svg" alt="" />
                                    <span className="font-normal mt-2 text-[20px] leading-[19.6px] font-[Poppins]">Co-Organiser</span>
                                </div>
                                <div className="links flex gap-4">
                                    <a className='cursor-not-allowed'>
                                        <img src="/images/INSTA.svg" alt="" className="" />
                                    </a>
                                    <a className='cursor-not-allowed'>
                                        <img src="/images/LINKEDIN.svg" alt="" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CARD>
                </motion.div>
            </div>
        </div >
    )
}

const CARD = styled.div`
    width: 234px;
    height: 261px;
    perspective: 1000px;
    position: relative;

    .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .front {
        transform: rotateY(0deg);
    }

    .back {
        transform: rotateY(180deg);
    }

    &:hover .front {
        transform: rotateY(-180deg);
    }

    &:hover .back {
        transform: rotateY(0deg);
    }
`;



const WrappedFrontmen = SectionWrapper(Frontmen, "frontmen");
export default WrappedFrontmen
