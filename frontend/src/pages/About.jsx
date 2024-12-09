import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
         <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>

    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
      <p>At Forever Fashion Cloth Collection, quality is at the heart of everything we do. We are committed to delivering premium, durable, and stylish apparel that stands the test of time. </p>
      <p>Our team ensures that every piece in our collection goes through a rigorous quality assurance process, from the selection of high-grade fabrics to the final inspection of each garment.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission is to ensure that every customer feels valued and supported, from the moment you explore our collection to when you receive your purchase.</p>

      </div>

    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Quality Assurance:</b>
        <p >At Forever Fashion Cloth Collection, quality is at the heart of everything we do. We are committed to delivering premium, durable, and stylish apparel that stands the test of time. </p>

      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Convenience:</b>
        <p >At Forever Fashion Cloth Collection, we believe that fashion should fit seamlessly into your lifestyle. That’s why we prioritize convenience in every aspect of our brand. </p>

      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Exceptional Customer service :</b>
        <p >Our mission is to ensure that every customer feels valued and supported, from the moment you explore our collection to when you receive your purchase.</p>

      </div>

    </div>
    <NewsletterBox/>
    </div>
    
  )
}

export default About