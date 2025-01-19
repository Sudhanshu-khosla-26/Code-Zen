import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
        <>
            <div className="flex overflow-hidden items-center bg-[#110202] justify-center h-[120vh] gap-16 w-screen  m-0 px-0 py-0 ">
                <div className="left max-h-full w-[50vw] flex flex-col">
                    <img className="relative left-4 top-[16vh] scale-x-[2] scale-y-[2.3]" src="/images/footermainimg.svg" alt="" />
                    <span className="relative top-[21vh] left-[3vw] font-[Poppins] font-bold text-[18px] leading-[23.94px] text-white " >
                        All Rights Reserved. <br />
                        © CodeGeeks 2025
                    </span>
                </div>
                <div className="right w-[50vw] flex flex-col justify-start items-start text-white">
                    <img src="/images/CGO.svg" alt="" />
                    <img className="relative bottom-4 right-16" src="/images/GTB4CECO.svg" alt="" />
                    <img className="relative bottom-12" src="/images/FOOTERLOGO.svg" alt="" />
                    <ul className="flex flex-row justify-start items-start gap-6">
                        {['home', 'about', 'tracks', 'sponsors', 'prizes', 'front Men', 'FAQs'].map((link) => (
                            <li key={link} className={` `}>
                                <a
                                    href={`#${link}`}
                                    className={`text-[20px] text-[#F44878] leading-[30px] font-bold relative z-10`}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex w-[95%] flex-row justify-between items-center gap-6">
                        <span className="relative top-[8vh]  font-[Poppins] font-bold text-[18px] leading-[23.94px] text-white " >
                            Contact us at: <br />
                            business.codegeeks@gmail.com <br />
                            +91 96255 43638 <br />
                            +91 82794 37447
                        </span>
                        <span className="relative top-[8vh] flex items-center gap-2 font-[Poppins] font-bold text-[18px] leading-[23.94px] text-white " >
                            Follow Us On:
                            <a href="https://www.instagram.com/codegeeks_gtb4cec" target="_blanket" className="cursor-pointer">
                                <img src="/images/footerinsta.svg" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/codegeeks-gtb4cec/posts/?feedView=all" target="_blanket" className="cursor-pointer">
                                <img src="/images/footerlinkedin.svg" alt="" />
                            </a>
                            <a href="https://discord.com/invite/pE9AwXWwPW" target="_blanket" className="cursor-pointer">
                                <img src="/images/Discord.svg" alt="" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

const WrappedFooter = SectionWrapper(Footer, "");
export default WrappedFooter;

