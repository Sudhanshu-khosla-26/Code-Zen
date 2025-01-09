import { SectionWrapper } from '../hoc';

const Prizes = () => {
    return (
        <div className="bg-[url('/images/Prizes.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[160px] ">

            </div>
        </div >
    )
}

const WrappedPrizes = SectionWrapper(Prizes, "prizes")
export default WrappedPrizes