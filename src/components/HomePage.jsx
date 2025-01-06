import '../App.css'
const HomePage = () => {
    return (
        <>
            <div className=" bg-[url('/images/page1.svg')]  h-[1000px] w-[1440px]  bg-cover bg-center bg-no-repeat m-0 px-0 py-8">
                <div className="flex justify-center items-center flex-col mr-6 mt-12">
                    <div className=" logos flex justify-center items-center flex-col">
                        <img className='relative' src="/images/logo.svg" alt="" />
                    </div>
                    <div className="title m-0">
                        <img className='relative bottom-8' src="/images/title.svg" alt="" />
                    </div>
                    <span className='relative bottom-10 text-white max-w-[786px] text-center flex items-center justify-center flex-col'>
                        <span className=' font-bold text-[20px]'>
                            Delhi’s Techiest Hackathon Ever!
                        </span>
                        {/* <br /> */}
                        A hackathon that brings modern vibe to the field of tech. Experience the
                        <br />
                        exciting tracks, all around competitions and a night full of enjoyment and coding!
                    </span>
                    <button className="pointer register relative bottom-4 flex items-center justify-center bg-gradient-to-t text-[#ffffff] font-medium text-[21px] from-[#DE264D] to-[#EF508B] w-[170px] h-[50px] rounded-[47px]">
                        Register Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default HomePage
