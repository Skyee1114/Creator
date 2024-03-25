"use client"
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { LogoIcon, LogoIconWhite1, LogoIconWhite2 } from '@/assets/img';

interface IProps {
    itemTitle: string,
    itemContent: string,
    bgColor: string,
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export function ContactItem({ itemTitle, itemContent, bgColor }: IProps) {

    const itemImages: ItemImages = {
        'About Creator': LogoIcon,
        'Our Address': LogoIconWhite2,
        'Email': LogoIconWhite1
    };

    const [isHovered, setIsHovered] = useState(false);
    const [imageSize, setImageSize] = useState('w-24 h-24');

    useEffect(() => {
        let intervalId: any;

        if (isHovered) {
            intervalId = setInterval(() => {
                setImageSize(prevSize => prevSize === 'w-24 h-24' ? 'w-20 h-20' : 'w-24 h-24');
            }, 700); // Change image size every 1 second
        } else {
            clearInterval(intervalId);
            setImageSize('w-24 h-24');
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
        <div
            
            className={`bg-[${bgColor}]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='flex pt-20 gap-4 items-start px-16'>
                <Image src={itemImages[itemTitle]} alt='' className={`absolute transition-all duration-700 ${imageSize}`}/>
                <div className='flex flex-col gap-8'>
                    <p className='font-bold text-4xl text-white'>{itemTitle}</p>
                    <p className='text-xl leading-[30px] text-white'>{itemContent}</p>
                </div>
            </div>
        </div>
    );
};
