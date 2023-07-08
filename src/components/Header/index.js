import React from 'react';
import './index.scss'
import {Link} from "react-router-dom";

const header = () => {
    return (
        <div id="header">
            <div className="container">
            <div className="header">
                <Link to={"/"}>
                    <h1>Ruslanov Alisher</h1>
                </Link>
                <div className="header__links">
                    <Link to={"/about"}>
                        <p>About me</p>
                    </Link>
                    <Link to={"/contacts"}>
                        <p>Contacts</p>
                    </Link>
                    <Link to={"/projects"}>
                        <p>Projects</p>
                    </Link>
                    <Link to={"/skills"}>
                        <p>Skills</p>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default header;