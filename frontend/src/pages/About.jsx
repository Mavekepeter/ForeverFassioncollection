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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo adipisci voluptas animi blanditiis nostrum incidunt corporis facere quia laudantium neque, eaque consequatur! Natus quisquam quas veniam vel velit! Ad.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati et cum doloribus, quidem nostrum autem magni perspiciatis nihil neque, corporis ipsa necessitatibus ducimus dicta id deserunt voluptas eligendi, mollitia recusandae.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam officiis possimus mollitia odit illum quasi, ullam aut sapiente sed fuga ea repudiandae obcaecati doloremque, eveniet commodi neque minus. Amet, veniam!</p>

      </div>

    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reiciendis nam exercitationem aliquid neque rerum quidem iste corporis iure illum culpa fugit consequatur tempora facilis voluptas molestiae, id minus repellat?</p>

      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reiciendis nam exercitationem aliquid neque rerum quidem iste corporis iure illum culpa fugit consequatur tempora facilis voluptas molestiae, id minus repellat?</p>

      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer service :</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reiciendis nam exercitationem aliquid neque rerum quidem iste corporis iure illum culpa fugit consequatur tempora facilis voluptas molestiae, id minus repellat?</p>

      </div>

    </div>
    <NewsletterBox/>
    </div>
    
  )
}

export default About