"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FiClock } from "react-icons/fi";
import { Love, Feature1, Feature2, Feature3, Feature4 } from '@/assets/img';

interface IProps {
    featureTitle: string
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export function FeaturedProjectItem({featureTitle}: IProps) {

    const featureImages: ItemImages = {
        'Technology': Feature1,
        'Film & Video': Feature2,
        'Fashion': Feature3,
        'Design': Feature4
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
            href="/featureproject" 
            className={`flex flex-col gap-8 text-xl relative`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute'>
                <div className="relative">
                    <Image src={featureImages[featureTitle]} alt="feature" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#174034] to-transparent"></div>
                </div>
            </div>

            
            <div className='flex justify-end pt-4 pr-3'>
                <Image src={Love} alt="love" className='w-10 h-10 transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-100 z-10'/>
            </div>
            <div className={`transition-colors duration-500 ease-in-out ${isHovered ? "bg-white shadow-md" : "bg-transparent"} z-10`}>
                <div className='flex flex-col gap-5 pt-12 pb-[30px] mx-8'>
                    <div className='flex gap-4 items-center'>
                        <div className="bg-[#52F2A8]">
                            <p className='font-bold text-white text-xs uppercase px-5 py-2'>{featureTitle}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FiClock className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-black" : "text-white"} text-xl`} />
                            <p className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-[#838694]" : "text-white"} font-bold text-xs`}>0 Days Left</p>
                        </div>
                    </div>
                    <div>
                        <p className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-[#174034]" : "text-white"} font-bold text-2xl`}>VR Ears | Hear Off-World Listen Off-Ear</p>
                    </div>
                    <div>
                        <div className='flex justify-between pb-1'>
                            <p className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-[#838694]" : "text-white"} font-bold text-sm`}>$4,000 raised of <span className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-[#674df0]" : "text-white"}`}>$20,000</span></p>
                            <p className={`transition-colors duration-500 ease-in-out ${isHovered ? "text-[#838694]" : "text-white"} font-bold text-sm`}>50%</p>
                        </div>
                        <div className={`w-full transition-colors duration-500 ease-in-out ${isHovered ? "bg-[#838694]" : "bg-white"}`}>
                            <div className="w-1/4 h-2.5 bg-[#52F2A8]"></div>
                        </div>

                    </div>
                </div>       
            </div>                 
        </Link>
    );
};

