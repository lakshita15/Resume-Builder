import React, { useState } from 'react';
import "./about.css";

import about from "../static/images/aboutus.png";

const About = () => {
    return ( 
        <div className="about">
            <div className="left-about">
                <p><h3>Do you have any comments or questions? Our team will be happy to assist you. Send us a message.</h3></p>
            <h2>support@Resumebulder.com</h2>
            <p>We are here to answer any questions regarding our resume generator, do not hesitate to contact us for any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us</p>
            </div>
            <div className="right-about">
                <img src={about} alt=""/>
            </div>
        </div>
     );
}
 
export default About;