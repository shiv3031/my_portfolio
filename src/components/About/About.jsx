import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/dev.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="title-box">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Full Stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div> 
                        <div className="about-skill"><p>Java</p><hr style={{width: "80%"}} /></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width: "75%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    
                </div>
                <hr />
                <div className="about-achievement">
                    
                </div>
                <hr />
                <div className="about-achievement">
                    
                </div>
            </div>
        </div>
    )
}

export default About
