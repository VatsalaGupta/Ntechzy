import React from 'react'
import Carousel from 'nuka-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
const Fead = () => {
    return (
        <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={1000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 1 : 1}
            className=""> 
        <div className=' containe max-w- max-h-full bg-blue-300 '>
            <div className='py-5 px-8 '>
                <h1 className='text-white font-bold text-7xl py-5'>F e a d b a c k</h1>
                <h1 className='text-black font-bold text-3xl'>What Our Clients Say About Us</h1>
            </div>
            <div className='mt-32 px-96 flex flex-shrink-0 justify-center sm:flex-grow-0'>
                <div className='px-28 pt-20  border-4 bg-white rounded-tl-lg rounded-br-lg  shadow mb-20'>
                    <div><h1 className='font-semibold'>NTECHZY provided exceptional IT consulting services for my <br></br>business.Their team waas knowledgeable,efficient,and increase<br></br> productivity.Thank you NTECHZY for your expertise and<br></br> dedication!</h1></div>
                 <div className='flex'>
                 <img className='mt-6 w-11 h-11' src='./Images/20.jpeg'></img>
                    <div className="flex items-center pl-5 pb-5 space-x-1 text-center">
                        <svg className="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        
                    </div>
                 </div>
                 <div className=' text-center text-sm flex-row '>
                    <h1 className=''>Amit Kumar</h1>
                    <h1 className='font-bold'>Manager</h1>
                     </div>
            
                </div>
            </div>
        </div>
        </Carousel>
    )
}

export default Fead
