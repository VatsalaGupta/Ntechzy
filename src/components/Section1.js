import React from 'react'

const Section1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="./Images/1.jpeg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">About Us
      </h1>
      <p className="mb-8 leading-relaxed sm:text-lg text-1xl font-semibold">Ntechzy is an IT consulting firm based in Kanpur,UttarPradesh.Our team of experts provide Customized Solutions to bussiness of all sizes.
      <br></br>With a focus of innovation and efficiency,we help our clients optimize their technology infrastructure and improve their digital presence.<br></br>Contact us today  to learn how we can help your business thrive.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1
