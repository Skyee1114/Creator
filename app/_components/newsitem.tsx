"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { News1, News2, News3, News4, News5, News6 } from '@/assets/img';
import { newsdate_1, newsdate_2, newsdate_3, newsdate_4, newsdate_5, newsdate_6 } from '../_utils/newsdata'

interface IProps {
    date: string,
    title: string,
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export function NewsItem({date, title}: IProps) {

    const newsImages: ItemImages = {
        [newsdate_1]: News1,
        [newsdate_2]: News2,
        [newsdate_3]: News3,
        [newsdate_4]: News4,
        [newsdate_5]: News5,
        [newsdate_6]: News6,
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
            href={`/news/${date}`} 
            className={`flex flex-col text-xl relative`}  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}           
        >
            <div className="relative">                
                <Image src={newsImages[date]} alt="explore" />
            </div>
            <div className="bg-[#f7f7f9] pt-8">
                <div className='flex flex-col items-start gap-5 mx-8'>
                    <div className='bg-[#52F2A8]'>
                        <p className='font-bold text-white text-xs uppercase px-5 py-2'>{date}</p>
                    </div>                    
                    <div>
                        <p className="text-[#174034] font-bold text-2xl">{title}</p>
                    </div>                    
                    <div className={`transition-colors duration-300 ease-in-out ${isHovered ? "bg-[#52F2A8]" : "bg-white"} p-5`}>
                        <GoArrowRight className="text-2xl text-[#174034]" />
                    </div>
                </div>       
            </div>                 
        </Link>
    );
};