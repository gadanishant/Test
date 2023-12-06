import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
    return (
        <>
            <nav>
                <Row class gutter={[16,16]}>
                    <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                       <h2> <Link to="/feed">feed</Link></h2> 
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                    <h2> Find a roomate</h2> 
                       
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                      <h2> Contact Agent</h2> 
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={6} xl={6} xxl={6}>
                        <img></img>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2>  <Link to="/signup">signup</Link> </h2>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                    <h2> <Link to="/login">login</Link> </h2>
                    </Col>
                </Row>
            </nav>
        </>
    );
}

export default Navbar;