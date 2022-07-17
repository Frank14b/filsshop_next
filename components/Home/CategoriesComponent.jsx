// import Swiper JS
import { useState } from 'react';
import { useEffect } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// // import Swiper styles
// import "swiper/css/bundle";
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import required modules
// import { Grid, Pagination } from "swiper";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function CategoriesComponent({ data, custom_class }) {

    useEffect(function () {

    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1675 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1250, min: 850 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 850, min: 650 },
            items: 3
        }
    };

    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            sliderClass=""
            slidesToSlide={2}
            swipeable
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}>

            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/bag.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Bags</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/3dglass.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/mobile.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/bag.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/mobile.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/mobile.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/bag.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/3dglass.jpg) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
            <div className='item_caroussel_category' style={{ 'background': "url(../../images/catg/ordi.webp) center/cover" }}>
                <div className='categ_text bg-light p-2 text-center'>
                    <a href="#" className='text-success bold-600'>Item 1</a>
                </div>
            </div>
        </Carousel>
    )
}