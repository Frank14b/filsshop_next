import language from "../../assets/words/language"
import { IoIosCart, IoIosHeart, IoIosPerson } from "react-icons/io"
import { NavDropdown } from "react-bootstrap"
import { useEffect, useState } from "react"
import styles from "../../styles/Navbar.module.css"
import Link from 'next/link'

export function SubHeaderComponent({ activeMenu = "", customClass }) {

    const [istohidden, setIstohidden] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 100) {
            setIstohidden(false)
        } else {
            setIstohidden(false)
        }
    };

    const actionMenu = (name) => {

    }

    return (
        <>
            <nav className={`navbar navbar_second navbar-expand-lg navbar-light bg-light ${(istohidden) && "animate_hidden"}`}>
                <ul className="navbar-nav mt-lg-0 w-50 text-left">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className={`nav-link ${(activeMenu == "home") ? "active" : "text-dark"}`}>
                                <span className="t-12 bold-400">HOME</span></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${(activeMenu == "about") ? "active" : "text-dark"}`} href="#">
                            <span className="t-12 bold-400">ABOUT</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <a className={`nav-link ${(activeMenu == "brands") ? "active": "text-dark"}`} href="#">
                            <span className="t-12 bold-400">BRANDS</span>
                        </a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className={`nav-link ${(activeMenu == "offers") ? "active": "text-dark"}`} href="#">
                            <span className="t-12 bold-400">OFFERS</span>
                        </a>
                    </li> */}


                    <li className="nav-item">
                        <Link href={"/categories"}>
                            <a className={`nav-link ${(activeMenu == "categories") ? "active" : "text-dark"}`}>
                                <span className="t-12 bold-400">CATEGORIES</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${(activeMenu == "contacts") ? "active" : "text-dark"}`} href="#">
                            <span className="t-12 bold-400">CONTACTS US</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${("sellers" == activeMenu) ? "active" : "text-dark"}`} href="#">
                            <span className="t-12 bold-400">SELL NOW</span>
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav mt-lg-0 w-50 text-right">
                    <li className="nav-item active">
                        <Link href="/goldmarket">
                            <span className="d-flex bg-warning border_radius box_shadow cursor_pointer">
                                <img src="../../images/Gold-Price.jpg" className={`${styles.third_nav_img} border_radius`} />
                                <span className={`nav-link text-dark`}>
                                    <span className="t-12 bold-600 px-2">GOLDMARKET</span></span>
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link href="/sellers">
                            <span className="d-flex bg-dark border_radius box_shadow cursor_pointer">
                                <img src="../../images/sallers.JPG" className={`${styles.third_nav_img} bg-white border_radius`} />
                                <a className={`nav-link text-white`}>
                                    <span className="t-12 bold-600 px-2">SELLERS</span></a>
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link href="/outlet">
                            <span className="d-flex bg-danger border_radius box_shadow cursor_pointer">
                                <img src="../../images/outlet.png" className={`${styles.third_nav_img} border_radius`} />
                                <a className={`nav-link text-white`}>
                                    <span className="t-12 bold-600 px-2">OUTLET</span></a>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>


            <nav className={`navbar navbar_third navbar-expand-lg navbar-dark d-none ${customClass} `}>
                <ul className="navbar-nav mt-lg-0 w-100 text-center mx-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/goldmarket">
                            <a>
                                <span className={`${(istohidden) && "animate_hidden"}`}>
                                    <img src="../../images/Gold-Price.jpg" className={`${styles.third_nav_img} box_shadow`} />
                                    <br />
                                </span>

                                <b className="t-12 text-dark">Gold Market</b>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/sellers">
                            <a>
                                <span className={`${(istohidden) && "animate_hidden"}`}>
                                    <img src="../../images/supermarket-logo.webp" className={`${styles.third_nav_img} box_shadow`} />
                                    <br />
                                </span>
                                <b className="t-12 text-dark">Online Shop</b>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/outlet">
                            <a>
                                <span className={`${(istohidden) && "animate_hidden"}`}>
                                    <img src="../../images/outlet.png" className={`${styles.third_nav_img} box_shadow`} />
                                    <br />
                                </span>
                                <b className="t-12 text-dark">Outlet Market</b>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}