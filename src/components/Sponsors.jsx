import { SectionWrapper } from '../hoc';

const Sponsors = () => {
    return (
        <div className="bg-[url('/images/Sponsors.svg')]  h-[130vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[160px] ">
                <img className="" src="/images/oursponsor.svg " alt="" />
                <img className="mt-[38px]" src="/images/devfolio.svg" alt="" />
                <img className="mt-4" src="/images/aptos.svg" alt="" />
                <img className="mt-4" src="/images/unstop.svg" alt="" />
                <img className="mt-4" src="/images/resskill.svg" alt="" />
                <img className="mt-4" src="/images/xgen.svg" alt="" />
            </div>
        </div >
    )
}

const WrappedSponsors = SectionWrapper(Sponsors, "sponsors")
export default WrappedSponsors;
