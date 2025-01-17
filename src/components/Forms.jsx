import { useState } from "react";

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

    const handleCrewSubmit = (e) => {
        e.preventDefault();
        console.log(crewData);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-screen min-h-screen h-[176vh] flex justify-center flex-row items-center bg-gray-900">
            <div className="CP relative bg-[rgb(17,2,2)] h-[160vh] w-[50vw] flex flex-col justify-start items-center mx-6 p-0 z-10">
                <img className="scale-x-[0.7] scale-y-[0.5] absolute bottom-0 top-[0vh]" src="/images/CPDBG.svg" alt="" />
                <div className="header flex justify-center items-center flex-col mt-6 z-10">
                    <img src="/images/CPT.svg" alt="" className="scale-75" />
                    <span className="text-black font-[Genos] text-sm font-semibold bg-[#F44788] px-4 ">
                        36-Hour Hackathon | 28th February and 1st March 2025
                    </span>
                </div>
                <div className="bg-white w-full h-4 my-6 z-10"></div>
                <div className="flex justify-center items-center flex-col z-10">
                    <img className='scale-75' src="/images/CPMT.svg" alt="" />
                    <span className='text-white font-[Genos] text-[15px] font-semibold px-4 mt-2 '>
                        Partners in Code ; Together , We Conquer!
                    </span>
                </div>
                <div className="flex mx-auto mt-10 flex-row justify-between items-start gap-8 w-[85%] z-10">
                    <form onSubmit={handleSubmit} className="w-full text-black flex flex-col space-y-4 z-10">
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">PoC Name:</label>
                            <input type="text" name="pocName" value={formData.pocName} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">PoC WhatsApp No:</label>
                            <input type="text" name="pocWhatsApp" value={formData.pocWhatsApp} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">PoC Position in Community:</label>
                            <input type="text" name="pocPosition" value={formData.pocPosition} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Community Name:</label>
                            <input type="text" name="communityName" value={formData.communityName} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Community Reach (aggregate):</label>
                            <input type="text" name="communityReach" value={formData.communityReach} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Community Email:</label>
                            <input type="email" name="communityEmail" value={formData.communityEmail} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Community’s Socials:</label>
                            <input type="text" name="communitySocials" value={formData.communitySocials} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Locations Your Community is Active in:</label>
                            <input type="text" name="communityLocations" value={formData.communityLocations} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Community Brand Assets Link:</label>
                            <input type="text" name="communityAssetsLink" value={formData.communityAssetsLink} onChange={handleChange} className="input" />
                        </div>
                        <div className="flex space-x-4 ">
                            <button type="button" onClick={handleClear} className="btn-clear mt-4 bg-white text-black rounded-md px-4 font-bold font-[Poppins]">Clear</button>
                            <button type="submit" className="btn-submit bg-[#F44878] mt-4 text-white rounded-md px-4 font-bold font-[Poppins]">Submit</button>
                        </div>
                    </form>
                    <img className="h-[70vh] mt-4" src="/images/CPSIMG.svg" alt="" />
                </div>
            </div>
            <div className="CA relative bg-[rgb(17,2,2)] h-[160vh] w-[50vw] flex flex-col justify-start items-center mx-6 p-0 z-10">
                <img className="scale-x-[1.29] scale-y-[1] max-h-[160vh] absolute top-0 bottom-0 right-0 left-[5.4vw]" src="/images/CADBG.svg" alt="" />
                <div className="header flex justify-center items-center flex-col mt-6 z-10">
                    <img src="/images/CPT.svg" alt="" className="scale-75" />
                    <span className="text-black font-[Genos] text-sm font-semibold bg-[#F44788] px-4 ">
                        36-Hour Hackathon | 28th February and 1st March 2025
                    </span>
                </div>
                <div className="bg-white w-full h-4 my-6 z-10"></div>
                <div className="flex justify-center items-center flex-col z-10">
                    <img className='scale-75' src="/images/CAMT.svg" alt="" />
                    <span className='text-white font-[Genos] text-[15px] font-semibold px-4 mt-2 '>
                        Crew Members Recruitment
                    </span>
                </div>
                <div className="flex mx-auto mt-10 flex-row justify-between items-start gap-8 w-[85%] z-10">
                    <form onSubmit={handleCrewSubmit} className="w-full text-black flex flex-col space-y-4 z-10">
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Name:</label>
                            <input type="text" name="Name" value={crewData.Name} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">WhatsApp No:</label>
                            <input type="text" name="WhatsApp" value={crewData.WhatsApp} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Email ID:</label>
                            <input type="text" name="Email" value={crewData.Email} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">College or University Name:</label>
                            <input type="text" name="collegeName" value={crewData.collegeName} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">City and State:</label>
                            <input type="text" name="cityState" value={crewData.cityState} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Year and Courses:</label>
                            <input type="text" name="yearCourses" value={crewData.yearCourses} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Your Socials:</label>
                            <input type="text" name="socials" value={crewData.socials} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white font-[Poppins]">Your Photo URL:</label>
                            <input type="text" name="photoUrl" value={crewData.photoUrl} onChange={handleCrewChange} className="input text-black" />
                        </div>
                        <div className="flex space-x-4 ">
                            <button type="button" onClick={handleCrewClear} className="btn-clear mt-4 bg-white text-black rounded-md px-4 font-bold font-[Poppins]">Clear</button>
                            <button type="submit" className="btn-submit bg-[#F44878] mt-4 text-white rounded-md px-4 font-bold font-[Poppins]">Submit</button>
                        </div>
                    </form>
                    <img className="h-[70vh] mt-4" src="/images/CASIMG.svg" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Forms
