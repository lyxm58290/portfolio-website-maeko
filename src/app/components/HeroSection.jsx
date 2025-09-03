"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-[#FAF7F0] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4C41] to-[#E8DCC6]">
                        Hello I'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Maeko!',
                            1000, // Waits 1 second before starting the next animation
                            'a Data Scientist',
                            1000, // Waits 1 second before starting the next animation
                            'a Software Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    A third-year Computer Science student <br /> 
                    interested in the field of AI and Data Science
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#4A2C17] via-[#7B4B2A] to-[#9CAF88] hover:bg-slate-200 text-[#E8DCC6]">
                        Hire Me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#4A2C17] via-[#7B4B2A] to-[#9CAF88] hover:bg-[#6D4C41] text-[#E8DCC6] mt-3">
                        <span className="block bg-[#3C2414] hover:bg-[#6D4C41] rounded-full px-5 py-2">
                            <a href="images/projects/Resume_MaekoLoo(NTU).pdf" download="Maeko(NTU)_Resume">
                                Download CV
                            </a>
                        </span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#6D4C41] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={250}
                        height={300}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection;