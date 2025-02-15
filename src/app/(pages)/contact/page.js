"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import Wrapper from "@/app/_components/Wrapper";


const contactMethods = [
  {
    icon: PiPhoneThin,
    title: "Phone",
    info: "+91 88001 99820",
  },
  {
    icon: CiMail,
    title: "Mail",
    info: "hello@domain.com",
  },
  {
    icon: CiLocationOn,
    title: "Address",
    info: "Plot No.164, Udyog Vihar Phase-6, Gurugram - 122004, Haryana (India)",
  },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject") || "NoSubject";

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formValues = Object.fromEntries(formData.entries());
      console.log("Form data:", formValues);
      console.log(subject);
      event.target.reset();
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error(error);
      alert("Error Please try Again Later");
    }
  };

  return (
    <form
      className="bg-white border rounded-lg border-gray-200 py-8 md:px-16 px-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col pb-4 gap-2">
        <label htmlFor="name" className="text-xl">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="border rounded-lg border-gray-200 py-2 px-3"
        />
      </div>
      <div className="flex flex-col pb-4 gap-2">
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border rounded-lg border-gray-200 py-2 px-3"
        />
      </div>
      <div className="flex flex-col pb-4 gap-2">
        <label htmlFor="phone" className="text-xl">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="border rounded-lg border-gray-200 py-2 px-3"
        />
      </div>
      <div className="flex flex-col pb-4 gap-2">
        <label htmlFor="message" className="text-xl">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="border rounded-lg border-gray-200 p-3"
          rows={6}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--maincolor)] text-white text-xl py-2 px-4 rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default function Component() {
  return (
    <Wrapper className="mb-6">
      <span className="w-full text-center "><h1 className="mb-12 text-4xl md:text-5xl ">Get in Touch</h1></span>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
        <section className="flex-col  md:flex space-y-10">
        { contactMethods.map((items,index)=> (
         <div key={index} className="flex gap-4">
         <span className="p-4 rounded-full bg-gray-900 text-white">
           <items.icon color="var(--maincolor)" size={30} />
         </span>
         <span className="flex flex-col">
           <h1 className="text-xl">{items.title}</h1>
           <p>{items.info}</p>
         </span>
         </div>
       
       ))}
    
        </section>
       <section>
      <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
      </section>
      </div>
    </Wrapper>
  );
}