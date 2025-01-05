import React from 'react'
import Slider from './_components/Slider'
import Hotellisting from './_components/Hotellisting'
import AboutUs from './_components/About'
import Testimonial from './_components/Testimonial'
import WhyChooseUs from './_components/WhyChooseUs'

export default function page() {
  return (
   <>
   <Slider/>
   <AboutUs/>
   <Hotellisting activepage='home' />
   <WhyChooseUs/>
   <Testimonial/>
   </>
  )
}
