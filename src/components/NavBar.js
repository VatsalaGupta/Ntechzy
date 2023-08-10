import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <div className="flex justify-center">
                <nav className="w-full items-center  mx-auto px-5  flex justify-center flex-wrap gap-5 mb-5 ">
                    <div className=" flex flex-col lg:flex-row  sm:items-right md:items-center  ">
                        <div className='flex sm:flex-row justify-between'>
                        <img className='h-24 w-40' src='./Images/logo.jpg'></img>
                        <ul className="  lg:flex items-center text-[18px] font-semibold hidden md:flex ">
                            <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#">Home</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">About Us</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Portfolio</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Services</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Blog</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Contact Us</a></li>
                        </ul>
                        <button className='border-2 text-center text-xl font-semibold bg-red-500 hidden md:flex w-18 h-10 md:w-32 md:h-12  md:mb-2 lg:mb-0 mb-5 p-2 md:mt-7 rounded-full text-white min-w-[100px] hover:bg-blue-700' >Get Quote</button>

                        <div onClick={handleNav} className='block md:hidden'>
                            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </div>
                        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white bg-[#c3d6fa] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] '}>
                            <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                <a href="#">Home</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">About Us</a>
                            </li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Portfolio</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Services</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Blog</a></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                href="#">Contact Us</a></li>
                            <button className='border-2 bg-red-500  w-30 h-10 md:w-32 md:h-12 md:text-sm md:mb-2 lg:mb-0 mb-6 p-2  rounded-full text-white min-w-[100px] hover:bg-blue-700' >Get Quote</button>
                        </ul>
                        </div>
                        <ul className='flex px-20 '>
                            <li className='ml-3'>
                                <a href='#'><img className='h-10 w-30' src='./Images/facebook.svg'></img></a>
                            </li>
                            <li className='ml-3'>
                                <a href='#'><img className='h-10 w-30' src='./Images/twitter.svg'></img></a>
                            </li>
                            <li className='ml-3'>
                                <a href='#'><img className='h-10 w-30' src='./Images/linkedin.svg'></img></a>
                            </li>
                            <li className='ml-3'>
                                <a href='#'><img className='h-10 w-30' src='./Images/youtube.svg'></img></a>
                            </li>
                            <li className='ml-3'>
                                <a href='#'><img className='h-10 w-30' src='./Images/instagram.svg'></img></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
