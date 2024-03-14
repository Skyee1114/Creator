import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCards } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const IntroSlider = ({introList, className}) => {

    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    let swiper

    return (
        <div>
            <div 
                className="transition-all duration-500 ease-in-out  absolute left-[300px] bottom-[71px] px-4 py-4 bg-[#52F2A8] hover:bg-[#174034] text-[#174034] hover:text-white z-10 cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
            >
                <IoIosArrowBack className="w-7 h-7" />
            </div>
            <div 
                className="transition-all duration-500 ease-in-out  absolute left-[362px] bottom-[71px] px-4 py-4 bg-[#52F2A8] hover:bg-[#174034] text-[#174034] hover:text-white z-10 cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
            >
                <IoIosArrowForward className="w-7 h-7" />
            </div>
            <div 
                className="flex items-end bg-white px-60 py-24"
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
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect={'cards'}
                    slidesPerView={1}
                    modules={[EffectCards, Autoplay]}
                    className={"mySwiper " + className ? className : ""}
                >
                    {
                        introList.map((item, index) => {
                            return  <SwiperSlide key={index} style={{ width: '70%'}}>
                                    {item.intro}
                            </SwiperSlide>
                        })
                    }
                </Swiper>            
            </div>
        </div>
        
    )
}

IntroSlider.displayName = 'IntroSlider'

export default IntroSlider
