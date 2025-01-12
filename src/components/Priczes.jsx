import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const Prizes = () => {
    return (
        <div className="bg-[url('/images/Prizes.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[100px] ">
                <div className="Winner flex flex-col items-center justify-center ">
                    <img src="/images/W.svg" alt="" className="relative z-[2]" />
                    <img src="/images/Ellipse.svg" alt="" className="relative z-[5] bottom-[16vh]" />
                    <img src="/images/₹20000.svg" alt="" className="relative z-[10] bottom-[34vh]" />
                </div>
                <div className="relative bottom-[42vh] w-[100vw] runnerups flex flex-row justify-between items-center ">
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)} className="fristrunner flex flex-col items-center justify-center">
                        <img src="/images/FirstRunnerUp.svg" alt="" className="relative z-[2]" />
                        <img src="/images/Ellipse1.svg" alt="" className="relative z-[5] bottom-[14vh]" />
                        <img src="/images/₹10000.svg" alt="" className="relative z-[10] bottom-[29vh]" />
                    </motion.div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)} className="secondrunner flex flex-col items-center justify-center">
                        <img src="/images/SecondRunnerUp.svg" alt="" className="relative z-[2]" />
                        <img src="/images/Ellipse2.svg" alt="" className="relative z-[5] bottom-[14vh]" />
                        <img src="/images/₹5000R.svg" alt="" className="relative z-[10] bottom-[29vh]" />
                    </motion.div>
                </div>
                <div className="newandgirlsteam relative bottom-[60vh] w-[80vw] flex flex-row justify-between items-center">
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)} className="girls flex flex-col items-center justify-center">
                        <img src="/images/Allgirlsteam.svg" alt="" className="relative z-[2]" />
                        <img src="/images/Ellipse3.svg" alt="" className="relative z-[5] bottom-[10vh]" />
                        <img src="/images/₹5000.svg" alt="" className="relative z-[10] bottom-[23.4vh]" />
                    </motion.div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)} className="beginners flex flex-col items-center justify-center">
                        <img src="/images/Allbeginnersteam.svg" alt="" className="relative z-[2]" />
                        <img src="/images/Ellipse5.svg" alt="" className="relative z-[5] bottom-[11vh]" />
                        <img src="/images/₹5000.svg" alt="" className="relative z-[10] bottom-[25vh]" />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

const WrappedPrizes = SectionWrapper(Prizes, "prizes")
export default WrappedPrizes