import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP}  from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    useGSAP(()=>{


        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:1, delay: 0.3 * (index +1),
                    scrollTrigger:{
                        trigger:card,
                        start: 'top-bottom-=80'
                    }}
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5})
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Big */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="./images/project1.png" alt="Ani" />
                        </div>
                        <div className="text-content">
                            <h2>1 Line Hook: Anime Recommendation System</h2>
                            <p className="text-white-50 md:text-xl">
                                Tech Used
                                What it is
                                Obstacles Encountered
                            </p>
                        </div>
                    </div>
                    {/* 2 Small */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="./images/project2.png" alt="Spotify Tracker" />
                            </div>
                            <h2>Spotify Tracker System</h2>
                        </div>
                        <div className="project" >
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="./images/project3.png" alt="Movie Tracker" />
                            </div>
                            <h2>CineTracker</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
