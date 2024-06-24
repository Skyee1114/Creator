"use client"

import React, { useState, useEffect } from 'react';

export function DateTimeDisplayContinuously() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        setCurrentDateTime(new Date());
    }

    return (
        <div className="font-mono whitespace-nowrap">
            {currentDateTime.toUTCString().replace('GMT', 'UTC')}
        </div>
    );
}