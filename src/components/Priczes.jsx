import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const Prizes = () => {
    return (
        <div className="bg-[url('/images/Prizes.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[70px] ">
                <div className="Winner flex flex-col items-center justify-center ">
                    <img src="/images/10000.svg" alt="" className="" />

                </div>
                <div className="relative bottom-[20vh] w-[100vw] runnerups flex flex-row justify-between items-center ">
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)} className="fristrunner flex flex-col items-center justify-center">
                        <img src="/images/7000.svg" alt="" className="" />

                    </motion.div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)} className="secondrunner flex flex-col items-center justify-center">
                        <img src="/images/5000.svg" alt="" className="" />
                    </motion.div>
                </div>
                <div className="newandgirlsteam relative bottom-[22vh] w-[80vw] flex flex-row justify-between items-center">
                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)} className="girls flex flex-col items-center justify-center">
                        <img src="/images/girls2000.svg" alt="" className="" />
                    </motion.div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)} className="beginners flex flex-col items-center justify-center">
                        <img src="/images/beginners2000.svg" alt="" className="" />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

const WrappedPrizes = SectionWrapper(Prizes, "prizes")
export default WrappedPrizes