import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs({ page = "" }) {
    return (
        <>
            <div className='w-full'>
                <Wrapper>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 border-2 px-6 py-8 rounded-2xl' >
                        <section className='flex flex-col items-start gap-2 text-justify'>
                            <h1 className='text-[var(--color)] font-bold'>About Us</h1>
                            <h2 className='md:text-5xl text-4xl'>Hotel Paradise</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            {page === 'home' && <Link href="/about"> <button className='bg-[var(--color)] py-2 px-6 mt-2 rounded-2xl text-white'>Know More</button></Link>}
                        </section>
                        <section>
                            <Image alt='about img' className='rounded-2xl' width={600} height={300} src="/s1.webp" />
                        </section>
                    </div>
                </Wrapper>

            </div>
        </>
    )
}