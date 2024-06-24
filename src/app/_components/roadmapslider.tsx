"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { ArrowLeft, ArrowLeftHover, ArrowRight, ArrowRightHover } from "@/assets/image";

interface IProps {
    roadmapPhases: { phase: JSX.Element }[];
}

export function RoadmapSlider({roadmapPhases}: IProps) {

    const swiperRef = useRef<any | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (swiperRef.current && !swiperRef.current.autoplay.running) {
            swiperRef.current.autoplay.start();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (swiperRef.current && swiperRef.current.autoplay.running) {
            swiperRef.current.autoplay.stop();
        }
    };

    useEffect(() => {
        if (!isHovered && swiperRef.current && swiperRef.current.autoplay.running) {
            swiperRef.current.autoplay.stop();
        }
    }, [isHovered]);

    return (
        <div 
            className="w-full flex justify-between items-center"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`absolute z-10 cursor-pointer hidden 3xl:block`}                
                style={{left: '180px'}}
                onClick={() => swiperRef.current.slidePrev()}
            >
                <Image src={ArrowLeftHover} alt=""/>
            </div>
            <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => {
                    if (swiperRef.current !== swiper) {
                        swiperRef.current = swiper;                        
                    }
                }}
                id="image-slider"
                speed={1500}
                spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    
                }}
                slidesPerView={3}
                grabCursor={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                {
                    roadmapPhases.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                {item.phase}
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div className={`absolute z-10 cursor-pointer hidden 3xl:block`}
                style={{right: '180px'}}
                onClick={() => swiperRef.current.slideNext()}
            >
                <Image src={ArrowRightHover} alt=""/>
            </div>
        </div>
    )
}
