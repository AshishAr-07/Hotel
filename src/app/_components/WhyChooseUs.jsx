"use client";

import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { PiLightbulbFilament } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import Wrapper from "./Wrapper";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Sea View",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      icon: BsPatchCheck,
    },
    {
      title: "Free BreaKfast",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: PiLightbulbFilament,
    },
    {
      title: "Luxury rooms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoShieldCheckmarkOutline,
    },
    {
      title: "Customer Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: RiCustomerService2Line,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/s2.webp"
              alt="Why choose KAAL TOOLS"
              width={600}
              height={400}
              className="rounded-lg "
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-orange-100 p-3 rounded-full">
                    <feature.icon className="text-orange-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}