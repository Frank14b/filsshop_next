import { NavbarComponent } from "./NavbarComponent";

export function HeaderComponent({ title }) {

    return (
        <>
            <head>
                <title>{title}</title>
            </head>

            <NavbarComponent></NavbarComponent>
        </>
    )
}