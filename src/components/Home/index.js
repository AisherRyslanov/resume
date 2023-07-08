import React from 'react';
import About from "../About";
import Contacts from "../Contacts";
import Projects from "../Projects";
import Skills from "../Skills";

const home = () => {
    return (
        <div className="home">
            <About/>
            <Contacts/>
            <Projects/>
            <Skills/>
        </div>
    );
};

export default home;