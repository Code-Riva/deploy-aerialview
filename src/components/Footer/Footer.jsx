import React from "react";
import {FaYoutube, FaWhatsapp } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const FooterLinks = [
    {   
        title: "About",
        link: "#about",
    },{   
        title: "Service",
        link: "#service",
    },{   
        title: "Product",
        link: "#product",
    },{   
        title: "Video",
        link: "#video",
    },{   
        title: "FAQ",
        link: "#faq",
    }
]   

const ServicesLinks = [
    {   
        title: "VTOL ALBABIRD XL -AV",
        link: "#product",
    },{   
        title: "VTOL VTBIRD - AV",
        link: "#product",
    },{   
        title: "VTOL FIGHTER - AV",
        link: "#product",
    },{   
        title: "2D & 3D Map",
        link: "#map",
    },{   
        title: "Testimony",
        link: "#collab",
    }
]

const Contacts = [
    {
        title:"Whatsapp: ",
        value: "+62-812-8000-9090",
        link: "",
    },
    {
        title: "Email: ",
        value: "waladi@aerialview.co.id",
        link: "mailto:waladi@aerialview.co.id",
    }

]

const Footer = () => {
    return (
    <>
    <div className="bg-black/95 dark:bg-gray-950 text-white duration-300">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
            {/* Company Details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">AerialView</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos, Ab nisi expedita alias aliquam inventore, iste laudantium doloremque non quos soluta quam voluptatum sunt laborum eaque?{" "}</p>
                    <br/>
                    {/* Social Handle*/}
                    <div className="flex items-center gap-4 mt-6">
                        <a href="https://www.youtube.com/@aerialview1860" target="_blank">
                            <FaYoutube className="text-2xl hover:text-red-600 hover:scale-105 duration-300" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=6281280009090&text&type=phone_number&app_absent=0" target="_blank">
                            <FaWhatsapp className="text-2xl hover:text-green-600 hover:scale-105 duration-300" />
                        </a>
                        <a href="mailto:waladi@aerialview.co.id" target="_blank">
                            <TbBrandGmail className="text-2xl hover:text-slate-700 hover:scale-105 duration-300" />
                        </a>
                    </div> 
                </div>
                {/* Quick Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                 {/* First Col */}
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Company</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((link) => (
                                    <li key={link.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400">
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                     {/* Second Col */}
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Services</h1>
                            <ul className="space-y-3">
                                {ServicesLinks.map((service) => (
                                    <li key={service.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400">
                                        <span>{service.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                     {/* Third Col */}
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                            <ul className="space-y-3">
                                {Contacts.map((contact) => (
                                    <li key={contact.link} className="text-base text-gray-400">
                                        <h1 className="">{contact.title}</h1>
                                        <span className="">{contact.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Footer;