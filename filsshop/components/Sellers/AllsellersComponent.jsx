import { useState } from "react";
import { FooterComponent } from "../template/FooterComponent";
import { HeaderComponent } from "../template/HeaderComponent";

export function AllsellersComponent({ }) {

    const [sliders, setSliders] = useState([])

    return (
        <>
            <HeaderComponent title="All Sellers"></HeaderComponent>

            <div className={`mx-auto mainContainer`}>

            </div>

            <FooterComponent></FooterComponent>
        </>
    )
}