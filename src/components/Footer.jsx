import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-[url('/images/Footer.svg')] h-screen  w-screen  bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
                <div className="left w-[50vw] flex-col">
                    <img className="" src="/images/footermainimg.svg" alt="" />
                </div>
                <div className="right w-[50vw] text-white">
                    oraganized by - side
                </div>
            </div>
        </>
    )
}

const WrappedFooter = SectionWrapper(Footer, "");
export default WrappedFooter;

