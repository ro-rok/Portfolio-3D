const words = [
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Fullstack Experience" },
    { value: 50, suffix: "+", label: "Features Shipped Across Frontend & Backend" },
    { value: 100, suffix: "%", label: "Zero-Downtime Deployments Achieved" },
    { value: 412, suffix: "$", label: "Infra Cost Saved Monthly on AWS" },
  ]; 

const navLinks = [
    {
        name: "Projects",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const logoIconsList = [
    { imgPath: "./images/logos/skill-logo-1.webp" },
    { imgPath: "./images/logos/skill-logo-2.webp" },
    { imgPath: "./images/logos/skill-logo-3.webp" },
    { imgPath: "./images/logos/skill-logo-4.webp" },
    { imgPath: "./images/logos/skill-logo-5.webp" },
    { imgPath: "./images/logos/skill-logo-6.webp" },
    { imgPath: "./images/logos/skill-logo-7.webp" },
    { imgPath: "./images/logos/skill-logo-8.webp" },
    { imgPath: "./images/logos/skill-logo-9.webp" },
    { imgPath: "./images/logos/skill-logo-10.webp" },
    { imgPath: "./images/logos/skill-logo-11.webp" },
    { imgPath: "./images/logos/skill-logo-12.webp" },
    { imgPath: "./images/logos/skill-logo-13.webp" },
    { imgPath: "./images/logos/skill-logo-14.webp" },
    { imgPath: "./images/logos/skill-logo-15.webp" },
    { imgPath: "./images/logos/skill-logo-16.webp" },
    { imgPath: "./images/logos/skill-logo-17.webp" },
    { imgPath: "./images/logos/skill-logo-18.webp" },
    { imgPath: "./images/logos/skill-logo-19.webp" },
    { imgPath: "./images/logos/skill-logo-20.webp" },
    { imgPath: "./images/logos/skill-logo-21.webp" },
    { imgPath: "./images/logos/skill-logo-22.webp" },
    { imgPath: "./images/logos/skill-logo-23.webp" },
    { imgPath: "./images/logos/skill-logo-24.webp" },
    { imgPath: "./images/logos/skill-logo-25.webp" },
    { imgPath: "./images/logos/skill-logo-26.webp" },
    { imgPath: "./images/logos/skill-logo-27.webp" },
    { imgPath: "./images/logos/skill-logo-28.webp" },
    { imgPath: "./images/logos/skill-logo-29.webp" },
    { imgPath: "./images/logos/skill-logo-30.webp" },
    { imgPath: "./images/logos/skill-logo-31.webp" },
];

const abilities = [
    {
        imgPath: "./images/backend.webp",
        title: "Backend Architecture",
        desc: "Designing robust REST/GraphQL APIs, SQL/NoSQL database architecture , event-driven systems, and observability-ready infra using FastAPI, Flask, Spring Boot & Node.",
      },
      {
        imgPath: "./images/performance-tune.webp",
        title: "Performance Optimization",
        desc: "Optimizing backend throughput using Redis, PostgreSQL indexing, load balancing, and profiling tools like Flamegraphs & New Relic.",
      },
    {
      imgPath: "./images/devops-gear.webp",
      title: "DevOps & Automation",
      desc: "Automating deployments and infra using GitHub Actions, Terraform, and serverless technologies to enable frictionless feature delivery.",
    },
    {
        imgPath: "./images/cloud-ops.webp",
        title: "Cloud-Native Engineering",
        desc: "Building scalable, fault-tolerant apps on AWS using EC2, S3, Lambda, Docker, and Kubernetes with CI/CD-first pipelines.",
      },
    {
      imgPath: "./images/frontend-ui.webp",
      title: "Frontend Excellence",
      desc: "Crafting accessible, SEO-optimized UIs using React, Tailwind, and Angular—prioritizing component reusability, UX responsiveness, and fast LCP.",
    },
    {
      imgPath: "./images/ai-brain.webp",
      title: "LLM & AI Integration",
      desc: "Designing GenAI-powered workflows with OpenAI APIs, real-time summarizers, and feedback-aware agents using telemetry-driven development.",
    },
  ];
  
  
const expCards = [
    {
      review: "Led a cache optimization initiative improving Redis hit rate from 60% to 90%, directly reducing backend load while supporting 5x query volume increase with zero latency regression.",
      imgPath: "./images/exp0.webp",
      logoPath: "./images/logo0.webp",
      title: "Programmer Analyst",
      date: "Dec 2024 – Present",
      responsibilities: [
        "Integrated OpenAI LLM-based summarizer, reducing 20+ analyst hours/week and increasing report accuracy.",
        "Built real-time ingestion pipelines using Flask, AWS Lambda, and DynamoDB; cut latency by 40%.",
        "Preloaded high-demand cache with TTL strategies, improving system throughput and user experience.",
        "Designed observability dashboards tracking AI usage and ROI across product features.",
      ],
    },
    {
      review: "Cut infrastructure cost by 67% and halved load times for global users, creating a leaner, faster, and more accessible product with high return user growth.",
      imgPath: "./images/exp1.webp",
      logoPath: "./images/logo1.webp",
      title: "Software Engineer",
      date: "Sep 2024 – Dec 2024",
      responsibilities: [
        "Optimized Flask + PostgreSQL stack to drop latency from 1.5s to 200ms with indexed queries.",
        "Reduced AWS infra cost by $277/month through S3 offloading and EC2 tier adjustments.",
        "Set up global caching with CloudFront and Brotli compression for static assets.",
        "Shipped a Lambda-powered GenAI tutor, boosting retention by 28% (tracked via Mixpanel).",
      ],
    },
    {
      review: "Refactored a monolithic platform into microservices, reducing deployment errors and achieving a 4x release velocity while handling ad traffic spikes gracefully.",
      imgPath: "./images/exp2.webp",
      logoPath: "./images/logo2.webp",
      title: "Fullstack Engineer",
      date: "Aug 2020 – Aug 2022",
      responsibilities: [
        "Split backend into Spring Boot microservices; Dockerized and deployed via Kubernetes.",
        "Introduced Redis caching for ad delivery; dropped query latency from 120ms to 15ms.",
        "Automated CI/CD with GitHub Actions + EKS, achieving zero-downtime releases.",
        "Enhanced front-end with Angular SSR + lazy loading, boosting Lighthouse score from 62 to 89.",
      ],
    },
    // {
    //     review: "Brief of what happened / big  ",
    //     imgPath: "./images/exp3.webp",
    //     logoPath: "./images/logo3.webp",
    //     title: "Analyst",
    //     date: "Dates",
    //     responsibilities: [

    //     ],
    // },
];

const expLogos = [
    {
        name: "logo0",
        imgPath: "./images/logo0.webp",
    },
    {
        name: "logo1",
        imgPath: "./images/logo1.webp",
    },
    {
        name: "logo2",
        imgPath: "./images/logo2.webp",
    },
    {
        name: "logo3",
        imgPath: "./images/logo3.webp",
    },
];

const techStackIcons = [
  {
    name: "Backend Engineering (Python)",
    modelPath: "./models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Enterprise Systems (Java + Spring)",
    modelPath: "./models/java-v2.glb",
    scale: 1.35,
    rotation: [0, 0, 0],
    position: [0, -0.5, 0],
  },
  {
    name: "Cloud Infrastructure (AWS)",
    modelPath: "./models/aws_logo-v1.glb",
    scale: 0.38,
    rotation: [0, 0, 0],
    position: [0, -2, 0],
  },
  {
    name: "Frontend Frameworks (React)",
    modelPath: "./models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "CI/CD & DevOps (GitHub)",
    modelPath: "./models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4.5, 0],
    position: [0, 0, 0],
  },
];

const socialImgs = [
    {
        name: "git",
        imgPath: "./images/git.webp",
        url: "https://github.com/ro-rok/",
    },
    {
        name: "linkedin",
        imgPath: "./images/linkedin_.webp",
        url: "https://www.linkedin.com/in/krohan178",
    },
    {
        name: "lintree",
        imgPath: "./images/lt.webp",
        url: "https://linktr.ee/ro_rok",
    },
];



export {
    words,
    counterItems,
    navLinks,
    logoIconsList,
    abilities,
    expCards,
    expLogos,
    techStackIcons,
    socialImgs
};