import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TestimonialSlider = ({ testimonialList, className }) => {

    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    let swiper

    return (
        <div 
            className="flex items-end"
        >
            <div 
                className="transition-all duration-500 ease-in-out  absolute left-[400px] px-4 py-4 bg-white hover:bg-[#52F2A8] text-[#174034] hover:text-white z-10 cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
            >
                <IoIosArrowBack className="w-7 h-7" />
            </div>
            <div 
                className="transition-all duration-500 ease-in-out  absolute left-[480px] px-4 py-4 bg-[#52F2A8] text-white z-10 cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
            >
                <IoIosArrowForward className="w-7 h-7" />
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
                slidesPerView={1}
                modules={[EffectCoverflow, Autoplay]}
                className={"mySwiper " + className ? className : ""}
            >
                {
                    testimonialList.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                {item.project}
                        </SwiperSlide>
                    })
                }
            </Swiper>            
        </div>
    )
}

TestimonialSlider.displayName = 'TestimonialSlider'

export default TestimonialSlider;