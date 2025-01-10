import { SectionWrapper } from '../hoc';
const Faqs = () => {
    return (
        <div className="bg-[url('/images/FAQ.svg')]  h-[120vh]  w-screen   bg-cover bg-center bg-no-repeat m-0 px-0 py-8 ">
            <div className="flex flex-col items-center justify-center mt-[100px] ">
                <img src="/images/FAQTITLE.svg" alt="" />
            </div>
        </div >
    )
}


const WrappedFAQs = SectionWrapper(Faqs, "FAQs")
export default WrappedFAQs;

