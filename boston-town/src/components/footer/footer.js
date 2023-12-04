import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import footer_image from "./boston_town_footer_image.png";
import "./footer.css"
import {Button} from 'antd';
import styles from "../../assets/css/custom_antd.css"

const Footer = () => {
    return (
        <>
        <div class = "footer">
        <nav>   
            <ul>
                <li><a href = "./aboutus">About</a></li>
                <li><a href = "./contactus">Contact Us</a></li>
            </ul>
        </nav>
        </div>
        <img id = "footerImage" src = {footer_image} alt = "Boston_Town_Footer_Image"></img>
        <Button className = "test">test</Button>
        <Button>test2</Button>
        </>
    );
}

export default Footer;