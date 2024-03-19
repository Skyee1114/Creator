"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FiClock } from "react-icons/fi";
import { Love, Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } from '@/assets/img';

interface IProps {
    featureTitle: string
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export function SimilarProjectItem({featureTitle}: IProps) {

    const featureImages:ItemImages = {
        'Technology': Feature1,
        'Film & Video': Feature2,
        'Fashion': Feature3,
        'Design': Feature4,
        'Game': Feature5,
        'Human': Feature6,
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (        
        <Link 
            href="/" 
            className={`flex flex-col text-xl relative`}             
        >
            <div className="relative">
                <div
                    className={`absolute inset-0 bg-[#174034] transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-20" : "opacity-0"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <Image src={featureImages[featureTitle]} alt="explore" />
                <div className='flex justify-end right-3 top-4 absolute'>
                    <Image src={Love} alt="love" className='w-10 h-10 transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-100 z-10' />
                </div>
            </div>
            <div className="bg-white pt-8 border-l border-r border-b border-inherit">
                <div className='flex flex-col gap-5 pb-[30px] mx-8'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-[#52F2A8]'>
                            <p className='font-bold text-white text-xs uppercase px-5 py-2'>{featureTitle}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FiClock className="text-black text-xl" />
                            <p className="text-[#838694] font-bold text-xs">0 Days Left</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#174034] font-bold text-2xl">VR Ears | Hear Off-World Listen Off-Ear</p>
                    </div>
                    <div>
                        <div className='flex justify-between pb-1'>
                            <p className="text-[#838694] font-bold text-sm">Raised: $4,134</p>
                            <p className="text-[#838694] font-bold text-sm">18.00%</p>
                        </div>
                        <div className="w-full bg-[#838694]">
                            <div className='w-1/4 h-2.5 bg-[#52F2A8]'></div>
                        </div>
                        <p className='font-bold text-base text-[#674df0] pt-2'><span className='text-[#174034]'>Goal:</span> $15,000</p>

                    </div>
                </div>       
            </div>                 
        </Link>
    );
};
