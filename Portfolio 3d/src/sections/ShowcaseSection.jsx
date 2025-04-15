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
            <TitleHeader title="Project Showcase" sub="✨ Highlighting My Key Projects" />
            <br />
            <div className="showcaselayout">
              {/* Big Project */}
              <div className="first-project-wrapper" ref={project1Ref}>
                <div className="image-wrapper">
                  <img src="./images/project1.webp" alt="AniExplorer" />
                </div>
                <div className="text-content">
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
                  <p className="text-white-50 md:text-base">
                    Built a Flask + React-based anime recommendation system trained on 71M ratings. Exposed prediction endpoints via REST API and hosted on AWS EC2.
                    <br />
                    ⚠️ <strong>Challenge:</strong> Genre embeddings added massive payloads — slowing inference from 2s to 2+ mins.
                    <br />
                    📌 <strong>Solution:</strong> Deployed a slimmed model using only user-anime embeddings for optimal UX without losing core prediction quality.
                  </p>
      
                  <details className="mt-4 bg-neutral-900/60 backdrop-blur p-4 rounded-lg border border-neutral-800">
                    <summary className="cursor-pointer text-white font-semibold text-lg hover:underline">
                      Compare Model Architectures
                    </summary>
                    <div className="mt-4 text-white-50 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2 text-white text-base">🔹 Without Genre Embedding</h4>
                        <p className="text-xs leading-relaxed">
                          • User and Anime inputs → 128-dim embedding layers <br />
                          • Dot product → Flatten → Dense + BatchNorm + Activation <br />
                          • ⚡ Fast and light (13.9M params, ~2s inference)
                        </p>
                      </div>
      
                      <div>
                        <h4 className="font-bold mb-2 text-white text-base">🔸 With Genre Embedding</h4>
                        <p className="text-xs leading-relaxed">
                          • Adds 44-dim genre input → Dense + BatchNorm <br />
                          • Merged with embeddings → Multiple Dense + Dropout layers <br />
                          • 🐢 Slow (~2–3 min inference, 14M+ params)
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-amber-400 font-medium text-sm">
                      ⚖️ Trade-off: Opted for the genre-free model to enhance interactivity and speed in production.
                    </div>
                  </details>
                </div>
              </div>
      
              {/* Two Smaller Projects */}
              <div className="project-list-wrapper overflow-hidden">
                {/* MusicHub */}
                <div className="project" ref={project2Ref}>
                  <div className="image-wrapper bg-gray-600">
                    <img src="./images/project2.webp" alt="Spotify Tracker" />
                  </div>
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
                  <p className="text-white-50 text-base mt-1">
                    Flask + MySQL app integrating Spotify APIs via RapidAPI. Enabled RBAC, playlist browsing, and auto-deploy via GitHub Actions to Heroku.
                  </p>
                </div>
      
                {/* CineTracker */}
                <div className="project">
                  <div className="image-wrapper bg-gray-800" ref={project3Ref}>
                    <img src="./images/project3.webp" alt="CineTracker" />
                  </div>
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
                    Built using FastAPI + MongoDB with real-time leaderboard and React game UI for rating and reviewing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}      
export default ShowcaseSection
