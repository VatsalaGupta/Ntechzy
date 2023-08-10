import React from 'react'

const Header = () => {
    return (
        <div className='mb-40 bg-blue-900'>
            <div>
                <section className=" body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold text-white lg:ml-40  ">We Provide💡<br/>
                                Smart Business<br/>
                                Solutions</h1>
                            <p className="text-sm mt-2 text-white w-full lg:ml-40">Grow your Business With Us Best Business Solutions</p>
                            <div className="flex lg:flex-row md:flex-col mt-5 lg:ml-40 ">
                                <button className="bg-gray-100  text-black font-semibold text-2xl inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">Get Started
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mr-20">
                            <img className="object-cover object-center rounded" alt="hero" src="./Images/21.jpeg" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Header
