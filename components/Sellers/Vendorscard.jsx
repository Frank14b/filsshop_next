import language from "../../assets/words/language"
import { IoIosCart, IoIosChatboxes, IoIosAddCircle, IoIosShare } from "react-icons/io"
import { useState } from "react"
import { ProductsComponent } from "../Products/ProductsComponent"
import Link from 'next/link'

export function Vendorscard({ data, customClass = "bg-light" }) {

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
            breakpoint: { max: 1675, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 650 },
            items: 2.6
        },
        extraMobile: {
            breakpoint: { max: 650, min: 450 },
            items: 2
        },
        superExtraMobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1.3
        }
    };

    return (
        <div className={`box_shadow border_radius row w-100 vendor_card_main position-relative bg-gray`}>
            <img src="../../images/catg/3dglass.jpg" className="vendor_card_img position-absolute bg-white box_shadow_2" />
            <div className="w-100 position-relative p-3 pt-4">
                <div className="vendor_card_head w-100 text-center mt-4">
                    <Link href="/sellers/profile/1">
                        <a>
                            <b>Fils Online Electronics</b>
                        </a>
                    </Link>
                </div>
                <div className="vendor_card_head2 w-100 text-center mt-1">
                    <small className="text-gray">200 Followers | 100 Products</small>
                </div>
                <div className="vendor_card_head2 w-100 text-center mt-1">
                    <button className="btn btn-sm bg-white t-13 mx-2"><IoIosChatboxes className="t-16"></IoIosChatboxes> Message</button>
                    <button className="btn btn-sm btn-success t-13 mx-2"><IoIosAddCircle className="t-16"></IoIosAddCircle> Follow</button>
                    <button className="btn btn-sm bg-white t-13 mx-2"><IoIosShare className="t-16"></IoIosShare> Share</button>
                </div>

                <div className="vendor_card_body row pl-1 w-100 text-center mt-3">
                    <ProductsComponent data={data} isgrid={false} carousselResponsive={responsive}></ProductsComponent>
                </div>
            </div>
        </div>
    )
}