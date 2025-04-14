import React from 'react';
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureSection from "./sections/FeatureSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

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
        </>
    );
};

export default App;
