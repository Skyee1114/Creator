import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NewsSlider = ({ newsList, className }) => {

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
            <div 
                className={`transition-all duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"} absolute left-60 px-3 py-3 bg-white hover:bg-[#52F2A8] text-[#174034] hover:text-white border-[1px] border-inherit shadow-md z-10 cursor-pointer`}
                onClick={() => swiperRef.current.slidePrev()}
            >
                <IoIosArrowBack className="w-7 h-7" />
            </div>
            <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => {
                    if (swiperRef.current !== swiper) {
                        swiperRef.current = swiper;                        
                    }
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                id="image-slider"
                speed={1500}
                spaceBetween={35}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                grabCursor={true}
                modules={[EffectCoverflow, Autoplay]}
                className={"mySwiper " + className ? className : ""}
            >
                {
                    newsList.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                {item.news}
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div 
                className={`transition-all duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"} absolute right-60 px-3 py-3 bg-white hover:bg-[#52F2A8] text-[#174034] hover:text-white border-[1px] border-inherit shadow-md z-10 cursor-pointer`}
                onClick={() => swiperRef.current.slideNext()}
            >
                <IoIosArrowForward className="w-7 h-7" />
            </div>
        </div>
    )
}

NewsSlider.displayName = 'NewsSlider'

export default NewsSlider;