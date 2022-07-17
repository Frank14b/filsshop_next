import language from "../../assets/words/language"
import { IoIosCart, IoIosChatboxes, IoIosAddCircle, IoIosShare } from "react-icons/io"
import { useState } from "react"
import { ProductsComponent } from "../Products/ProductsComponent"
import Link from 'next/link'
import styles from "../../styles/Home.module.css"
import { FooterComponent } from "../template/FooterComponent"
import { HeaderComponent } from "../template/HeaderComponent"
import { SliderComponent } from "../Home/SliderComponent"

export function ProfileComponent({ data, customClass = "bg-light" }) {

    const [sliders, setSliders] = useState([])

    let responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1675 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1250, min: 850 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 650 },
            items: 3
        }
    };

    return (
        <>
            <HeaderComponent title="All Sellers" customClass={"bg-dark d-none"}></HeaderComponent>

            <div className={`mx-auto mainContainer mainContainer_no_margin`}>
                <div className="first_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

                <div className="tirh_content_home mb-0 pl-1 pt-2 bg-success text-white">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-800">
                            <img src="../../images/logo_icon.png" className="flaot-left image_vendor_product_slide shadow" /> &nbsp;
                            <b className="mt-3">Fils Online Fashion</b>
                            <small className="t-12 badge bg-white text-dark mx-3">example@email.com</small>
                        </h4>
                    </div>
                </div>
                <div className="w-100 position-relative p-3 pt-4 bg-gray">
                    <div className="vendor_card_head2 w-100 text-center mt-1">
                        <small className="text-gray">200 Followers | 100 Products</small>
                    </div>
                    <div className="vendor_card_head2 w-100 text-center mt-1">
                        <button className="btn btn-sm bg-white t-13 mx-2"><IoIosChatboxes className="t-16"></IoIosChatboxes> Message</button>
                        <button className="btn btn-sm btn-success t-13 mx-2"><IoIosAddCircle className="t-16"></IoIosAddCircle> Follow</button>
                        <button className="btn btn-sm bg-white t-13 mx-2"><IoIosShare className="t-16"></IoIosShare> Share</button>
                    </div>
                </div>

                <div className="six_content_home mb-5 pl-1 py-4 bg-gray">
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide} isgrid={true}></ProductsComponent>
                    </div>
                </div>

            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}