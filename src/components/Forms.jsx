import { useState } from "react";
import emailjs from "@emailjs/browser";

const Forms = () => {
    const [formData, setFormData] = useState({
        pocName: '',
        pocWhatsApp: '',
        pocPosition: '',
        communityName: '',
        communityReach: '',
        communityEmail: '',
        communitySocials: '',
        communityLocations: '',
        communityAssetsLink: ''
    });

    const [crewData, setCrewData] = useState({
        Name: '',
        WhatsApp: '',
        Email: '',
        collegeName: '',
        cityState: '',
        yearCourses: '',
        socials: '',
        photoUrl: ''
    });

    const handleCrewChange = (e) => {
        const { name, value } = e.target;
        setCrewData({
            ...crewData,
            [name]: value
        });
    };

    const handleCrewClear = () => {
        setCrewData({
            Name: '',
            WhatsApp: '',
            Email: '',
            collegeName: '',
            cityState: '',
            yearCourses: '',
            socials: '',
            photoUrl: ''
        });
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClear = () => {
        setFormData({
            pocName: '',
            pocWhatsApp: '',
            pocPosition: '',
            communityName: '',
            communityReach: '',
            communityEmail: '',
            communitySocials: '',
            communityLocations: '',
            communityAssetsLink: ''
        });
    };


    const handleSubmitCP = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID1,
                {
                    pocName: formData.pocName,
                    pocWhatsApp: formData.pocWhatsApp,
                    pocPosition: formData.pocPosition,
                    communityName: formData.communityName,
                    communityReach: formData.communityReach,
                    communityEmail: formData.communityEmail,
                    communitySocials: formData.communitySocials,
                    communityLocations: formData.communityLocations,
                    communityAssetsLink: formData.communityAssetsLink,
                    to_email: "business.codegeeks@gmail.com",
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    handleClear();
                },
                (error) => {
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    const handleSubmitCA = (e) => {
        e.preventDefault();
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID2,
                {
                    Name: crewData.Name,
                    WhatsApp: crewData.WhatsApp,
                    Email: crewData.Email,
                    collegeName: crewData.collegeName,
                    cityState: crewData.cityState,
                    communityReach: crewData.communityReach,
                    yearCourses: crewData.yearCourses,
                    socials: crewData.socials,
                    photoUrl: crewData.photoUrl,
                    to_email: "business.codegeeks@gmail.com",
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    handleCrewClear();
                },
                (error) => {
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className=" flex justify-center lg:flex-row items-center bg-gray-900 md:flex-col md:h-fit lg:w-screen lg:min-h-screen lg:h-[176vh]">
            <div className="CP relative bg-[rgb(17,2,2)]  flex flex-col justify-start items-center mx-6 lg:p-0 z-10 md:h-fit md:pb-20 md:w-screen lg:h-[160vh] lg:w-[50vw]">
                <img className="scale-x-[0.7] scale-y-[0.5] absolute bottom-[0] lg:top-[7.4vh] md:top-[22vh]" src="/images/CPDBG.svg" alt="" />
                <div className="header flex justify-center items-center flex-col mt-6 z-10">
                    <img src="/images/CPT.svg" alt="" className="scale-75" />
                    <span className="text-black font-[Genos]  font-semibold bg-[#F44788] text-center lg:px-4 lg:py-1 md:px-5 md:py-2 md:text-3xl lg:text-sm ">
                        36-Hour Hackathon | 28th February and 1st March 2025
                    </span>
                </div>
                <div className="bg-white w-full h-4 z-10 md:my-14 lg:my-6 "><br /> </div>
                <div className="flex justify-center items-center flex-col z-10">
                    <img className='scale-75 ' src="/images/CPMT.svg" alt="" />
                    <span className='text-white font-[Genos] text-[15px] font-semibold px-4 lg:mt-2 md:text-3xl lg:text-lg md:mt-4'>
                        Partners in Code ; Together , We Conquer!
                    </span>
                </div>
                <div className="flex mx-auto flex-row justify-between items-start gap-8 lg:w-[85%] z-10 md:mt-20 md:w-[90%] lg:mt-10 ">
                    <form onSubmit={handleSubmitCP} className="w-full text-black flex flex-col  lg:space-y-4 z-10 md:space-y-10">
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">PoC Name:</label>
                            <input type="text" name="pocName" value={formData.pocName} onChange={handleChange} className=" input lg:h-6 md:h-12 lg:p-0 lg:text-xl  lg:m-0  md:mt-3 md:text-4xl md:p-2  " />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">PoC WhatsApp No:</label>
                            <input type="text" name="pocWhatsApp" value={formData.pocWhatsApp} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">PoC Position in Community:</label>
                            <input type="text" name="pocPosition" value={formData.pocPosition} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Community Name:</label>
                            <input type="text" name="communityName" value={formData.communityName} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Community Reach (aggregate):</label>
                            <input type="text" name="communityReach" value={formData.communityReach} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Community Email:</label>
                            <input type="email" name="communityEmail" value={formData.communityEmail} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Community’s Socials:</label>
                            <input type="text" name="communitySocials" value={formData.communitySocials} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Locations Your Community is Active in:</label>
                            <input type="text" name="communityLocations" value={formData.communityLocations} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Community Brand Assets Link:</label>
                            <input type="text" name="communityAssetsLink" value={formData.communityAssetsLink} onChange={handleChange} className=" input lg:h-6 md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex space-x-4 md:space-x-8">
                            <button type="button" onClick={handleClear} className="btn-clear lg:mt-4 bg-white text-black rounded-md lg:py-1 lg:px-4 font-bold font-[Poppins]  md:px-10 md:py-4 md:text-3xl lg:text-lg">Clear</button>
                            <button type="submit" className="btn-submit bg-[#F44878] lg:mt-4 text-white rounded-md lg:px-4 lg:py-1 font-bold font-[Poppins] md:px-10 md:py-4 md:text-3xl lg:text-lg">Submit</button>
                        </div>
                    </form>
                    <img className="lg:h-[70vh] mt-4 md:h-[50vh] " src="/images/CPSIMG.svg" alt="" />
                </div>
            </div>
            <div className="CA relative bg-[rgb(17,2,2)] lg:h-[160vh] lg:w-[50vw] flex flex-col justify-start items-center mx-6 p-0 z-10  md:h-fit md:pb-20 md:w-screen ">
                <img className="scale-x-[1.29] scale-y-[1] max-h-[160vh] absolute top-0 bottom-0 right-0 left-[5.4vw]" src="/images/CADBG.svg" alt="" />
                <div className="header flex justify-center items-center flex-col mt-6 z-10">
                    <img src="/images/CPT.svg" alt="" className="scale-75" />
                    <span className="ext-black font-[Genos]  font-semibold bg-[#F44788] text-center lg:px-4 lg:py-1 md:px-5 md:py-2 md:text-3xl lg:text-sm ">
                        36-Hour Hackathon | 28th February and 1st March 2025
                    </span>
                </div>
                <div className="bg-white w-full h-4 lg:my-6 z-10 md:my-10"><br /></div>
                <div className="flex justify-center items-center flex-col z-10">
                    <img className='scale-75' src="/images/CAMT.svg" alt="" />
                    <span className='text-white font-[Genos] text-[15px] font-semibold lg:px-4 lg:mt-2 md:text-3xl lg:text-lg md:mt-4'>
                        Crew Members Recruitment
                    </span>
                </div>
                <div className="flex mx-auto lg:mt-10 flex-row justify-between items-start gap-8 w-[85%] z-10  md:mt-20">
                    <form onSubmit={handleSubmitCA} className="w-full text-black flex flex-col  lg:space-y-4 z-10 md:space-y-10">
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Name:</label>
                            <input type="text" name="Name" value={crewData.Name} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">WhatsApp No:</label>
                            <input type="text" name="WhatsApp" value={crewData.WhatsApp} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Email ID:</label>
                            <input type="text" name="Email" value={crewData.Email} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">College or University Name:</label>
                            <input type="text" name="collegeName" value={crewData.collegeName} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">City and State:</label>
                            <input type="text" name="cityState" value={crewData.cityState} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Year and Courses:</label>
                            <input type="text" name="yearCourses" value={crewData.yearCourses} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Your Socials:</label>
                            <input type="text" name="socials" value={crewData.socials} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins] md:text-3xl lg:text-lg">Your Photo URL:</label>
                            <input type="text" name="photoUrl" value={crewData.photoUrl} onChange={handleCrewChange} className=" input lg:h-6 text-black md:h-12 md:text-4xl lg:p-0 lg:text-xl   md:p-2 lg:m-0   md:mt-3" />
                        </div>
                        <div className="flex lg:space-x-4 md:space-x-8 ">
                            <button type="button" onClick={handleCrewClear} className="btn-clear lg:mt-4 bg-white text-black rounded-md lg:py-1 lg:px-4 font-bold font-[Poppins] md:px-10 md:py-4 md:text-3xl lg:text-lg">Clear</button>
                            <button type="submit" className="btn-submit bg-[#F44878] lg:mt-4 text-white rounded-md lg:py-1 lg;px-4 font-bold font-[Poppins] md:px-10 md:py-4 md:text-3xl lg:text-lg">Submit</button>
                        </div>
                    </form>
                    <img className="lg:h-[70vh] mt-4 md:h-[45vh]" src="/images/CASIMG.svg" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Forms
