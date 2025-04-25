import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP}  from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current];

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
      <div id="work" ref={sectionRef} className="app-showcase px-5 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <TitleHeader title="Project Showcase" sub="✨ Highlighting My Key Projects" />
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            {/* AniExplorer */}
            <div ref={project1Ref} className="flex flex-col">
              <div className="image-wrapper w-full h-96 overflow-hidden rounded-lg">
                <img
                  src="./images/project1.webp"
                  alt="AniExplorer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-content mt-4">
                <h2>
                  <a
                    href="http://52.201.211.120/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    AniExplorer: Anime Recommendation Portal
                  </a>
                </h2>
                <p className="text-white-50 md:text-base mt-2">
                  Built a Flask + React-based anime recommendation system trained on 71 M ratings.  
                  Exposed prediction endpoints via REST API and hosted on AWS EC2.
                  <br />
                  ⚠️ <strong>Challenge:</strong> Genre embeddings added massive payloads—slowing inference from 2 s to 2 + mins.
                  <br />
                  📌 <strong>Solution:</strong> Deployed a slimmed model using only user–anime embeddings for optimal UX without losing core prediction quality.
                </p>
                <details className="mt-4 bg-neutral-900/60 backdrop-blur p-4 rounded-lg border border-neutral-800">
                  <summary className="cursor-pointer text-white font-semibold text-lg hover:underline">
                    Compare Model Architectures
                  </summary>
                  <div className="mt-4 text-white-50 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-white text-base">
                    🔹 Without Genre Embedding
                  </h4>
                  <p className="text-xs leading-relaxed">
                    • User and Anime inputs → 128-dim embedding layers<br />
                    • Dot product → Flatten → Dense + BatchNorm + Activation<br />
                    • ⚡ Fast and light (13.9 M params, ~2 s inference)
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-base">
                    🔸 With Genre Embedding
                  </h4>
                  <p className="text-xs leading-relaxed">
                    • Adds 44-dim genre input → Dense + BatchNorm<br />
                    • Merged with embeddings → Multiple Dense + Dropout layers<br />
                    • 🐢 Slow (~2–3 min inference, 14 M+ params)
                  </p>
                </div>
              </div>
              <div className="mt-4 text-amber-400 font-medium text-sm">
                ⚖️ Trade-off: Opted for the genre-free model to enhance interactivity and speed in production.
              </div>
                </details>
              </div>
            </div>
    
            {/* GrindMate.AI */}
            <div ref={project4Ref} className="flex flex-col">
              <div className="image-wrapper w-full h-96 overflow-hidden rounded-lg">
                <img
                  src="./images/project4.webp"
                  alt="GrindMate.AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-content mt-4">
                <h2>
                  <a
                    href="https://grindmate-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    GrindMate.AI – GenAI-Powered DSA Coach
                  </a>
                </h2>
                <p className="text-white-50 md:text-base mt-2">
                  Built a full-stack AI-powered LeetCode companion to filter company-specific problems, track progress, and get instant AI help.
                  Added Random Practice mode to surface diverse problems for continuous skill sharpening.
                  <br />
                  🚀 <strong>Features:</strong>Automated question scraping by name, enabling users simply supply to debug via code/error input with walkthroughs and complexity analysis. 
                  <br />
                  🛠️ <strong>Tech Stack:</strong> Ruby on Rails, React, PostgreSQL, Groq LLaMA-3, CI/CD with Heroku, GitHub Actions, and Vercel.
                </p>
                <details className="mt-4 bg-neutral-900/60 backdrop-blur p-4 rounded-lg border border-neutral-800">
                  <summary className="cursor-pointer text-white font-semibold text-lg hover:underline">
                    Prompt Engineering Breakdown
                  </summary>
                  <div className="mt-4 text-white-50 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-white text-base">🔹 Basic Prompt</h4>
                  <p className="text-xs leading-relaxed">
                    • User message → LLM responds<br />
                    • <span className='text-red-500'>✘</span>Unstructured, inconsistent explanations<br />
                    • <span className='text-red-500'>✘</span> Missed edge cases in logic
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-base">🔸 Coached Prompt</h4>
                  <p className="text-xs leading-relaxed">
                    • Injects role + expected response format<br />
                    • Includes edge-case walkthroughs, code complexity, and error identification<br />
                    • ✔️ Highly structured and helpful
                  </p>
                </div>
              </div>
              <div className="mt-4 text-amber-400 font-medium text-sm">
                🎯 Conclusion: Reduced randomness in answers by tuning temperature to 0.5 & engineering a strict role/personality in system prompts
              </div>
                </details>
              </div>
            </div>
    
            {/* MusicHub */}
            <div ref={project2Ref} className="flex flex-col">
              <div className="image-wrapper w-full h-80 overflow-hidden rounded-lg bg-gray-600">
                <img
                  src="./images/project2.webp"
                  alt="MusicHub"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h2>
                  <a
                    href="https://musichub-da725be2f015.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    MusicHub – Spotify Tracker System
                  </a>
                </h2>
                <p className="text-white-50 text-base mt-2">
                  Flask + MySQL app integrating Spotify APIs via RapidAPI. Enabled RBAC, playlist browsing, and auto-deploy via GitHub Actions to Heroku.
                </p>
              </div>
            </div>
    
            {/* CineTracker */}
            <div ref={project3Ref} className="flex flex-col">
              <div className="image-wrapper w-full h-80 overflow-hidden rounded-lg bg-gray-800">
                <img
                  src="./images/project3.webp"
                  alt="CineTracker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h2>
                  <a
                    href="https://cine-tracker-105f354f7aed.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    CineTracker – Movie Review Platform
                  </a>
                </h2>
                <p className="text-white-50 text-base mt-2">
                  Built using FastAPI + MongoDB with real-time WebSocket leaderboard and React game UI for rating and reviewing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );   
    
}      
export default ShowcaseSection
