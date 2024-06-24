'use client'
import { useEffect, useState } from 'react';

export function CountdownTimer({ ICOBetaDateUTC }: { ICOBetaDateUTC: Date }) {
    
    const calculateTimeRemaining = (futureDate: Date): { days: number, hours: number, minutes: number, seconds: number } => {
        const currentTime = new Date().getTime();
        const difference = futureDate.getTime() - currentTime;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    const [timeRemaining, setTimeRemaining] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(ICOBetaDateUTC));
        }, 1000);

        return () => clearInterval(interval);
    }, [ICOBetaDateUTC]);

    if (!timeRemaining) {
        return <div className='h-[76px] flex justify-center items-center'><p className='text-white'>Loading...</p></div>;        
    }

    return (
        <div className='border-2 border-[#52F2A8] rounded-lg px-8 py-2 mx-4 sm:mx-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-2xl w-12'>{timeRemaining.days}</p>
                    <p className='text-sm'>DAY</p>
                </div>
                <p className='text-2xl'>:</p>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-2xl w-12'>{timeRemaining.hours}</p>
                    <p className='text-sm'>HRS</p>
                </div>
                <p className='text-2xl'>:</p>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-2xl w-12'>{timeRemaining.minutes}</p>
                    <p className='text-sm'>MIN</p>
                </div>
                <p className='text-2xl'>:</p>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-2xl w-12'>{timeRemaining.seconds}</p>
                    <p className='text-sm'>SEC</p>
                </div>
            </div>
        </div>
    );
}
