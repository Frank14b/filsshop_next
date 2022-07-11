// import Swiper JS
import { useState } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import required modules
import { Navigation } from "swiper";

export function SliderComponent({ data, custom_class }) {

    const [_swiper, set_swiper] = useState()

    useEffect(function () {

    }, [])

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className={`${custom_class}`}>
                <SwiperSlide style={{ 'background': "url(../../images/slide1.webp) center/cover" }}>

                </SwiperSlide>
                <SwiperSlide style={{ 'background': "url(../../images/slide2.jpg) center/contain" }}>

                </SwiperSlide>
                <SwiperSlide style={{ 'background': "url(../../images/slide3.jpg) center/contain" }}>

                </SwiperSlide>
            </Swiper>
        </>
    )
}