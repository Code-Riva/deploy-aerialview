import React from 'react';
import HeroImg from "../../assets/Hero/hero.jpg";
const Hero = () => {
    return (
    <>
    <div id="gradient-canvas"></div>
    <main className="bg-white dark:bg-dark1 dark:text-white duration-300">

        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
                {/* IMAGE SECTION */}
                <div className='order-1 sm:order-2 relative' data-aos="zoom-in" >
                    <img src={HeroImg} alt="heroImg" className='hero-img'/>
                    <div className='absolute text-white -bottom-4 -right-2 bg-gray-900 dark:bg-gray-100 dark:text-black p-2 rounded-xl shadow-lg sm:-right-4 sm:-bottom-5' data-aos="slide-right" data-aos-delay="300">
                        <p>🗺️ Map Production</p>
                        <h1 className='font-bold'>410000+ <span className='font-normal'>Hektares </span></h1>
                    </div>
                </div>
                {/* TEXT SECTION */}
                <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                    <h1 data-aos="fade-up" className='text-4xl sm:text-5xl font-semibold'>Mapping area easier using {" "} <span className='text-teal-500 dark:text-teal-400'>AerialView</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                        PT. Global Pro Indonesia is a private company at the forefront of spatial analysis, survey, and mapping services. We specialize in delivering precise geospatial surveys powered by cutting-edge drone technology, including Unmanned Aerial Vehicles (UAVs) and underwater drones, to meet the diverse needs of industries such as mining, plantations, spatial planning, and regional development.
                    </p>
                    <button className='btn-primary mt-2' data-aos="fade-up" data-aos-delay="500">Get Started</button>
                </div>  
            </div>
        </div>
    </main>
    </>
    );
};

export default Hero;