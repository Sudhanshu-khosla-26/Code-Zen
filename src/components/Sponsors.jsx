import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const Sponsors = () => {
    return (
        <div className="bg-[url('/images/Sponsors.svg')]  h-[130vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[100px] ">
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>
                    <img className="" src="/images/oursponsor.svg " alt="" />
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>

                    <img className="mt-[38px]" src="/images/devfolio.svg" alt="" />
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>

                    <img className="mt-4" src="/images/aptos.svg" alt="" />
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>

                    <img className="mt-4" src="/images/unstop.svg" alt="" />
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>

                    <img className="mt-4" src="/images/resskill.svg" alt="" />
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}>

                    <img className="mt-4" src="/images/xgen.svg" alt="" />
                </motion.div>
            </div>
        </div >
    )
}

const WrappedSponsors = SectionWrapper(Sponsors, "sponsors")
export default WrappedSponsors;
