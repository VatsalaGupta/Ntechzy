import React from 'react'

const Section4 = () => {
  return (
    <div className='bg-blue-300 h-full w-full'>
      <div className=' text-center font-bold'>
        <h1 className='  text-3xl text-red-600 py-5'>FREQUENT QUESTIONS</h1>
        <h1 className='text-black text-5xl'>F.A.Q</h1>
      </div>
      <div className='w-full  py-16 px-4 bg-blue-300 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <div className='border-4 bg-white px-5 shadow-sm border-blue-300 '>
          <h1 className=' text-red-600 font-semibold'>Why choose Ntechzy?</h1>
          <p className='text-gray-500'>We grow business by maximizing your business.Every company aims to make money so we do.But our main focus is to help your business to make more money.Our goal iss to maintain trust and long term relationship with our clients.</p>
          </div>
          <div className='border-4 bg-white px-5 mt-5 font-semibold shadow-sm border-blue-300'>
            <h1 className=''>How long will it take to make new website?</h1>
          </div>
          <div className='border-4 bg-white px-5 mt-5 font-semibold shadow-sm border-blue-300'>
            <h1 className=''>How long your SEO service include?</h1>
          </div>
          <div className='border-4 bg-white px-5 mt-5 font-semibold shadow-sm border-blue-300'>
            <h1 className=''>How can digital marketing help my business?</h1>
          </div>
        </div>
        <img className='w-[500px] mx-auto my-4' src='./Images/10.jpeg' alt='/' />
      </div>
    </div>

    </div>
  )
}

export default Section4
