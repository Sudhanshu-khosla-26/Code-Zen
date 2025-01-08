import { useState } from 'react'

const Card = ({ title, image, content }) => {
    return (
        <div className="flex flex-row border-black border-8 items-center bg-gradient-to-r from-[#881029] to-[#04706C] w-[913px] rounded-[48px] h-[350px]">
            <img className="w-[348px] h-[347px]" src={image} alt="" />
            <p className="flex items-start justify-start flex-col text-lg font-bold break-words mt-2 w-[520px] text-[24px]">
                <img className="relative right-[56px] bottom-4 w-[527px] h-[53px]" src={title} alt="" />
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
            content: "Think beyond boundaries! This track lets your imagination soar as you tackle challenges across diverse domains. Bring your boldest ideas to life and redefine innovation without limits."
        },
        {

            title: "/images/Internetofthings(iot).svg",
            image: "/images/Internetofthings(iot)img.svg",
            content: "Reimagine connectivity! Design IoT solutions that seamlessly link devices, optimize smart systems, and improve lives. From smart homes to industrial IoT, the possibilities are endless."
        },
        {

            title: "/images/CyberSecurity.svg",
            image: "/images/CyberSecurityimg.svg",
            content: "Step up to protect the digital realm! Build innovative solutions to tackle cyber threats, secure sensitive data, and create safer online environments. From encryption to threat detection, this is your chance to fortify the future."
        },
        {

            title: "/images/artificialintelligence.svg",
            image: "/images/artificialintelligenceimg.svg",
            content: "Every move counts! Develop AI-driven solutions that think ahead, adapt on the fly, and make winning decisions. Whether it’s smart assistants or predictive tools, showcase your mastery over intelligent tech."
        },
        {

            title: "/images/Sustainability.svg",
            image: "/images/Sustainabilityimg.svg",
            content: "Winning is great, but saving the planet is better. Innovate with green tech, eco-friendly solutions, or sustainability-focused projects that create a lasting impact."
        },
        {

            title: "/images/FINTECH.svg",
            image: "/images/FINTECHimg.svg",
            content: "Transform the way we manage and interact with money! This track invites you to design cutting-edge solutions in areas like digital payments, blockchain, personal finance, and AI-powered banking. Redefine finance to be smarter, safer, and more accessible for everyone."
        },
        {

            title: "/images/blockchainweb3.svg",
            image: "/images/blockchainweb3img.svg",
            content: "In a high-stakes game, trust is everything. Innovate with blockchain to create secure platforms, tamper-proof systems, or even decentralized networks that ensure fair play."
        },
    ]

    return (
        <>
            <div className=" bg-[url('/images/trackbg.svg')] h-[120vh]  w-screen  bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
                <div className="flex items-center mt-[20vh] justify-center title">
                    <img className="" src="/images/image20.svg" alt="" />
                </div>

                <div className="flex flex-row justify-center items-center gap-10 mt-20 overflow-x-auto mb-16">
                    <button onClick={handlePrev} className="opacity-50">Prev</button>
                    {Data.map((item, index) => (
                        <div
                            key={index}
                            className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        >
                            <Card title={item.title} image={item.image} content={item.content} />
                        </div>
                    ))}
                    <button onClick={handleNext} className="opacity-50">Next</button>
                </div>
            </div>
        </>
    )
}

export default Track;
