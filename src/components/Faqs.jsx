import { useState } from 'react';
import { SectionWrapper } from '../hoc';

const Faqs = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const faqs = [
        {
            question: "What is the team size allowed?",
            answer: "The maximum team size is 4 and the minimum is 2. Solo participation is also allowed for the CodeZen."
        },
        {
            question: "Do I need to have any specific qualifications to be a participant for the hackathon?",
            answer: "No specific qualifications are required. Anyone with a passion for coding can participate."
        },
        {
            question: "Can I start working on my hack before the event?",
            answer: "No, all development work must be done during the designated hackathon period to ensure fair competition."
        },
        {
            question: "Is there any registration fees for participation?",
            answer: "Registration is completely free for all participants."
        },
        {
            question: "What is the shortlisting procedure?",
            answer: "Teams will be shortlisted based on their project proposal and technical feasibility."
        },
        {
            question: "What is the venue of the CodeZen?",
            answer: "The venue details will be shared with registered participants via email."
        },
        {
            question: "When will I get the confirmation regarding my participation or Shortlisting for Hackathon?",
            answer: "Confirmation emails will be sent within 48 hours of registration."
        },
        {
            question: "What is the last date to register?",
            answer: "Please check our website for the latest registration deadline."
        }
    ];

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className="bg-[url('/images/FAQ.svg')] h-[130vh] w-screen bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
            <div className="flex flex-col items-center justify-center mt-[90px]">
                <img src="/images/FAQTITLE.svg" alt="" />

                <div className="flex flex-row flex-wrap justify-center items-center mt-4 gap-x-20 h-fit w-full px-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="relative max-w-fit max-h-fit rounded-lg shadow-md mt-10 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="relative rounded-tr-[16px] rounded-tl-[16px] right-[1.2vw] w-[572px] h-[82px] bg-white z-10 flex items-center justify-start">
                                <img src="/images/doll.svg" alt="Question Mark" className="relative bottom-[2vh]" />
                                <h3 className="text-lg font-semibold ml-4 mt-[2vh]">{faq.question}</h3>
                            </div>
                            <div
                                className={`relative z-0 rounded-br-[16px] rounded-bl-[16px] bg-white right-[1.2vw] bg-opacity-60 flex justify-end items-end w-[572px] transition-all duration-300 ease-in-out ${visibleIndex === index ? 'max-h-[128px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <span className="rounded-br-[16px] pt-1 rounded-bl-[16px] pl-4 z-[2] w-[572px] bg-[#D9D9D9] bg-opacity-60 ">
                                    {faq.answer}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WrappedFAQs = SectionWrapper(Faqs, "FAQs");
export default WrappedFAQs;
