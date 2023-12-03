import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import footer_image from "./boston_town_footer_image.png";
import {Button} from 'antd';
import "./footer.css"

const Footer = () => {
    return (
        <>
        <img id = "footerImage" src = {footer_image} alt = "Boston_Town_Footer_Image"></img>
        <Button>footer</Button>
        </>
    );
}

export default Footer;