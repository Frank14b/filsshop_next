// import Swiper JS
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosStar, IoIosCart, IoIosArrowForward } from "react-icons/io"

// import required modules
import { FooterComponent } from '../template/FooterComponent';
import { HeaderComponent } from '../template/HeaderComponent';
import styles from "../../styles/Home.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "../../assets/styles_swiper.css";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { ProductsComponent } from './ProductsComponent';

export function ProductDetails({ image, data, custom_class }) {

    const [proddata, setProdData] = useState([])

    useEffect(() => {
        setProdData([
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" },
            { 'title': 'image 2', 'link': "../../images/catg/3dglass.jpg" }
        ])
    }, [])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <HeaderComponent title="GoldMarket" customclassName={"bg-dark"}></HeaderComponent>

            <div className={`mx-auto mainContainer`}>
                <div className='row'>
                    <div className='col-md-12 px-4 pt-3'>
                        <p>
                            Beauty & Health <IoIosArrowForward></IoIosArrowForward> right-chevron <IoIosArrowForward></IoIosArrowForward> Fragrance</p>
                    </div>

                    <div className='col-md-5 mt-4'>
                        <div className='vertical_images col-md-12'>
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                    "height": "450px"
                                }}
                                spaceBetween={10}
                                navigation={true}
                                // thumbs={{ swiper: (thumbsSwiper) ? thumbsSwiper : null }}
                                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                loop={true}
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" className='img_product_slide' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" className='img_product_slide' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/test_test.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                navigation={false}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                                loop={true}
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                    "height": "120px"
                                }}
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/catg/3dglass.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../images/test_test.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='col-md-4 mt-4 p-3 bg-light'>
                        <p className='text-uppercase text-muted t-16'>Hugo Boss</p>
                        <h5 className='bold-600 mb-4'>Bottled Night EDT For Men 200ml</h5>
                        <p className='t-16'>Model Number : 58022215</p>
                        <p className='t-16'>Was: AED 510.00</p>
                        <p className='t-16'>Now: <b className='bold-600 t-22'>AED 139.95</b> Inclusive of VAT</p>
                        <p className='t-16'>Saving: <b className='bold-600'>AED 370.05</b> </p>

                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label className='w-100'>
                                        <b className='t-16'>Quantity</b>
                                        <select className='form-control w-100'>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='col-md-9'>
                                    <button className='btn btn-md btn-success w-100 mt-4'>Add To Card</button>
                                </div>

                                <div className='col-md-12 mt-3'>
                                    <p className='text-muted'>Size: 200ml</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-4'>

                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="col border-bottom">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className='text-dark text-uppercase px-5'>Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className='text-dark text-uppercase px-5'>Specifications</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" className='text-dark text-uppercase px-5'>Reviews</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="col-md-12 py-4"><div className="sc-9a80c80f-4 gwSLfe"><span className="bold-600 t-18">Highlights</span><ul className='mt-3'><li>Top notes are Lavender and Birch</li><li>Middle note is Violet</li><li>Base notes are Woodsy Notes and Musk</li><li>A woody aromatic fragrance for men</li><li>Suitable for nighttime occasions</li></ul></div><span className="sc-9a80c80f-5 dQQmKX">Overview</span><strong>About the product:</strong><br />A fragrance destined to become the secret weapon in the BOSS man s armoury of seduction. This fragrance is destined to become the secret weapon in the BOSS man s armoury of seduction, instilling him with the same compelling presence that underpins his success by day. A unique composition between elegance and seduction. An intense and spicy scent with a purposeful, edgy, masculine character. Woods are key in the scent: BOSS Bottled Night introduces a scent replica of a rich and exotic new wood, Louro Amarelo. Boss Bottled Night by Hugo Boss lets you smell the fresh, lively, passionate night. This Boss Bottled Night eau de toilette is available in 100ml capacity.The Boss Bottled Night by Hugo Boss Eau de Toilette gives you a scent that will light up your nights. A single splash reveals your exuberant, playful, and charismatic side. It is a mix of woody, floral, and powdery accords that liven up your senses and let you experience a calm, pleasant, and romantic feel. This night time scent is bottled in a striking looking flask with beautiful color shifting effect. A splash will stay with you for hours while the bottle full of it will last an entire season with its 100ml capacity.

                                                <br /><br /><strong>About the brand:&nbsp;</strong><br />Hugo Boss AG is a German fashion and lifestyle house, founded in 1924 by Hugo Boss. Hugo Boss fragrances were made in collaboration with perfumers Ursula Wandel, Pierre Wargnye, Will Andrews, Sophie Labbe and many more.<br /><br /><strong>Ingredients:</strong><br />Alcohol Denat, Aqua(Water), Parfum(Fragrance), Ethylhexyl Methoxycinnamate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Propylene Glycol, Bht, Methylparaben, Limonene, Alpha-isomethyl Ionone, Linalool, Hydroxyisohexyl 3-cyclohexene Carboxaldehyde, Butylphenyl Methylpropional, Citral, Geraniol, Citronellol, Hydroxycitronellal, Eugenol, Ci 60730(Ext, Violet 2), Ci 17200(Red 33), Ci 19140(Yellow 5).<br /><br /><strong>How to use:</strong><br />Spray on pulse points around the body to increase the longevity of the fragrance.</div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="col-md-12 py-4"><span className="bold-600 t-18">Specifications</span><div className="row mt-3"><div className="col-md-6"><table className='table table-striped'><tbody><tr><td>Base Note</td><td>Woodsy Notes, Musk</td></tr><tr><td>Colour Name</td><td>transparent</td></tr><tr><td>Department</td><td>Men</td></tr><tr><td>Dispenser Type</td><td>Splash</td></tr><tr><td>Heart/Middle Note</td><td>Violet</td></tr><tr><td>Model Name</td><td>Bottled Night</td></tr></tbody></table></div><div className="col-md-6"><table className='table table-striped'><tbody><tr><td>Model Number</td><td>737052352060</td></tr><tr><td>Scents/Notes</td><td>Woody</td></tr><tr><td>Size</td><td>100 ml</td></tr><tr><td>Top Note</td><td>Lavender, Birch Leaves</td></tr><tr><td>Whats In The Box</td><td>Bottled Night EDT 100ml</td></tr><tr><td>Product Subtype</td><td>Eau de Toilette</td></tr></tbody></table></div></div></div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className="tirh_content_home my-5 pl-1 bg-light pt-4">
                        <div className="col-md-12 text-left">
                            <h4 className="text-capitalize bold-600">More from HUGO BOSS</h4>
                        </div>
                        <div className="mt-3">
                            <ProductsComponent data={proddata} custom_className={styles.home_slide}></ProductsComponent>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="tirh_content_home my-5 pl-1 py-4 bg-light">
                        <div className="col-md-12 text-left">
                            <h4 className="text-capitalize bold-600">How about these?</h4>
                        </div>
                        <div className="mt-3">
                            <ProductsComponent data={proddata} custom_className={styles.home_slide}></ProductsComponent>
                        </div>
                    </div>
                </div>

            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}