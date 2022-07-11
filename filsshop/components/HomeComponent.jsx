import { useState } from "react";
import { SliderComponent } from "./Home/SliderComponent";
import { FooterComponent } from "./template/FooterComponent";
import { HeaderComponent } from "./template/HeaderComponent";
import styles from "../styles/Home.module.css"
import { CategoriesComponent } from "./Home/CategoriesComponent";
import { ProductsComponent } from "./Home/ProductsComponent";

export function HomeComponent({ }) {

    const [sliders, setSliders] = useState([])

    return (
        <>
            <HeaderComponent title="Home"></HeaderComponent>

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

                <div className="tirh_content_home my-5 pl-1 py-5 bg-gray">
                    <div className="col-md-12 text-left">
                        <h4 className="text-capitalize bold-600">Trending Products</h4>
                    </div>
                    <div className="mt-3">
                        <ProductsComponent data={sliders} custom_class={styles.home_slide}></ProductsComponent>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}