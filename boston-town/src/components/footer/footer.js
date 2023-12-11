import React from 'react';
import { Layout, Row, Col, Typography} from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import './footer.css';
import Boston_Town_Footer_Image from  "../../../src/assets/images/Boston_Town_Footer_Image.png"
const { Footer } = Layout;
const { Link, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <Row gutter={16} justify="center">

          <Link href = "/aboutUs" className="footer-link">About</Link>
          <Link className="footer-link">Zestimates</Link>
          <Link className="footer-link">Research</Link>
          <Link className="footer-link">Careers</Link>
          <Link className="footer-link">Careers - U.S. Privacy Notice</Link>
          <Link className="footer-link">Careers - Mexico Privacy Notice</Link>
          <Link className="footer-link">Help</Link>
          <Link className="footer-link">Advertise</Link>
          <Link className="footer-link">Fair Housing Guide</Link>
          <Link className="footer-link">Terms of use</Link>
          <Link className="footer-link">Privacy Portal</Link>
          <Link className="footer-link">Cookie Preference</Link>


        </Row>
        <Row gutter={16} justify="center">

        <Link className="footer-link">Learn</Link>
        <Link className="footer-link">AI</Link>
        <Link className="footer-link">Mobile Apps</Link>
        <Link className="footer-link">Trulia</Link>
        <Link className="footer-link">StreetEasy</Link>
        <Link className="footer-link">HotPads</Link>
        <Link className="footer-link">Out East</Link>
        <Link className="footer-link">ShowingTime+</Link>

        </Row>

        <Row gutter={16} justify="center">
            <Link className="footer-link">Do Not Sell or Share my Personal information</Link>
        </Row>

        <hr className="horizontal-line" />

        <p className = "footer-para">
        <p>
            Zillow Group is committed to ensuring digital accessibility for individuals with \
            disabilities. We are continuously working to improve the accessibility of our web 
            experience for everyone, and we welcome feedback and accommodation requests. 
            If you wish to report an issue or seek an accommodation, please let us know.
        </p>

        <p>
            Zillow, Inc. holds real estate brokerage licenses in multiple states. 
            Zillow (Canada), Inc. holds real estate brokerage licenses in multiple provinces. 
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
            Contact Zillow, Inc. Brokerage
        </p>

        <p>
        For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are 
        controlled by The Canadian Real Estate Association (CREA) and identify real estate 
        professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® 
        and the associated logos are owned by CREA and identify the quality of services 
        provided by real estate professionals who are members of CREA. Used under license.
        </p>

        </p>

        <div>
        <Link><FacebookOutlined className = "footer-icons"/></Link>
        <Link><InstagramOutlined className = "footer-icons"/></Link>
        <Link><TwitterOutlined className = "footer-icons"/></Link>
        </div>

        <img className='footerimg' src = {Boston_Town_Footer_Image}></img>

        
    </Footer>
  )};

export default AppFooter;