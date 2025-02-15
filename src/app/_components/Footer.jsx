import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Link from 'next/link';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import Wrapper from './Wrapper';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-white '>
      <Wrapper className='pb-0'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-4 '>
          <section className='flex flex-col gap-2 color'>
            <Link href='/'><h1 className='text-3xl'>Interview4u</h1></Link>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.veniam quaerat vitae iure aliquid nam officiis.</h2>
            <div className='flex gap-2 mt-2'>
              <Link href='#'><span><FaInstagram size={25} /></span></Link>
              <Link href='#'> <span><FaFacebookSquare size={25} /></span></Link>
              <Link href='#'><span><FaWhatsapp size={25} /></span></Link>
            </div>
          </section>
          <section className=' flex flex-col gap-2 color'>
            <h1 className='text-xl pb-2 font-medium '>Useful Links</h1>
            <Link href='#' ><h2>Home</h2></Link>
            <Link href='#' ><h2>About</h2></Link>
            <Link href='#' ><h2>Products</h2></Link>
            <Link href='#' ><h2>Contact</h2></Link>
          </section>
          <section className='flex flex-col gap-4  color'>
            <h1 className='text-xl pb-2 font-medium '>Get in Touch</h1>
            <h2 className='flex gap-5 items-center'><IoLocationOutline size={28} />  Dwarka</h2>
            <h2 className='flex gap-5 items-center'><BsTelephone size={24} /> +91 444444444</h2>
            <h2 className='flex gap-5 items-center'><GoMail size={24} /> hello@domain.com</h2>
          </section>

        </div>
        <div className='w-full mt-8 text-lg  py-5 border-t border-white '><p className='text-center'>© Interview4u 2024 | All Rights Reserved  </p></div>
      </Wrapper>
    </footer>
  )
}