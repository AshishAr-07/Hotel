"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {

            if (window.pageYOffset > 300) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }

        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)

    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`w-full sticky top-0 left-0 z-50  text-black shadow-sm ${isScrolled ? 'backdrop-blur-md shadow-md bg-gray-50/90' : 'bg-white'}`}>
            <div className="max-w-7xl py-3 mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href='/'> <div className="flex-shrink-0 flex items-center">
                        <span className="text-3xl font-bold ">Hotel</span>
                    </div></Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="px-3 py-2 text-lg  font-medium">
                            Home
                        </Link>
                        <Link href="/about" className=" px-3 py-2 text-lg font-medium">
                            About
                        </Link>
                        <Link href="/hotels" className="   px-3 py-2 text-lg font-medium">
                            Hotels
                        </Link>
                        <Link href="/contact">
                            <button className='bg-orange-500 text-white px-10 rounded-lg py-2 text-lg font-medium'>Book Now</button>
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:bg-gray-100"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-base font-medium  rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-base font-medium   rounded-md"
                        >
                            About
                        </Link>
                        <Link
                            href="/hotels"
                            className="block px-3 py-2 text-base font-medium  rounded-md"
                        >
                        Hotels
                        </Link>
                        <Link href="/contact">
                            <button className='bg-orange-500 text-white w-full rounded-lg py-2 text-lg font-medium'>Book Now</button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;