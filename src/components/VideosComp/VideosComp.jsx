import React from 'react';
import VideoCard from './VideoCard';

const VideosData = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/rHLUhCKAvYc?autoplay=1&mute=1&loop=1&rel=0&controls=0&playlist=rHLUhCKAvYc",
        yt: "https://youtu.be/rHLUhCKAvYc?si=YC87SWIRVC23EdDs",
        title: "UAV VTOL Mapping Plane",
        desc: "UAV Mapping Plane build and operate using VTOL mechanism.",
        date: "September 22, 2022",
        aosDelay: "100",
    }, {
        id: 2,
        link: "https://www.youtube.com/embed/7AUuecj9-Ag?autoplay=1&mute=1&loop=1&rel=0&fs=0&controls=0&playlist=7AUuecj9-Ag",
        yt: "https://youtu.be/7AUuecj9-Ag?si=JY6QayjFUIf4rKcQ",
        title: "Better Planning with Aerial Mapping",
        desc: "Case Study at Commercial Cow Farm in Indonesia.",
        date: "May 15, 2017",
        aosDelay: "300",
    }, {
        id: 3,
        link: "https://www.youtube.com/embed/UP8SSwIlCWM?autoplay=1&mute=1&loop=1&rel=0&fs=0&controls=0&playlist=UP8SSwIlCWM",
        yt: "https://youtu.be/UP8SSwIlCWM?si=lB3RkIe0J0xZku8S",
        title: "Precision Agriculture Using Drone",
        desc: "Precision Agriculture Using Drone.",
        date: "January 10, 2018",
        aosDelay: "500",
    }, {
        id: 4,
        link: "https://www.youtube.com/embed/WhZbCocadmk?autoplay=1&mute=1&loop=1&rel=0&fs=0&controls=0&playlist=WhZbCocadmk",
        yt:"https://youtu.be/WhZbCocadmk?si=2Out_tKe-K4TNX-t",
        title: "Full 3D Mapping",
        desc: "Peta 3D & Video Kawasan Cijeruk - Gunung Salak.",
        date: "March 04, 2018",
        aosDelay: "700",
    }
]

const VideosComp = () => {
    return( 
        <>
        <div className='bg-gray-100 dark:bg-dark2 text-black dark:text-white py-10 pb-14'>
            <div className="container">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">Our Videos</h1>
                {/* VIDEO SECTION */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {VideosData.map((video) => (
                    <VideoCard key={video.id} {...video}/>
                ))}
            </div>
            <div data-aos="fade-up" data-aos-offset="0" className='text-center'>
                <button className='btn-primary p-3' onClick={() => window.open("https://www.youtube.com/@aerialview1860", "_blank")}>View All Videos</button>
            </div>
            </div>
        </div>
        </>
    );
}; 

export default VideosComp;