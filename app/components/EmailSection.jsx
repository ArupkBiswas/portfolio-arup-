"use client"
import React, { useState } from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  
  // const [infoAlert, setInfoAlert] = React.useState();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  }
  // const [emailSubmitted, setEmailSubmitted] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     subject: e.target.message.value,      
  //   }
  //   const JSONdata = JSON.stringify(data); 
  //   const endPoint = "/api/send";
    
  //   const  options = {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSONdata
  //   }

  //   const response = await fetch(endPoint, options); 
  //   const resData = await response.json();
  //   if(resData.status === 200) {
  //     console.log('Message Sent...!');
  //     setEmailSubmitted(true);
  //   } else {
  //     console.log(resData);
  //   }
  // };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you! <br></br>
          Please reach out by the email.
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Email : arupkbiswas023@gmail.com
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ArupkBiswas">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/arup-biswas-4b6884102/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <from className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              placeholder="johndoe@xyz.com"
            />
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              placeholder="Subject goes here"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="messsage"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              placeholder="Let's talk about..."
           />
          </div>
          <button
            type="submit"
            className="bg-middle-500 hover:bg-middle-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" 
            onClick={handleSubmit} 
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className="text-yellow-500 text-sm mt-2 font-bold">
                It&apos;s a work in progress...
              </p>
            )
          }
        </from>
      </div>
    </section>
  );
};

export default EmailSection;
