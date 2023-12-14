import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import './footer.css';
import Boston_Town_Footer_Image from "../../../src/assets/images/Boston_Town_Footer_Image.png"
const { Footer } = Layout;
const { Link, Text } = Typography;

const AppFooter = () => {
    return (
        <Footer className="app-footer">
            <Row gutter={16} justify="center">

                <Link href="/aboutUs" className="footer-link">About</Link>
                <Link href = "./termsOfService"className="footer-link">Terms Of Service</Link>
                <Link href="./privacypolicy" className="footer-link">Privacy Policy</Link>
                <Link href="./" className="footer-link">Add a Review</Link>
                <Link><FacebookOutlined className="footer-icons" /></Link>
                <Link><InstagramOutlined className="footer-icons" /></Link>
                <Link><TwitterOutlined className="footer-icons" /></Link>


            </Row>

            <hr className="horizontal-line" />

            <div className="footer-para">
            <p>
                Boston Town Group is committed to ensuring digital accessibility for individuals with disabilities. 
                We are continuously working to improve the accessibility of our web experience for everyone, 
                and we welcome feedback and accommodation requests. If you wish to report an issue or seek an 
                accommodation, please let us know.
            </p>

            <p>
                Boston Town, Inc. holds real estate brokerage licenses in multiple states.
                Boston Town (Canada), Inc. holds real estate brokerage licenses in multiple provinces.
            </p>
            <p>
                § 442-H New York Standard Operating Procedures
            </p>
            <p>
                § New York Fair Housing Notice
            </p>
            <p>
                TREC: Information about brokerage services, Consumer protection notice
            </p>
            <p>
                California DRE #1522444
            </p>

            <p>
                Contact Boston Town, Inc. Brokerage
            </p>

            <p>
                For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled 
                by The Canadian Real Estate Association (CREA) and identify real estate professionals who are 
                members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are 
                owned by CREA and identify the quality of services provided by real estate professionals who 
                are members of CREA. Used under license.
            </p>

            </div>

            <img className='footerimg' src={Boston_Town_Footer_Image}></img>


        </Footer>
    )
};

export default AppFooter;