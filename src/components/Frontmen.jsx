import { SectionWrapper } from '../hoc';
const Frontmen = () => {
    return (
        <div className="bg-[url('/images/Frontmen.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[160px] ">

            </div>
        </div >
    )
}


const WrappedFrontmen = SectionWrapper(Frontmen, "frontmen");
export default WrappedFrontmen
