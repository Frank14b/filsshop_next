import { useState } from "react";
import { SliderComponent } from "../Home/SliderComponent";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";
import styles from "../../styles/Home.module.css"
import { CategoriesComponent } from "../Home/CategoriesComponent";
import { ProductsComponent } from "../Products/ProductsComponent";

export function GoldmarketComponent({ }) {

    let images = [
        {'title': 'image 1', 'link': '../../images/gold1.jpg'},
        {'title': 'image 2', 'link': '../../images/gold2.jpg'},
        {'title': 'image 3', 'link': '../../images/gold3.jpg'}
    ]

    let images2 = [
        {'title': 'image 2', 'link': '../../images/test_test.jpg'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/test_test.jpg'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/test_test.jpg'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/test_test.jpg'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/test_test.jpg'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/test_test.jpg'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/test_test.jpg'},
        {'title': 'image 1', 'link': '../../images/prodgold.png'},
        {'title': 'image 2', 'link': '../../images/prodgold.png'},
        {'title': 'image 3', 'link': '../../images/test_test.jpg'}
    ]

    const [sliders, setSliders] = useState(images)
    const [productSliders, setProductSliders] = useState(images2)

    return (
        <>
            <HeaderComponent title="GoldMarket" customClass={"bg-warning"}></HeaderComponent>

            <div className={`mx-auto mainContainer`}>
                <div className="first_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

                <div className="second_content_home my-5 pl-1">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">Featured Sections</h4>
                    </div>
                    <div className="mt-3">
                        <CategoriesComponent data={sliders} custom_class={styles.home_slide}></CategoriesComponent>
                    </div>
                </div>

                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">Trending Products</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={productSliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>

                <div className="four_content_home my-5 pl-1 bg-white">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">
                            <img src="../../images/logo_icon.png" className="flaot-left image_vendor_product_slide"/> &nbsp; 
                            <a href="#">Gold Souq</a>
                        </h4>
                    </div>
                    <div className="mt-1">
                        <ProductsComponent data={productSliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>

                {/* <div className="bestdeals_content_home my-5 py-4 pl-1 bg-warning">
                    <div className="col-md-12 text-left">
                        <h2 className="text-capitalize bold-700 py-3"> 
                            <a href="#" className="text-white">Best Deals</a>
                        </h2>
                    </div>
                    <div className="mt-1">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div> */}

                <div className="bestdeals_content_home my-5 py-1 pl-0 bg-white">
                    <img src="../../images/prod/banner.png" className="w-100"/>
                </div>

                <div className="four_content_home my-5 pl-1 bg-white">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">
                            <img src="../../images/Gold-Price.jpg" className="flaot-left image_vendor_product_slide"/> &nbsp; 
                            <a href="#">Gold Start Electronics</a>
                        </h4>
                    </div>
                    <div className="mt-1">
                        <ProductsComponent data={productSliders} custom_class={styles.home_slide} isgrid={false}></ProductsComponent>
                    </div>
                </div>

                <div className="five_sliders_home ">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

                <div className="six_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">Best Selling</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={productSliders} custom_class={styles.home_slide} isgrid={true}></ProductsComponent>
                    </div>
                </div>

                <div className="last_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

                <div className="last_content_home mt-5 bg-white">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>

            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}