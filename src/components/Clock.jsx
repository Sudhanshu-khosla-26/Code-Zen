import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
    });
    useEffect(() => {
        const targetDate = new Date('February  28, 2025 00:00:00');
        const updateClock = () => {
            const now = new Date();
            const timeDifference = targetDate - now;

            const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

            setTime({
                days: totalDays.toString().padStart(2, '0'),
                hours: totalHours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
            });
        };
        // const updateClock = () => {
        //     const now = new Date();
        //     const timeDifference = targetDate - now;

        //     const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
        //     // const hours = totalHours % 24;
        //     const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        //     const seconds = Math.floor((timeDifference / 1000) % 60);

        //     setTime({
        //         hours: totalHours.toString().padStart(2, '0'),
        //         minutes: minutes.toString().padStart(2, '0'),
        //         seconds: seconds.toString().padStart(2, '0'),
        //     });
        // };

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex items-center justify-center rounded-[21px] w-[500px] h-[233px] bg-gradient-to-b from-[#000000] to-[#696969]">
            <div className="flex flex-col w-[460px] h-[174px] items-center p-8 bg-[#000000]  rounded-[21px] shadow-lg">
                <div className="flex items-center  justify-center text-[72px] leading-[66.24px] font-[DigitalNumbers] text-[#FF0000]">
                    <span className="text-[72px] mx-2">
                        {time.days}
                    </span>
                    <span className="text-[82px] mx-2 pb-2">:</span>
                    <span className="text-[82px] mx-2">
                        {time.hours}
                    </span>
                    <span className="text-[82px] mx-2 pb-2">:</span>
                    <span className="text-[82px] mx-2">
                        {time.minutes}
                    </span>
                </div>

                <div className="flex items-center font-[DigitalNumbers] justify-center font-normal gap-[60px] mt-4 text-[14px] leading-[12.88px] text-white">
                    <div className="mt-2">DAYS</div>
                    <div className="mt-2 pl-8">HOURS</div>
                    <div className="mt-2 ml-4">MINUTES</div>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;