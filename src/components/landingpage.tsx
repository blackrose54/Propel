import React from 'react'
import { Button } from './ui/button'

export const Landingpage = () => {
  return (
    <div className='w-full'>
     <section className="home1  w-full ">

<div className="container py-12 items-center justify-center m-auto">
  <div className="content space-y-8  text-center w-[50%] m-auto  " >

    <p className="text-3xl md:3.5xl lg:text-5xl font-serif">
   
     Find new and interesting projects with <span className='text-red-500'>Propel</span>
    </p>
    <br />
    <p className="text-0.5xl font-thin"> Explore all fashion brands and styles</p>
<br />
    <a href={''} className="bg-black text-white rounded-xl mt-2 py-2 "><Button >Connect with us</Button></a>
  </div>
  

</div>
</section>
<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bring a creative project to life</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed  text-3xl">On Propel:</p>
  </div>
  <div className="flex flex-wrap -m-4 text-center justify-center">

    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:shadow-lg hover:shadow-black/50 transition-all cursor-pointer">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
       
        <h1 className="title-font font-medium text-6xl text-green-500">100,000</h1>
        <p className="leading-relaxed text-4xl">Projects funded</p>
      </div>
    </div>
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:shadow-lg hover:shadow-black/50 transition-all cursor-pointer">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M3 18v-6a9 9 0 0118 0v6"></path>
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
        </svg> */}
        <h2 className="title-font font-medium text-6xl text-green-500">10,000</h2>
        <p className="leading-relaxed text-3xl">Investors Invested</p>
      </div>
    </div>
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:shadow-lg hover:shadow-black/50 transition-all cursor-pointer">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg> */}
        <h1 className="title-font font-medium text-6xl text-green-500">2,00,000</h1>
        <p className="leading-relaxed text-4xl">different Projects </p>
      </div>
    </div>
  </div>
</div>
</section>









</div>

  )
}