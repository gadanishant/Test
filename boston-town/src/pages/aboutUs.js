import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./aboutUs.css"
import logo from  "../../src/assets/images/logo.png"

const About = () => {
    return (
        <>

            <div class="aboutUsContainer">
                <img src={logo} alt="aboutUsImage" class="about_us_image"></img>
                <div class="aboutUs-container">
                <p>Welcome to Boston Town – Your Gateway to Safe and Convenient Student Living! 
                </p>
                <p>
                At Boston Town, we understand the challenges students face when it comes to finding the perfect place to live while pursuing their academic dreams. 
                Our mission is to simplify the apartment hunting process and make it easier for students to connect with safe living spaces and compatible roommates.
                </p>
                
                </div>
            </div>
        </>
    );
}

export default About