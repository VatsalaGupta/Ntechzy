import React from 'react'

const Section2 = () => {
  return (
    <div className='bg-indigo-300 w-full h-full'>
      <section className="text-gray-600 body-font md:flex-row flex-col ">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl  title-font mb-4 text-red-500 font-extrabold">OUR SERVICES</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-4xl font-bold">WE ARE SPECIALIZED IN THE FOLLOWING SERVICES</p>
      <div className='w-60 mt-10 flex md:flex-row flex-col sm:w-60   '>
        <img className='ml-2 flex mt-3' src='./Images/3.jpeg'></img>
        <img className='ml-2 flex mt-3' src='./Images/5.jpeg'></img>
        <img className='ml-2 flex mt-3' src='./Images/4.jpeg'></img>
        <img className='ml-2 flex mt-3' src='./Images/6.jpeg'></img>
        <img className='ml-2 flex mt-3' src='./Images/7.jpeg'></img>
        <img className='ml-2 flex mt-3 ' src='./Images/8.jpeg'></img>
      </div>
    </div>
   </div>
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center bg-indigo-300">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-20">
      <img className="object-cover object-center rounded " alt="hero" src="./Images/2.jpeg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h2 className="text-red-600 font-bold text-sm text-left">ERP Solutions</h2>
      <h1 className="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-extrabold">ERP Solutions</h1>
      <p className="mb-2 leading-relaxed">If your business does not yet have a website,then it is time to have an online presence that communicates the brand of your company,as well as that displays information about services or products.</p>
      <div className='flex'>
      <div className="flow-root ">
        <div className=" rounded text-lg mt-4 "><h1 className="text-center text-black  bg-white border-4 border-solid px-10">Interactive Features</h1></div>
        <div className=" rounded text-lg mt-4 " ><h1 className="text-center text-black  bg-white border-4 border-solid">UX & UI Implementaion</h1></div>
        <div className=" rounded text-lg mt-4"><h1 className="text-center text-black  bg-white border-4 border-solid">Mobile optimized</h1></div>
      </div>
      <div className="flow-root ml-10 md:text-sm">
        <div className=" rounded text-lg mt-4 "><h1 className="text-center text-black  bg-white border-4 border-solid px-10" >User Friendly</h1></div>
        <div className=" rounded text-lg mt-4 " ><h1 className="text-center text-black  bg-white border-4 border-solid">100% optimized</h1></div>
        <div className=" rounded text-lg mt-4"><h1 className="text-center text-black  bg-white border-4 border-solid">Speed Performnce</h1></div>
      </div>
      </div>
         <button className=" text-white bg-red-500 border-0 py-2 px-6 rounded text-lg mt-5">Get Proposal</button>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Section2
