import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo4.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='navposition'>
            <Row className="background margin_auto">
                <Col  align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2>
                        <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
                    </h2>
                </Col>
                <Col  align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2>
                        <Link to="/feed" className='navtabs'><span className='underline'>Feed</span></Link>
                    </h2>
                </Col>
                <Col  align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2>
                        <Link to="/listing" className='navtabs'><span className='underline'>Listing</span></Link>
                    </h2>
                </Col>
                <Col align='middle' xs={2} sm={4} md={6} lg={5} xl={5} xxl={5}>
                    <Link to="/"> <img class="nav_logo" src={logo} alt="" /></Link>
                </Col>
                <Col  align='middle' xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                    <h2>
                        <Link to="/incidents" className='navtabs'><span className='underline'>Incidents</span></Link>
                    </h2>
                </Col>
               
                <Col  align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/signup" className='navtabs'>signup</Link> </h2>
                </Col>
                <Col  align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/login" className='navtabs'>login</Link> </h2>
                </Col>
            </Row>
        </div>
    );
}

export default Navbar;