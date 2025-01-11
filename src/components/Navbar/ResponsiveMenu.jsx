import React, { useDebugValue } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({showMenu}) => {
    return(
        <div className={`${ showMenu ? "left-0" : "left-[-100%]"} fixed bottom-0 top-0 w-[75%] h-screen transition-all duration-300 shadow-md pt-16 px-8 bg-gray-100 dark:bg-slate-900 z-51 flex flex-col justify-between pb-4 md:hidden`}>
            <div className="card">
                {/* User Section */}
                <div className="flex items-center justify-start gap-3">
                    <a href="#"><FaUserCircle size={50} className="cursor-pointer hover:scale-105 hover:duration-300"/></a>
                    <div>
                        <h1>User</h1>
                        <h1 className="text-sm text-slate-500">Guest</h1>
                    </div>
                </div>
                {/* Menu Section */}
                <nav className="mt-12">
                    <ul className="text-xl">
                        { MenuLinks.map(({id, name, link}) => {
                            return(
                                <li key={id}>
                                    <a href={link} className="ml-4 mb-5 font-semibold inline-block hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-black dark:text-white"> 
                                        {" "}
                                        {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
                {/* Footer Section */}
                <div>
                    <h1><a href="https://www.aerialview.co.id/">AerialView.co.id</a></h1>
                </div>
        </div>
    )
};

export default ResponsiveMenu;