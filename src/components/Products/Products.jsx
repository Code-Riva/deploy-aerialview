import React from "react";
import Slider from "react-slick";
import imgProducts from "../../assets/Products/imgProducts";

const productsData = [
    {
        id: 1,
        name: "VTOL ALBABIRD XL - AV",
        performance:{
            duration: "~ 85 Minutes",
            distance: "~ 85 Km",
            speed: "65 Km/h",
            area: "750 Hektares / Flight",
            windResist: "30 Km/h"
        } , 
        hardware: {
            weightMax: "400 gr",
            wingspan: "1500 mm",
        },
        img: imgProducts.product1,
    }, {
        id: 2,
        name: "VTOL VTBIRD - AV" ,
        performance:{
            duration: "~ 100 Minutes",
            distance: "~ 90 Km",
            speed: "60 Km/h",
            area: "1000 Hektares / Flight",
            windResist: "30 Km/h"
        } , 
        hardware: {
            weightMax: "600 gr",
            wingspan: "1600 mm",


        },
        img: imgProducts.product2,
    }, {
        id: 3,
        name: "VTOL FIGHTER - AV",
        performance:{
            duration: "~ xx Minutes",
            distance: "~ xx Km",
            speed: "xx Km/h",
            area: "xxx Hektares / Flight",
            windResist: "xx Km/h"
        } , 
        hardware: {
            weightMax: "400 gr",
            wingspan: "1500 mm",


        },
        img: imgProducts.product3,
    }
]
const Products = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
    <>
    <div className="bg-main dark:bg-dark1 text-primary dark:text-dark_text duration-300 py-10">
        <div className="container">
        {/*PRODUCTS SECTION */}
        <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6 mb-10">
            <Slider {...settings}>
                { productsData.map(({id, name, performance, hardware, img}) => (
                        <div key={id} className="my-6">
                            <h1 className="text-xl font-bold text-center pb-5">{name}</h1>
                            <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                                <img src={img} alt="product img" className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"/>
                            </div>
                            <div className='grid grid-cols-1 xl:grid-cols-2'>
                                <div data-aos="fade-up" data-aos-delay="300" className="card space-y-3 sm:space-y-3 p-6 text-black dark:text-white">
                                    <h1 className="mb-5 text-center font-bold text-primary dark:text-dark_text text-xl">Flight Performance</h1>
                                    <p className="">Flight Time     : {performance.duration}</p>
                                    <p className="">Travel Distance : {performance.distance}</p>
                                    <p className="">Mapping Speed   : {performance.speed}</p>
                                    <p className="">Mapping Area    : {performance.area}</p>
                                    <p className="">Wind Resistance : {performance.windResist}</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400" className="card space-y-3 sm:space-y-2 p-6 text-black dark:text-white">
                                    <h1 className="mb-5 text-center font-bold text-primary dark:text-dark_text text-xl">Hardware</h1>
                                    <p className="">Payload Weight Max: {hardware.weightMax}</p>
                                    <p className="">Wingspan: {hardware.wingspan}</p>
                                    <p className=""><span className="font-semibold"> 24 MP Mapping Camera </span>, Automatic Camera Trigger, 2.4 Ghz Remote Control, Li-Ion Battery, Long Range Telemetry 433 Mhz and Travel Hard Case. </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
            {/*DESC SECTION */}
            <h1 data-aos="fade-up" data-aos-delay="500" className="text-2xl font-bold text-center py-5 text-primary">Specification</h1>
            <div data-aos="fade-up"data-aos-delay="700" className="py-10 md:flex text-black-900 text-black dark:text-white">
                <div className="basis-2/3 p-10">
                    <h1 className="text-center font-bold mb-3 sm:mb-2 text-xl">GNSS Device</h1>
                    <p className="font-semibold">OPTIONAL EQUIPMENT FOR PPK VERSION ONLY:</p>
                    <p className="">Increasing Sub-Meter Accuracy using Multi </p>
                    <p className="">Frequency L1/L2 PPK GNSS System</p>
                </div>
                <div className="basis-full p-10">
                    <h1 className="text-center font-bold mb-2 text-2xl -mt-2">Special Features</h1>
                    <p className="">Terrain Following with Google Elevation Data</p>
                    <p className="">Multirotor Assist for Emergency Landing on VTOL</p>
                    <p className="">Dual Hybrid Battery Power with Li-ion & LiPo on VTOL</p>
                </div>
                <div className="basis-2/3 p-10">
                    <h1 className="text-center font-bold mb-3 sm:mb-2 text-xl">Auto Pilot Navigation</h1>
                    <p className="">Unlimited waypoint navigation fully automated take off, flight & landing</p>
                    <p className="">Pre-flight route created using computer ground station or mobile devices </p>
                </div>
            </div>
        </div>    
    </div>
    </>
    )
};

export default Products;