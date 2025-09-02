"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image"
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C/C++</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <dl>
                    <dt><strong>Nanyang Technological University, Singapore</strong></dt>
                    <dd>Computer Science</dd>
                    <dd>August 2023 - June 2027</dd>
                    
                    <dt><strong>Singapore Polytechnic</strong></dt>
                    <dd>Aerospace Electronics</dd>
                    <dd>April 2019 - April 2023</dd>
                </dl>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id:"certifications",
        content: (
            <ul className="list-disc pl-2">
                <dt><strong>Harvard CS50: Introduction to Computer Science</strong></dt>
                <dd>January 2025</dd>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} alt="About me image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base ld:text-lg">
                        As a third-year Computer Science student at NTU, I'm a driven programmer with a good foundation in languages like Python, C/C++, JavaScript, SQL, HTML, and CSS. 
                        With a passion for continuous learning, I thrive in environments where I can expand my skill set and tackle new challenges. 
                        As a collaborative team player, I enjoy working with others to craft innovative solutions that make a meaningful impact.
                        <br></br>
                        Beyond programming, I indulge in a variety of creative pursuits, including crocheting, baking, cooking, and playing musical instruments (I can play 5 🤭). 
                        This diverse range of interests fuels my problem-solving skills and inspires fresh perspectives in my programming endeavors.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills {" "}</TabButton>

                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {" "} Education {" "}</TabButton>

                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {" "} Certifications {" "}</TabButton>
                    </div>
                    
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;