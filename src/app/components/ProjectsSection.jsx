"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "PayperPlan",
        description: "A chatbot that calculates your monthly pay!",
        image: "/images/projects/1.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/lyxm58290/PayperPlan",
        previewUrl: "https://t.me/PayCalculatorBot"
    },
    {
        id: 2,
        title: "Hospital Management System",
        description: "An enhanced booking system for patients and hospital staffs.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/lyxm58290/SC2002-HMS",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Data-Driven Cancer Diagnosis Predictive Model",
        description: "A mini-project that can be used to accurately predict tumour types - benign or malignant",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/lyxm58290/DSAI_CancerData",
        previewUrl: "/"
    }
]
 
const ProjectsSection = () => {
    const[tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        inital: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

    return (
        <section>
            <h2 className="text-5xl font-bold mb-4 text-center">My Projects</h2>
            <div className="text-[#FFFEF7] flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag ==="All"}/>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag ==="Web"}/>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag ==="Mobile"}/>
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        inital="inital" 
                        animate={isInView ? "animate" : "inital"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                    
                ))} 
            </ul>
        </section>  
    );
};

export default ProjectsSection;