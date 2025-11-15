import React from "react";
import "./Hero.css";
import profile_img from "../../assets/dev.jpg";
import ShivResume from "../../assets/SHIVKUMAR_RESUME.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Profile" className="profile-img" />
            <h1><span>I'm Shivkumar Devkatte,</span> full stack developer based in India.</h1>
            <p>I am a full stack developer from Pune, Maharashtra, India.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        Connect with me
                    </AnchorLink>
                </div>

                <a
                    href={ShivResume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-resume"
                >
                    My Resume
                </a>
            </div>
        </div>
    );
};

export default Hero;

