import {NavLinks} from "@/constants/nav-links";
import {NavSearch} from "@/components/navbar/nav-search";


export const Navbar = () => {
    console.log("Navbar rendered");

    return(
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    )
}