import React from 'react';
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/models/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() =>{
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            }
            )
        }
    )
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="./images/bg.webp" alt="background" />
            </div>

            <div className="hero-layout">
                {/* LEFT: Hero */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                        <img
                            src={word.imgPath}
                            alt={index}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
                        <p className="text-white-50 md:text-xl text-base relative z-10 pointer-events-none">
                            Hi, I’m Rohan, a full stack developer.
                        </p>
                        <p className="text-white-50 md:text-lg text-sm relative z-10 pointer-events-none mt-2 leading-relaxed md:max-w-xl max-w-sm">
                            I build scalable, cloud-native apps using <strong>Python</strong>, <strong>Java</strong>, <strong>React</strong>, and <strong>AWS</strong> — optimizing pipelines, APIs, and real-time experiences.
                        </p>
                        </div>


                        <Button
                            text="See My Work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>

                {/* 3d Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    );
};
export default Hero;
