import { NavbarComponent } from "./NavbarComponent";
import Head from 'next/head'

export function HeaderComponent({ activeMenu = "", title = "Fils online general trading - Get the best deals", customClass, banner = "../../images/banner.jpg" }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <link href="../../images/logo_icon.png" rel="icon" />
                {/* <!-- required meta --> */}
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <!-- keywords for this document --> */}
                <meta name="keywords" content="FilsShop Filsonline, Trading, UAE, E-commerce, E-shop, Market, Online Market, Shop" />
                {/* <!-- description for this document --> */}
                <meta name="description"
                    content="Fils online general trading - Get the best deals - All your needed in one shop" />
                {/* <!-- author of this document --> */}
                <meta name="auhtor" content="FILS ONLINE GENERAL TRADING" />
                <meta property="og:type" content="e-commerce" />
                <meta property="og:title" content={banner} />
                <meta property="og:site_name" content="FilsShop" />
                <meta property="og:url" content="https://filsshop.com" />
                <meta property="og:description"
                    content="Fils online general trading - Get the best deals - All your needed in one shop" />
                <meta property="og:image" content={banner} />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta name="twitter:title" content={title} />
                <meta name="twitter:site" content="@FILSSHOP" />
                <meta name="twitter:description"
                    content="Fils online general trading - Get the best deals - All your needed in one shop" />
                <meta name="twitter:image" content="" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="application-name" content="FILSSOP" />
                
                {/* <script
                    src={`https://maps.googleapis.com/maps/api/js?key=${settings?.googleMaps?.apiKey}&callback=initMap&libraries=&v=weekly`}
                    async
                ></script> */}
            </Head>

            <NavbarComponent activeMenu={activeMenu} customClass={customClass}></NavbarComponent>
        </>
    )
}