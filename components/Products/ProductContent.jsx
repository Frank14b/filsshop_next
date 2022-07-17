// import Swiper JS
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosStar, IoIosCart } from "react-icons/io"

export function ProductsContent({ data, custom_class }) {

    useEffect(function () {

    }, [])
    return (
        <div className='item_product bg-white'>
            <div className='product_div'>
                <img src="../../images/catg/3dglass.jpg" className='product_img w-100' />
            </div>
            <div className='product_title p-2 t-14 w-100'>
                <a href="">Apeman C420 Mini Dash Cam</a>
            </div>
            <div className='product_price p-2 pt-0 pb-0 t-18 w-100'>
                AED <b>99.00</b>
            </div>
            <div className='product_price p-2 pt-0 pb-0 t-13 w-100'>
                <strike>AED 125.00</strike> <b className='text-danger'>42% OFF</b>
            </div>
            <div className='product_rating p-2 pt-1 pb-3 t-14 w-100 text-right position-relative'>
                <b className='text-center'>
                    <IoIosStar className='icon text-warning'></IoIosStar> <a className='text_rating text-warning'>4.1</a> <small className='t-12 text-gray'>(50)</small>
                </b>

                <a href='#' className='btn btn-xs btn-success t-12 pt-1 pb-1 pull-right'>
                    <IoIosCart className='t-18'></IoIosCart> <span className='hidden_mobile'>Add to Cart</span>
                </a>
            </div>
        </div>
    )
}