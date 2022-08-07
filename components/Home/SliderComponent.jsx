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
import { Navigation, Autoplay } from "swiper";

export function SliderComponent({ data, custom_class }) {

    const [_swiper, set_swiper] = useState()
    const [image, setImage] = useState()

    useEffect(function () {
        if (data.length > 0) {
            setImage(data)
        } else {
            setImage([
                { 'title': 'image 1', 'link': '../../images/slide1.webp' },
                { 'title': 'image 2', 'link': '../../images/slide2.jpg' },
                { 'title': 'image 3', 'link': '../../images/slide3.jpg' }
            ])
        }
    }, [])

    return (
        <>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true} modules={[Navigation, Autoplay]} className={`${custom_class}`}>
                {
                    (image) && (
                        image.map((data, index) => (
                            <SwiperSlide key={index} style={{ 'background': "url(" + data.link + ") center/cover" }}>

                            </SwiperSlide>
                        ))
                    )
                }
            </Swiper>
        </>
    )
}