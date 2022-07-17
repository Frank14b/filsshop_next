import language from "../../assets/words/language"
import styles from "../../styles/Navbar.module.css"
import { IoIosCart, IoIosHeart, IoIosPerson } from "react-icons/io"
import { useState } from "react"
import { SubHeaderComponent } from "./SubHeaderComponent"

export function NavbarComponent({ customClass = "bg-success" }) {

    const [dropdown, setDropdown] = useState("")

    const openDropdown = (name) => {
        // open / close dropdown menu
        let tmp_name = name
        if (tmp_name != dropdown) {
            setDropdown(name)
        } else {
            setDropdown("")
        }
    }

    return (
        <div className={`box_shadow_2 first_navbar_div row position-fixed ${styles.header_fixed}`}>
            <nav className={`navbar navbar-expand-lg navbar-dark pl-5 pr-5 bg-dark`}>
                <a className="navbar-brand" href="./">
                    <img src="../../images/logo.png" className={styles.logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mx-5 mt-lg-0 w-12">
                        <li className="nav-item dropdown">
                            <a onClick={() => openDropdown("language")} className="nav-link dropdown-toggle" type="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <small className="text-success bold-600 t-12">Language</small> <br /><span className="t-12">English</span>
                            </a>
                            <div className={`dropdown-menu ${(dropdown == "language") && "dVisible"} position-fixed`} aria-labelledby="dropdownMenuLang">
                                <a className="dropdown-item" href="#">English</a>
                                <a className="dropdown-item" href="#">Arabic</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a onClick={() => openDropdown("currency")} className="nav-link dropdown-toggle" type="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <small className="text-success bold-600 t-12">Currency</small> <br /><span className="t-12">AED</span>
                            </a>

                            <div className={`dropdown-menu ${(dropdown == "currency") && "dVisible"} position-fixed`} aria-labelledby="dropdownMenuLang">
                                <a className="dropdown-item" href="#">AED</a>
                                <a className="dropdown-item" href="#">Dollar USD</a>
                                <a className="dropdown-item" href="#">Euro</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex w-50" method="POST">
                        <input className="form-control mr-sm-2 radius-left" type="search" placeholder={language.en.navbar.filer_text} />
                        <button className={`btn btn-success my-2 my-sm-0 radius-right ${styles.navbar_btn_filter}`} type="button">{language.en.navbar.filer_btn_text}</button>
                    </form>

                    <ul className="navbar-nav mt-2 pl-5 mt-lg-0 pull-right w-25 text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <IoIosPerson className="t-22 text-white"></IoIosPerson>
                                {/* <small className="bold-600 text-white">Account</small>  */}
                                <br /><span className="t-12">Login/Register</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <IoIosHeart className="t-22 text-white"></IoIosHeart>
                                <span className="badge bg-danger t-10">0</span>
                                {/* <small className="bold-600 text-white">WishList</small>  */}
                                <br /><span className="t-12 hidden_1382">Your WishList</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <IoIosCart className="t-22 text-white"></IoIosCart>
                                <span className="badge bg-danger t-10">0</span>
                                {/* <small className="bold-600 text-white">Cart</small>  */}
                                <br /><span className="t-12 hidden_1382">Your Cart</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>

            <SubHeaderComponent customClass={customClass}></SubHeaderComponent>
        </div>
    )
}