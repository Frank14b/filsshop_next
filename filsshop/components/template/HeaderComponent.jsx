import { NavbarComponent } from "./NavbarComponent";
import Head from 'next/head'

export function HeaderComponent({ title }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <link href="../../images/logo_icon.png" rel="icon" />
            </Head>

            <NavbarComponent></NavbarComponent>
        </>
    )
}