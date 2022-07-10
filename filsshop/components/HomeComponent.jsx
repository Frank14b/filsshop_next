import { FooterComponent } from "./template/FooterComponent";
import { HeaderComponent } from "./template/HeaderComponent";

export function HomeComponent({}) {

    return (
        <>
           <HeaderComponent title="Home"></HeaderComponent>

           <FooterComponent></FooterComponent>
        </>
    )
}