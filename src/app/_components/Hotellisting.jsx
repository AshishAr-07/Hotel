import React from 'react'
import { IoBedOutline } from "react-icons/io5"
import { GiShower } from "react-icons/gi"
import { TfiRulerAlt2 } from "react-icons/tfi"
import Image from 'next/image'
import Wrapper from './Wrapper'

export default function Hotellisting({activepage = "hotels"}) {
    const property = [
        {
          id: 1,
          src: "/s1.webp",
          add: "Hotel Maricom, India",
          price: "₹12000",
          room: "4",
          bath: "2",
          area: "1200"
        },
        {
          id: 2,
          src: "/s2.webp",
          add: "Airlift Hotel, India",
          price: "₹1300000",
          room: "4",
          bath: "2",
          area: "1200"
        },
        {
          id: 3,
          src: "/s1.webp",
          add: "Seapool Hotel",
          price: "₹14000",
          room: "4",
          bath: "2",
          area: "1200"
        },
        {
            id: 4,
            src: "/s1.webp",
            add: "Seapool Hotel",
            price: "₹14000",
            room: "4",
            bath: "2",
            area: "1200"
          },
          {
            id: 5,
            src: "/s2.webp",
            add: "Airlift Hotel, India",
            price: "₹1300000",
            room: "4",
            bath: "2",
            area: "1200"
          },
          {
            id: 6,
            src: "/s1.webp",
            add: "Hotel Maricom, India",
            price: "₹12000",
            room: "4",
            bath: "2",
            area: "1200"
          },
          {
            id: 7,
            src: "/s1.webp",
            add: "Seapool Hotel",
            price: "₹14000",
            room: "4",
            bath: "2",
            area: "1200"
          },
          {
            id: 8,
            src: "/s2.webp",
            add: "Airlift Hotel, India",
            price: "₹1300000",
            room: "4",
            bath: "2",
            area: "1200"
          },
          {
            id: 9,
            src: "/s1.webp",
            add: "Hotel Maricom, India",
            price: "₹12000",
            room: "4",
            bath: "2",
            area: "1200"
          },
    ]

    // Display only 3 items if activepage is home, otherwise show all
    const displayProperties = activepage === "home" ? property.slice(0, 3) : property

    return (
        <>
        <Wrapper>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {displayProperties.map((item) => (
                    <div key={item.id} className="w-full border-2 rounded-t-md border-gray-100 shadow-lg">
                        <div className="relative">
                            <Image 
                                src={item.src} 
                                alt={`img${item.id}`} 
                                width={500} 
                                height={500} 
                                className="rounded-t-md w-full" 
                            />
                        </div>
                        <p className="pt-4 px-3 sm:px-5 text-lg sm:text-base">{item.add}</p>
                        <div className="flex justify-between px-3 pb-5 pt-2">
                            <p className="font-semibold text-lg sm:text-xl mb-2 sm:mb-0">{item.price}</p>
                            <div className="flex gap-2 sm:gap-4 items-center text-gray-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <IoBedOutline size={18} />
                                    {item.room}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GiShower size={18} />
                                    {item.bath}
                                </span>
                                <span className="flex items-center gap-1">
                                    <TfiRulerAlt2 size={16} />
                                    {item.area}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
        </>
    )
}