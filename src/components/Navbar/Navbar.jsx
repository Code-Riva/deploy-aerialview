import React from "react";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";
import {HiMenuAlt3, HiMenuAlt1} from "react-icons/hi";


export const MenuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "Products",
        link: "/#products",
    },
    {
        id: 4,
        name: "Contact",
    }
]
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
    <>
    <nav className="shadow-lg bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
            <div className="flex justify-between">
                {/* LOGO SECTION */}
                <div>
                    <a href="https://www.aerialview.co.id/" className="flex items-center gap-3">
                        <img src={Logo} alt="Logo" className="w-5 scale-150" />
                        <span className="text-2xl sm:text-3xl font-semibold">AerialView</span>
                    </a>
                </div>
                {/* DESKTOP NAVLINKS SECTION */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {MenuLinks.map((element) => {
                            return(
                                <li key={element.id} className="cursor-pointer py-4">
                                    <a href={element.link} className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-400">{element.name}</a>
                                </li>
                                );
                            })}
                        <button className="btn-primary">Contact Us</button>
                        <DarkMode />
                    </ul>
                </div>
                {/* MOBILE VIEW */}
                <div className="flex items-center gap-4 md:hidden">
                    <DarkMode/>
                    { showMenu ? (
                            <HiMenuAlt1 onClick={toggleMenu} className="text-2xl cursor-pointer"/>
                        ) : (
                            <HiMenuAlt3 onClick={toggleMenu} className="text-2xl cursor-pointer"/>
                        ) 
                    }
                </div>
            </div>
        </div>
        {/* MOBILE NAVLINKS SECTION */}
        <ResponsiveMenu showMenu={showMenu}/>
    </nav>
    </>
    );
};

export default Navbar;