'use client'
import { useEffect, useState } from 'react';

export function CountdownTimer({ futureDate }: { futureDate: Date }) {
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
            setTimeRemaining(calculateTimeRemaining(futureDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [futureDate]);

    if (!timeRemaining) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <p><span className="font-bold text-4xl">{timeRemaining.days}</span> Days <span className="font-bold text-4xl">:</span> <span className="font-bold text-4xl">{timeRemaining.hours}</span> Hours <span className="font-bold text-4xl">:</span> <span className="font-bold text-4xl">{timeRemaining.minutes}</span> Minutes <span className="font-bold text-4xl">:</span> <span className="font-bold text-4xl">{timeRemaining.seconds}</span> Seconds</p>
        </>
    );
}
