import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPlane } from "react-icons/lu";
import { BsFillCameraFill } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

const servicesData = [
    {
        id: 1,
        name: "Perencanaan Area dan Pengolahan Peta",
        icon: <FaMapLocationDot className='text-4xl text-primary'/>,
        link: "#",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, similique rem nisi temporibus enim nam. Alias ullam repellendus, doloribus fugit dignissimos mollitia illo eum ratione.",
        aosDelay: "0",
    },
    {
        id: 2,
        name: "Pengambilan Foto Udara",
        icon: <LuPlane className='text-4xl text-primary'/>,
        link:"#",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quasi, impedit aliquid, suscipit dolor labore ex incidunt officia ullam veniam ipsa neque similique?",
        aosDelay:"300",
    },
    {
        id: 3,
        name: "Pemantauan Kondisi Tanaman",
        icon: <BsFillCameraFill className='text-4xl text-primary'/>,
        link:"#",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quasi, impedit aliquid, suscipit dolor labore ex incidunt officia ullam veniam ipsa neque similique?",
        aosDelay:"500",
    },
    {
        id: 4,
        name: "Pengolahan dan Analisis Data Spasial",
        icon: <VscGraphLine className='text-4xl text-primary'/>,
        link:"#",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quasi, impedit aliquid, suscipit dolor labore ex incidunt officia ullam veniam ipsa neque similique?",
        aosDelay:"700",
    }
]

const Services = () => {
    return (
        <>
        <div className='bg-gray-100 dark:bg-dark2 text-black dark:text-white py-12 sm:grid sm:place-items-center'>
            <div className="container">
                {/* HEADER SECTION */}
                <div className='pb-12 text-center space-y-3' data-aos="fade-up">
                    <h1 className='text-3xl font-semibold text-primary dark:text-primary'>
                    Explore Our Services
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, similique temporibus. Nobis, aspernatur. Qui, perferendis?</p>
                </div>
                {/* CARD SECTION */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    {servicesData.map((service) => (
                        <div key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelay}  className='card space-y-3 sm:space-y-4 p-4'>
                            <div>{service.icon}</div>
                            <h1 className='text-lg font-semibold'>{service.name}</h1>
                            <p className='text-gray-700 dark:text-gray-400'>{service.desc}</p>    
                        </div>
                    ))}
                </div>
                {/* BUTTON SECTION*/}
                <div className='text-center mt-4 sm:mt-8' data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">
                <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;