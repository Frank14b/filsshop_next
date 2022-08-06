import Link from "next/link";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";

export function LoginComponent({ image, data, custom_class }) {

    return (

        <>
            <HeaderComponent title="Categories" customClass={"bg-dark"}></HeaderComponent>

            <div className="signin">

                <div className="row">
                    <div className="col-md-12">
                        <section className="ftco-section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 text-center mb-5">
                                        {/* <h2 className="heading-section">FILL THE FORM BELOW</h2> */}
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-lg-10">
                                        <div className="wrap d-md-flex">
                                            <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                                <div className="text w-100">
                                                    <h2>Welcome Back on Filsshop</h2>
                                                    <p>Don t have an account?</p>
                                                    <Link href="/users/register"><a className="btn btn-light bold-600 w-75">Sign Up</a></Link>
                                                </div>
                                            </div>
                                            <div className="login-wrap p-4 p-lg-5">
                                                <div className="d-flex">
                                                    <div className="w-100">
                                                        <h3 className="mb-4 bold-600">Sign In</h3>
                                                    </div>
                                                    <div className="w-100">
                                                        <p className="social-media d-flex justify-content-end">
                                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center text-primary"> <IoLogoFacebook className="t-22"></IoLogoFacebook> </a>
                                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center text-danger"> <IoLogoGoogle className="t-22"></IoLogoGoogle> </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <form action="#" className="signin-form">
                                                    <div className="form-group mb-3 mt-5">
                                                        <label className="label" htmlFor="name">Username</label>
                                                        <input type="text" className="form-control" placeholder="Username" required />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="label" htmlFor="password">Password</label>
                                                        <input type="password" className="form-control" placeholder="Password" required />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <div className="w-50 text-left">
                                                            <label className="w-100 cursor-pointer">
                                                                <input type="checkbox" className="checkbox"/> Remember Me
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group my-5">
                                                        <button type="submit" className="form-control btn bg-success text-white submit px-3">Sign In</button>
                                                    </div>
                                                    <div className="form-group d-md-flex">
                                                        <div className="w-100 text-md-right ">
                                                            <a href="#">Forgot Password ? Change now</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}