import { useState } from "react";
import { SliderComponent } from "../Home/SliderComponent";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";
import styles from "../../styles/Home.module.css"
import { ProductsComponent } from "../Products/ProductsComponent";
import { CategoriesComponent } from "../Home/CategoriesComponent";

export function CategoriesPage({ }) {

    const [sliders, setSliders] = useState([])

    return (
        <>
            <HeaderComponent title="Categories" customClass={"bg-dark"}></HeaderComponent>

            <div className={`mx-auto mainContainer border-radius-top`}>
                {/* <div className="first_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div> */}

                <div className="second_content_home pt-5">
                    <div className="col-md-12 text-left">
                        <h3 className="text-uppercase bold-600 text-center mb-5">Categories</h3>
                    </div>
                    <div className="">
                        <CategoriesComponent data={sliders} custom_class={styles.home_slide} isgrid={true}></CategoriesComponent>
                    </div>
                </div>

                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-center bold-600">
                        <h4 className="text-capitalize bold-600">MAKE-UP</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>

                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-center bold-600">
                        <h4 className="text-capitalize bold-600">ELECTRONICS</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>

                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-center bold-600">
                        <h4 className="text-capitalize bold-600">BAGS</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>
                
                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-center bold-600">
                        <h4 className="text-capitalize bold-600">HOME APPLIANCES</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>

                <div className="tirh_content_home my-5 pl-1 py-4 bg-gray">
                    <div className="col-md-12 text-center bold-600">
                        <h4 className="text-capitalize bold-600">BEAUTY</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
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
                        <ProductsComponent data={sliders} custom_class={styles.home_slide} isgrid={true}></ProductsComponent>
                    </div>
                </div>

                <div className="last_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}