import React from 'react';
import {FaArrowRight} from 'react-icons/fa6';

const VideoCard = ({link, yt, title, desc, date, aosDelay}) => {
    return (
        <>
            <div data-aos="fade-up" data-aos-delay={aosDelay} className='dark:text-dark_text text-primary group'>
                <div className='overflow-hidden'>
                    <iframe src={link} width="560" height="315" title='YouTube Video Player' frameborder="0" className='mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300' allowfullscreen muted></iframe>
                    <div className='space-y-2 p-4 ml-6 bg-slate-200 dark:bg-slate-950 -translate-y-10' onClick={() => window.open(yt, "_blank")}>
                        <h1 className='line-clamp-1 text-2xl font-semibold'>{title}</h1>
                        <h1 className='line-clamp-1 text-gray-600 text-sm'>{desc}</h1>
                        <span className='line-clamp-1 text-xs text-slate-400'>{date}</span>
                        <div className='flex justify-end pr-4 text-gray-500'>
                            <FaArrowRight className='group-hover:text-primary group-hover:translate-x-2 duration-300'/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard;