import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Technology, Games, Science, SocialCauses, Environmental, Design } from '../../assets/img';

const CategoryItem = ({itemTitle}) => {

    const itemImages = {
        'Technology': Technology,
        'Games': Games,
        'Science': Science,
        'SocialCauses': SocialCauses,
        'Environmental': Environmental,
        'Design': Design
    };

    const [isHovered, setIsHovered] = useState(false);
    const [imageSize, setImageSize] = useState('w-16 h-16');

    useEffect(() => {
        let intervalId;

        if (isHovered) {
            intervalId = setInterval(() => {
                setImageSize(prevSize => prevSize === 'w-16 h-16' ? 'w-14 h-14' : 'w-16 h-16');
            }, 700); // Change image size every 1 second
        } else {
            clearInterval(intervalId);
            setImageSize('w-16 h-16');
        }

        return () => clearInterval(intervalId);
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (        
        <Link 
            to="/" 
            className={`flex justify-center w-52 h-52 bg-white text-xl relative`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute top-0 right-0 ${isHovered ? 'w-5 h-5' : 'w-0 h-0' } bg-[#52F2A8] transition-all duration-500`}></div>          
            <div className='h-16 items-center absolute top-12'>
                <img 
                    src={itemImages[itemTitle]} 
                    className={`transition-all duration-700 ${imageSize}`}
                />
            </div>
            <span className="font-medium text-center text-[#174034] absolute bottom-12 left-1/2 transform -translate-x-1/2">{itemTitle}</span>
        </Link>

    );
};


CategoryItem.displayName = 'CategoryItem'

export default CategoryItem
