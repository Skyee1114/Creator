"use client"
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
    projectList: { project: JSX.Element }[];
}

export function Slider3({projectList}: IProps) {

    const swiperRef = useRef<any | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className="flex justify-between items-center"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`transition-all duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"} absolute py-2 bg-white hover:bg-[#52F2A8] text-[#174034] hover:text-white border-[1px] border-inherit shadow-md z-10 cursor-pointer`}
                style={{left: '240px', paddingLeft: '8px', paddingRight: '8px'}}
                onClick={() => swiperRef.current.slidePrev()}
            >
                <IoIosArrowBack className="w-5 h-5" />
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
                spaceBetween={60}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                grabCursor={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                {
                    projectList.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                {item.project}
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div 
                className={`transition-all duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"} absolute py-2 bg-white hover:bg-[#52F2A8] text-[#174034] hover:text-white border-[1px] border-inherit shadow-md z-10 cursor-pointer`}
                style={{right: '240px', paddingLeft: '8px', paddingRight: '8px'}}
                onClick={() => swiperRef.current.slideNext()}
            >
                <IoIosArrowForward className="w-5 h-5" />
            </div>
        </div>
    )
}
