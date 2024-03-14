import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { News1, News2, News3, News4 } from '../../assets/img';

const NewsItem = ({date}) => {

    const newsImages = {
        'JANUARY 3, 2024': News1,
        'JANUARY 6, 2024': News2,
        'JANUARY 9, 2024': News3,
        'JANUARY 12, 2024': News4,
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
            to="/" 
            className={`flex flex-col text-xl relative`}  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}           
        >
            <div className="relative">                
                <img src={newsImages[date]} alt="explore" />
            </div>
            <div className="bg-[#f7f7f9] pt-8">
                <div className='flex flex-col items-start gap-5 mx-8'>
                    <div className='bg-[#52F2A8]'>
                        <p className='font-bold text-white text-xs uppercase px-5 py-2'>{date}</p>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-2'>
                            <FaRegUserCircle className="text-base text-[#52F2A8]"/>
                            <p className='text-lg text-[#838694]'>by admin</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegComments className="text-base text-[#52F2A8]"/>
                            <p className='text-lg text-[#838694]'>0 comments</p>

                        </div>
                    </div>
                    <div>
                        <p className="text-[#174034] font-bold text-2xl">A day in the life of entrepreneur & co-founders</p>
                    </div>                    
                    <div className='transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] p-5'>
                        <GoArrowRight className="text-2xl text-[#174034]" />
                    </div>
                </div>       
            </div>                 
        </Link>
    );
};


NewsItem.displayName = 'NewsItem'

export default NewsItem
