import React from "react";
import Landing from "../components/Landing.js";
import Aboutme from "../components/Aboutme.js";
import Languages from "../components/Languages.js";
import RSkills from "../components/RSkills.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const LandingPage = () => {


    return (
        <>
            <Landing />
            <Aboutme />
            <Languages />
            <RSkills />
            <Projects />
            <Contact text='Email'/>
            <Footer />
        </>
    )
}

export default LandingPage