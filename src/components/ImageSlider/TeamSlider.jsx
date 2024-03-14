import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TeamSlider = ({ memberList, className }) => {

    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    let swiper

    return (
        <div 
            className="flex justify-between items-center"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => {
                    if (swiperRef.current !== swiper) {
                        swiperRef.current = swiper;                        
                    }
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                id="image-slider"
                speed={0}
                spaceBetween={35}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                modules={[EffectCoverflow, Autoplay]}
                className={"mySwiper " + className ? className : ""}
            >
                {
                    memberList.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                {item.member}
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

TeamSlider.displayName = 'TeamSlider'

export default TeamSlider;