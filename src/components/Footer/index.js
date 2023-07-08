import React from 'react';
import './index.scss'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";

const footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__main">
                        <a href="https://github.com/AisherRyslanov"> <AiFillGithub/> </a>
                        <a href="http://t.me/AlisherR_06"> <BiLogoTelegram/> </a>
                        <a href="https://www.linkedin.com/in/alisher-ruslanov-a5914a245/"> <AiFillLinkedin/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;