// import Swiper JS
import { useState } from "react";
import { useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductsContent } from "./ProductContent";

export function ProductsComponent({ data, custom_class, isgrid = false, carousselResponsive = null, content_custom = "col-md-2" }) {

    const [responsive, setResponsive] = useState({})
    const [proddata, setProdData] = useState([])

    let responsiveDefault = {
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
        },
        extraMobile: {
            breakpoint: { max: 650, min: 450 },
            items: 2
        },
        superExtraMobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1.8
        }
    };

    useEffect(() => {
        if (carousselResponsive) {
            setResponsive(carousselResponsive)
        } else {
            setResponsive(responsiveDefault)
        }
    }, [carousselResponsive])

    useEffect(() => {
        if (data.length > 0) {
            setProdData(data)
        } else {
            setProdData([
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" },
                { "title": "image 2", "link": "../../images/catg/3dglass.jpg" }
            ])
        }
    }, [])

    return (
        <>
            {
                (isgrid) ? (
                    <div className="row product_grid w-100">
                        {
                            (proddata.length > 0) && (
                                proddata.map((data, index) => (
                                    <div key={index} className={`${content_custom} main_product`}>
                                        <ProductsContent image={data.link}></ProductsContent>
                                    </div>
                                ))
                            )
                        }
                    </div>
                ) : (
                    <div className="my-4">
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

                            {
                                (proddata.length > 0) && (
                                    proddata.map((data, index) => (
                                        <div key={index} className="col-md-2 main_product">
                                            <ProductsContent image={data.link}></ProductsContent>
                                        </div>
                                    ))
                                )
                            }
                        </Carousel>
                    </div>
                )
            }
        </>
    )
}