import React from 'react';
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureSection from "./sections/FeatureSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <>
            {/* <CustomCursor /> */}
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureSection />
            <ExperienceSection />
            <TechStack />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
