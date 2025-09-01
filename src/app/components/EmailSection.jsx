"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

    //     const response = await fetch(endpoint, options);
    //     const resData = await response.json();

    //     if (response.status === 200) {
    //         console.log("Message sent.");
    //         setEmailSubmitted(true);
    //     }
    // };
        try {
            console.log("Sending request to:", endpoint);
            console.log("Request data:", data);
            
            const response = await fetch(endpoint, options);
            console.log("Response status:", response.status);
            
            const resData = await response.json();
            console.log("Response data:", resData);

            if (response.status === 200) {
                console.log("Message sent successfully!");
                setEmailSubmitted(true);
                // Optional: Reset form
                e.target.reset();
            } else {
                console.log("Failed to send message. Status:", response.status);
                console.log("Error:", resData);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div 
                className="rounded-full h-80 w-80 z-50 blur-lg absolute top-4/5 -left-2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(ellipse at center, #581c87, transparent)'
                }}
            ></div>
            <div className="z-10">
                <h5 className="text-lg font-semibold">Let's Connect!</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm actively seeking new opportunities to contribute my skills and grow as a developer. 
                    Whether you're looking for a dedicated team member or have an exciting project in mind, I'd love to hear from you. 
                    Let's connect and explore how we can work together to create something amazing.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://linkedin.com">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium" >
                            Your email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray/100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="youremail@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium" >
                            Subject
                        </label>
                        <input 
                            name="subject"
                            type="text" 
                            id="subject" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray/100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Subject/Title of your message"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows="4" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray/100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Write your message..."
                        />
                    </div>
                    <button
                        type ="submit"
                        className="bg-purple-500 hover:bg-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >Send Message</button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Your message has been sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection