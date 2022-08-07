
import { useState } from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoIosMap } from "react-icons/io"
import { ModalPositionComponent } from "../ModalpositionComponent";

export function FooterComponent({ }) {

    const [showModalPosition, setShowModalPosition] = useState(false);

    const handleClose = () => setShowModalPosition(false);
    const handleShow = () => setShowModalPosition(true);

    return (
        <div className="row bg-dark mt-0 text-white">

            <a onClick={() => handleShow()} className="btn_map_static position-fixed bg-success text-white shadow cursor_pointer">
                {/* <IoIosMap className="icon"></IoIosMap> */}
                <b className="t-10 text-white">
                    <img src="/images/ae.svg" className="map_img" />
                    Delivery
                </b>
            </a>

            <footer className="py-5 w-75 mx-auto">
                <div className="row">
                    <div className="col-2">
                        <h5>Menu</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brands</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sell Now</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Categories</h5>
                        <ul className="nav flex-column">

                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Get in touch</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Warranty Policy</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sell with us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Use</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Sale</a></li>
                        </ul>
                    </div>

                    <div className="col-4 offset-1">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-success" type="button">Subscribe</button>
                            </div>
                            <h5 className="mt-5 t-14">GET THE MOBILE APP</h5>
                            <div className="d-flex w-100 gap-2">
                                <img src="../../images/google-play.svg" className="w-30" />
                                <img src="../../images/app-store.svg" className="w-30" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2022 Filsshop, Trading. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="text-white" href="#"><IoLogoFacebook className="t-22"></IoLogoFacebook></a></li>
                        <li className="ms-3"><a className="text-white" href="#"><IoLogoTwitter className="t-22"></IoLogoTwitter></a></li>
                        <li className="ms-3"><a className="text-white" href="#"><IoLogoYoutube className="t-22"></IoLogoYoutube></a></li>
                    </ul>
                </div>
            </footer>

            <ModalPositionComponent show={showModalPosition} handleClose={handleClose}></ModalPositionComponent>
        </div>
    )
}