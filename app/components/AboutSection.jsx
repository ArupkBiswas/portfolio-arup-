"use client";
import React, { startTransition, useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content : (
      <table border="1" cellspacing="0" cellpadding="8">
        <tr>
        <td>React.js</td>
        <td>PostgreSQL</td>
        <td>JavaScript</td>
      </tr>
      <tr>
        <td>Java</td>
        <td>Spring Boot</td>
        <td>Spring MVC</td>
      </tr>
      <tr>
        <td>Docker</td>
        <td>ORM Tools</td>
        <td>Hibernate</td>
        <td>JPA</td>
      </tr>
      </table>
    )
  },
  {
    title: "Education",
    id: "education",
    content : (
      <ul className='list-disc pl-2'>
        <li>M.Tech in CSE, VIT Vellore</li>
        <li>B.Tech in CSE, SIEM Siliguri</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content : (
      <ul className='list-disc pl-2'>
        <li>Certified in Advance Java</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, stateTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white'>
      <div className='md:grid md md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/working_dude.jpeg" alt='working_dude' width={500} height={500} />
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p>
              As a Senior Software Engineer with 5 years of experience, 
              I specialize in both back-end services and front-end UI development.
              In my carrier I have engineered robust, scalable, and user-centric applications 
              that meet the demands of the modern digital landscape. Collaborated closely with other developers, 
              designers, and stakeholders to deliver high-quality software solutions.  
              I am passionate about delivering impactful results that drive business success.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifactions</TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
      </div>
    </section>
  )
}

export default AboutSection