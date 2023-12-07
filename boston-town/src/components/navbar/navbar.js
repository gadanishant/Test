import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <Row className="background margin_auto" gutter={[16, 16]}>
                <Col xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/feed">Feed</Link></h2>
                </Col>
                <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                    <h2> Find a roomate</h2>
                </Col>
                <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                    <h2> Contact Agent</h2>
                </Col>
                <Col xs={2} sm={4} md={6} lg={6} xl={6} xxl={6}>
                    <img class="nav_logo" src={logo} alt="" />
                </Col>
                <Col xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/signup">signup</Link> </h2>
                </Col>
                <Col xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/login">login</Link> </h2>
                </Col>
            </Row>
        </div>
    );
}

export default Navbar;