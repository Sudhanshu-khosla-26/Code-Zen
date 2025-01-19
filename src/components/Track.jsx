import { useEffect, useState, useRef } from 'react'
import { SectionWrapper } from '../hoc';


const Card = ({ title, image, content, size, Tsize }) => {
    return (
        <div className="flex flex-row border-black border-8 items-center bg-gradient-to-r from-[#881029] to-[#04706C] w-[60vw] rounded-[48px] h-[45vh]">
            <img className={`${size}`} src={image} alt="" />
            <p className="flex items-start justify-start flex-col text-lg font-bold break-words mt-2 w-[520px] text-[24px]">
                <img className={`relative right-[56px] bottom-4 ${Tsize}`} src={title} alt="" />
                <span className="w-[520px] break-words text-start text-white">{content}</span>
            </p>
        </div>
    )
}

const Track = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
    };


    const Data = [
        {
            title: "/images/openInnovation.svg",
            image: "/images/openInnovationimg.svg",
            size: "w-[237px] h-[304px]",
            Tsize: "w-[527px] h-[53px]",
            content: "Think beyond boundaries! This track lets your imagination soar as you tackle challenges across diverse domains. Bring your boldest ideas to life and redefine innovation without limits."
        },
        {

            title: "/images/Internetofthings(iot).svg",
            image: "/images/Internetofthings(iot)img.svg",
            size: "w-[250px] h-[310px]",
            Tsize: "w-[450px] h-[106px]",
            content: "Reimagine connectivity! Design IoT solutions that seamlessly link devices, optimize smart systems, and improve lives. From smart homes to industrial IoT, the possibilities are endless."
        },
        {

            title: "/images/CyberSecurity.svg",
            image: "/images/CyberSecurityimg.svg",
            size: "w-[260px] h-[240px]",
            Tsize: "w-[450px] h-[106px] pr-8 bottom-1",
            content: "Step up to protect the digital realm! Build innovative solutions to tackle cyber threats, secure sensitive data, and create safer online environments. From encryption to threat detection, this is your chance to fortify the future."
        },
        {

            title: "/images/artificialintelligence.svg",
            image: "/images/artificialintelligenceimg.svg",
            size: "w-[275px] h-[260px]",
            Tsize: "w-[472px] h-[106px] bottom-2 pl-14",
            content: "Every move counts! Develop AI-driven solutions that think ahead, adapt on the fly, and make winning decisions. Whether it’s smart assistants or predictive tools, showcase your mastery over intelligent tech."
        },
        {

            title: "/images/Sustainability.svg",
            image: "/images/Sustainabilityimg.svg",
            size: "w-[260px] h-[290px]",
            Tsize: "w-[472px] h-[53px]",
            content: "Winning is great, but saving the planet is better. Innovate with green tech, eco-friendly solutions, or sustainability-focused projects that create a lasting impact."
        },
        {

            title: "/images/FINTECH.svg",
            image: "/images/FINTECHimg.svg",
            size: "w-[240px] h-[240px] px-4",
            Tsize: "w-[450px] h-[53px] ml-4",
            content: "Transform the way we manage and interact with money! This track invites you to design cutting-edge solutions in areas like digital payments, blockchain, personal finance, and AI-powered banking. Redefine finance to be smarter, safer, and more accessible for everyone."
        },
        {

            title: "/images/blockchainweb3.svg",
            image: "/images/blockchainweb3img.svg",
            size: "w-[270px] h-[290px]",
            Tsize: "w-[450px] h-[106px]",
            content: "In a high-stakes game, trust is everything. Innovate with blockchain to create secure platforms, tamper-proof systems, or even decentralized networks that ensure fair play."
        },
    ]

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
        }, 1400);

        return () => clearInterval(intervalRef.current);
    }, []);

    const intervalRef = useRef(null);

    const handleMouseEnter = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
        }, 2000);
    };




    return (
        <>
            <div className="bg-[url('/images/trackbg.svg')] h-[120vh] w-screen bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
                <div className="flex items-center mt-[13vh] justify-center title">
                    <img className="relative z-10 left-[30vw]" src="/images/image20.svg" alt="" />
                    <img className='relative z-0 right-[28vw]' src="/images/tracktitleblur.svg" alt="" />
                </div>

                <div className="flex h-[52vh]  flex-row justify-center items-center gap-10 mt-2 overflow-x-hidden  mb-16">
                    <button onClick={handlePrev} className="opacity-50">
                        <div
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            className="transition-transform duration-500 transform hover:scale-105"
                            style={{ display: 'block' }}
                        >
                            <Card title={Data[(currentIndex - 1 + Data.length) % Data.length].title} image={Data[(currentIndex - 1 + Data.length) % Data.length].image} Tsize={Data[(currentIndex - 1 + Data.length) % Data.length].Tsize} content={Data[(currentIndex - 1 + Data.length) % Data.length].content} size={Data[(currentIndex - 1 + Data.length) % Data.length].size} />
                        </div>
                    </button>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        className="transition-transform duration-500 transform hover:scale-105"
                        style={{ display: 'block' }}
                    >
                        <Card title={Data[currentIndex].title} image={Data[currentIndex].image} Tsize={Data[currentIndex].Tsize} content={Data[currentIndex].content} size={Data[currentIndex].size} />
                    </div>
                    <button onClick={handleNext} className="opacity-50">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            className="transition-transform duration-500 transform hover:scale-105"
                            style={{ display: 'block' }}
                        >
                            <Card title={Data[(currentIndex + 1) % Data.length].title} image={Data[(currentIndex + 1) % Data.length].image} Tsize={Data[(currentIndex + 1) % Data.length].Tsize} content={Data[(currentIndex + 1) % Data.length].content} size={Data[(currentIndex + 1) % Data.length].size} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

const WrappedTrack = SectionWrapper(Track, "tracks")
export default WrappedTrack
