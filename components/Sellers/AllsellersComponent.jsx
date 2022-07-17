import { useState } from "react";
import { SliderComponent } from "../Home/SliderComponent";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";
import styles from "../../styles/Home.module.css"
import { Vendorscard } from "./Vendorscard";
import { CategoriesComponent } from "../Home/CategoriesComponent";

export function AllsellersComponent({ }) {

    const [sliders, setSliders] = useState([])

    return (
        <>
            <HeaderComponent title="All Sellers" customClass={"bg-dark"}></HeaderComponent>

            <div className={`mx-auto mainContainer`}>
                <div className="first_sliders_home">
                    <SliderComponent data={sliders} custom_class={styles.home_slide}></SliderComponent>
                </div>

                <div className="tirh_content_home mb-0 pl-1 py-4 bg-success text-white">
                    <div className="col-md-12 text-center">
                        <h4 className="text-capitalize bold-800">ALL SELLERS</h4>
                    </div>
                </div>

                <div className="second_content_home mb-5 pl-1 bg-dark text-white py-3">
                    <div className="col-md-12 text-left">
                        <h5 className="text-uppercase bold-600">Filter by Categories</h5>
                    </div>
                    <div className="mt-3">
                        <CategoriesComponent data={sliders}></CategoriesComponent>
                    </div>
                </div>

                <div className="tirh_content_home mb-5 pl-1 py-4 bg-white">
                    <div className="mt-3">
                        <div className="row p-3">
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>

                            <div className="bestdeals_content_home row pb-5 mb-5 bg-white">
                                <img src="../../images/prod/banner.png" className="w-100" />
                            </div>

                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                            <div className="col-md-4 all_vendor_colonne">
                                <Vendorscard data={sliders} customClass={"bg-light"}></Vendorscard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}