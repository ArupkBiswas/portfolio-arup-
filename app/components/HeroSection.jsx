'use client';
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-middle-600 to-secondary-600">Hello, I'm {""}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Arup',
                                1500, // wait 1s before replacing "Mice" with "Hamsters"
                                'Fullstack Developer',
                                1500,
                                'UI/UX Designer',
                                1500,
                                'Integration Engineer',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    Senior Software Engineer 
                    | Full Stack Developer 
                    | 5 Years of Experience in Backend & Frontend Development 
                    | Agile & Cross-Functional Team Expertise
                    </p>
                    <div> 
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-middle-600 to-secondary-600 hover:bg-slate-200 text-white">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-middle-600 to-orange-600 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Downnload CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#28282B] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                        height={300}
                        width={300}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;