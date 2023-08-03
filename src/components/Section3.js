import React from 'react'

const Section3 = () => {
  return (
    <div className='bg-blue-200'>
      <section className=" body-font">
  <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="./Images/9.jpeg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-right items-center text-centre ">
      <h1 className=" sm:text-5xl text-3xl mb-3 font-bold text-red-800  ">Relationship
      <h1 className='font-Extrabold text-right text-black'>We're your Business Partner</h1>
      </h1>
      <p className="mb-8 leading-relaxed mt-4 text-black font-medium ">We believe in building partnerships,not customer acquistion.Above Everything,<br></br>all we do comes from a business owner's point of view,<br></br>and we treat your organization as ours,.Our processes,our prices and our deliverables are clear to <br></br>us.For the better part?You Get the peace of mind that we will bend backwards in <br></br> order to do what ever takes to expand your business.</p>
      <div className="flex justify-right float-right">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Learn more</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section3
