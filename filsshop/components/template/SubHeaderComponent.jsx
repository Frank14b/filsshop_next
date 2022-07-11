import language from "../../assets/words/language"
import { IoIosCart, IoIosHeart, IoIosPerson } from "react-icons/io"
import { NavDropdown } from "react-bootstrap"
import { useEffect, useState } from "react"
import styles from "../../styles/Navbar.module.css"

export function SubHeaderComponent({ }) {

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
            setIstohidden(true)
        } else {
            setIstohidden(false)
        }
    };

    const actionMenu = (name) => {

    }

    return (
        <>
            <nav className={`navbar navbar_second navbar-expand-lg navbar-light bg-light ${(istohidden) && "animate_hidden"}`}>
                <ul className="navbar-nav mt-lg-0 w-100 text-center mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link active" href="#">
                            <span className="t-12 bold-600">HOME</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">ABOUT</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">BRANDS</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">OFFERS</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">CATEGORIES</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">CONTACTS US</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="t-12 bold-600">SELL NOW</span>
                        </a>
                    </li>
                </ul>
            </nav>


            <nav className={`navbar navbar_third navbar-expand-lg navbar-dark bg-success `}>
                <ul className="navbar-nav mt-lg-0 w-100 text-center mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <span className={`${(istohidden) && "animate_hidden"}`}>
                                <img src="../../images/Gold-Price.jpg" className={`${styles.third_nav_img} box_shadow`} />
                                <br />
                            </span>

                            <b className="t-12 text-white">Gold Market</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className={`${(istohidden) && "animate_hidden"}`}>
                                <img src="../../images/supermarket-logo.webp" className={`${styles.third_nav_img} box_shadow`} />
                                <br />
                            </span>
                            <b className="t-12 text-white">Online Shop</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className={`${(istohidden) && "animate_hidden"}`}>
                                <img src="../../images/outlet.png" className={`${styles.third_nav_img} box_shadow`} />
                                <br />
                            </span>
                            <b className="t-12 text-white">Outlet Market</b>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}