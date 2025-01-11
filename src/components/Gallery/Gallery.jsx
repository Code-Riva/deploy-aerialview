import React from 'react';
import imgShowcases from '../../assets/Showcase/showcase';

const imgList = [
    {
        id:1,
        img: imgShowcases.showcase1,
        title: "Showcase 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus sunt iure molestias eum, eaque possimus dolorum assumenda nobis tempore?",
    },{
        id:2,
        img: imgShowcases.showcase2,
        title: "Showcase 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus sunt iure molestias eum, eaque possimus dolorum assumenda nobis tempore?",
    },{
        id:3,
        img: imgShowcases.showcase3,
        title: "Showcase 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus sunt iure molestias eum, eaque possimus dolorum assumenda nobis tempore?",
    },{
        id:4,
        img: imgShowcases.showcase4,
        title: "Showcase 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus sunt iure molestias eum, eaque possimus dolorum assumenda nobis tempore?",
    }
]

const Gallery = () => {
    return(
        <>
            <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-900 dark:text-white duration-300'>
            {/* Gallery Section */}
            <div className="container pb-8 sm:pb-0">
                <Slider>
                    .
                </Slider>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* Text Content Section */}   
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
                            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error suscipit consequuntur eaque fugit earum! Fugiat?</p>
                            <div>
                                <button className='btn-primary'> Button </button>
                            </div>
                        </div> 
                        {/* Image Section */}
                        <div className='order-2 sm:order-1'>
                            <div className='relative z-10'>
                                <img src={imgShowcases.showcase1} alt="showcase" className='w-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'/>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            </div>     
        </>
    )
}

export default Gallery;