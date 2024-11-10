"use client"
import React, { use } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section className='lg:py-16'>
     <div className="grid grid-cols-1 sm:grid-cols-12">
       <div className='col-span-7 place-self-center sm:text-left'>
        <h1 className='text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hey, I'm{" "}</span> 
         <br/>
         <TypeAnimation
      sequence={[
        'Amna',
        1000, 
        'Web and App Developer',
        1000,
        'UX/UI Designer',
        1000,
        'Software Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
       </h1>
        <p className='text-[#ccb9e5] text-base sm:text-lg mb-6 lg:text-xl'>
        I'm a passionate developer eager to build user-friendly digital experiences using technologies like React, Node.js, and React Native.
        </p>
        <div>
            <button className='bg-gradient-to-r from-[#c5bbd1] to-[#937bb5] hover:bg-slate-600 text-[#11071F] sm:w-fit w-full px-6 py-3 rounded-full  mr-4'>
            Hire Me
             </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
           <div className='rounded-full bg-[#11071F] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
             <Image
             src="/image/hero.png"
             alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
             />
            </div>
         </div>
     </div>
    </section>
  )
}

export default HeroSection
