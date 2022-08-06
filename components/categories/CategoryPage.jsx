import { useState } from "react";
import { SliderComponent } from "../Home/SliderComponent";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";
import styles from "../../styles/Home.module.css"
import { ProductsComponent } from "../Products/ProductsComponent";
import { CategoriesComponent } from "../Home/CategoriesComponent";
import { Accordion } from "react-bootstrap";

export function CategoryPage({ }) {

    const [sliders, setSliders] = useState([])

    return (
        <>
            <HeaderComponent title="Categories" customClass={"bg-dark"}></HeaderComponent>

            <div className={`mx-auto mainContainer`}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="w-100 vh-100 pt-5">

                            <Accordion defaultActiveKey={['1', '2', '3', '4']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Category</b></Accordion.Header>
                                    <Accordion.Body>
                                        ...
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><b>Brand</b></Accordion.Header>
                                    <Accordion.Body>
                                        ....
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><b>Price AED</b></Accordion.Header>
                                    <Accordion.Body>
                                        ....
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><b>Product Rating</b></Accordion.Header>
                                    <Accordion.Body>
                                        ....
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><b>Seller</b></Accordion.Header>
                                    <Accordion.Body>
                                        ....
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="five_content_home mt-5 pl-1 py-4 bg-light">
                            <div className="row px-3">
                                <div className="col-md-4">
                                    <p className="mt-3">8389 Results for <b>Men s Shoes</b></p>
                                </div>

                                <div className="col-md-8 d-flex px-4">
                                    <label className="w-50 d-flex mx-3">
                                        <b className="w-25 mt-3 text-muted t-12">SORT BY</b>
                                        <select className=" form-control t-14 cursor_pointer">
                                            <option>Recommended</option>
                                            <option>Price High to Low</option>
                                        </select>
                                    </label>

                                    <label className="w-50 d-flex">
                                        <b className="w-25 mt-3 text-muted t-12">DISPLAY</b>
                                        <select className=" form-control t-14 cursor_pointer">
                                            <option>50 PER PAGE</option>
                                            <option>100 PER PAGE</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="six_content_home pl-1 py-4 bg-light">
                            <div className="col-md-12 text-left">
                                {/* <h4 className="text-capitalize bold-600">Best Selling</h4> */}
                            </div>
                            <div className="mt-3">
                                <ProductsComponent data={sliders} custom_class={styles.home_slide} isgrid={true} content_custom={"col-md-3"}></ProductsComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}