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
    const project5Ref = useRef(null);

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current];

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
        <div id="work" ref={sectionRef} className='mt-20'>
          <div>
            <TitleHeader title="Project Showcase" sub="✨ Highlighting My Key Projects" />
          </div>
          <div className='app-showcase mb-0 px-5 md:px-20 pt-2 pb-4'>
            <div className="w-full">
              <div className="showcaselayout">
                <div ref={project5Ref} className="first-project-wrapper">
                  
                  {/* AutomatedML-AI */}
                  <div className="xl:h-[70vh] md:h-[50vh] h-96 relative rounded-xl overflow-hidden">
                    <img src="/images/project5.webp" alt="AutomatedML-AI" className='w-full h-full object-contain rounded-xl absolute inset-0 border border-red-300 border-12'/>
                  </div>
                  <div className="text-content">
                    <h2>
                      <a href="https://automated-ml-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400">
                        AutomatedML.AI: No-Code Model Trainer
                      </a>
                    </h2>
                    <ul className="list-disc list-inside text-white-50 space-y-1">
                      <li>
                        🚀 Spin up & benchmark <strong>8 cutting-edge models</strong>(Logistic → RandomForest → XGBoost → LightGBM → SVM → KNN → NaiveBayes → Linear) through an ultra-slick dashboard.
                      </li>
                      <li>
                        🔄 <strong>One-click preprocessing</strong>:label/one-hot encoding,scaling, Skew-fix, SMOTE balancing—all fully automated.
                      </li>
                      <li>
                        🤖 <strong>GROQ LLaMA-3 AI Coach</strong> delivers context-aware tips at every step, right when you need them.
                      </li>
                      <li>
                        📊 <strong>Instant visualizations</strong>: one-click generation of model performance charts, confusion matrices, feature-importance bar plots & interactive column heatmaps.
                      </li>
                      <li>
                        📑 <strong>Export magic</strong>: generate shareable PDF reports or Jupyter Notebooks in a single tap.
                      </li>
                      <li>
                        🐳 <strong>Dockerized microservices</strong> + <strong>GitHub Actions CI/CD</strong> ensure zero-hassle deployments.
                      </li>
                    </ul>

                  </div>
                </div>

                <div className="project-list-wrapper overflow-hidden">

                  {/* GrindMate.AI */}
                  <div className="project" ref={project2Ref}>
                    <div className="image-wrapper">
                      <img
                      src="./images/project2.webp"
                      alt="MusicHub"
                      className='border border-yellow-300 border-8 rounded-lg'
                    />
                    </div>
                    <h2>
                      <a
                        href="https://musichub-da725be2f015.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        MusicHub: Spotify Tracker System
                      </a>
                    </h2>
                    <p className="text-white-50 text-base mt-2">
                      Flask + MySQL app integrating Spotify APIs via RapidAPI. Enabled RBAC, playlist browsing, and auto-deploy via GitHub Actions to Heroku.
                    </p>
                  </div>

                  {/* CineTracker */}
                  <div className="project" ref={project3Ref}>
                    <div className="image-wrapper">
                        <img
                        src="./images/project3.webp"
                        alt="CineTracker"
                        className='border border-blue-300 border-8 rounded-lg'
                      />
                    </div>
                    <h2>
                    <a
                      href="https://cine-tracker-105f354f7aed.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-400"
                    >
                      CineTracker: Movie Review Platform
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
          <div className='px-5 mt-0 md:px-20 pb-8 py-2'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
              
              {/* AniExplorer */}
              <div ref={project1Ref} className="flex flex-col">
                <div className="image-wrapper w-full h-96 overflow-hidden rounded-lg border border-green-300 border-10">
                  <img
                    src="./images/project1.webp"
                    alt="AniExplorer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mt-4">
                  <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mt-5'>
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
                <div className="image-wrapper w-full h-96 overflow-hidden rounded-lg border border-purple-300 border-10">
                  <img
                    src="./images/project4.webp"
                    alt="GrindMate.AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mt-4">
                  <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mt-5'>
                    <a
                      href="https://grindmate-ai.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-400"
                    >
                      GrindMate.AI: GenAI-Powered DSA Coach
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
            </div>            
          </div>
        
        </div>
     
    );   
    
}      
export default ShowcaseSection
