import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo4.png';
import "./navbar.css";
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState("false");
    const { user, setUser } = useContext(Context);

    const logout = () => {
        console.log("logout!");
        setIsAuthenticated("false");
        sessionStorage.setItem("isAuthenticated", "false");
    }

    useEffect(() => {
        console.log("user => ", user);
        const status = sessionStorage.getItem("isAuthenticated");
        console.log("status => ", status);
        setIsAuthenticated(status)
    }, [sessionStorage.getItem("isAuthenticated")])

    console.log("isAuthenticated => ", isAuthenticated);
 
    return (
        <div className='navposition'>
            {
                isAuthenticated === "true" ?
                    <Row className="background margin_auto">
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2>
                                <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
                            </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2>
                                <Link to="/feed" className='navtabs'><span className='underline'>Feed</span></Link>
                            </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2>
                                <Link to="/listing" className='navtabs'><span className='underline'>Listing</span></Link>
                            </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={5} xl={5} xxl={5}>
                            <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                            <h2>
                                <Link to="/incidents" className='navtabs'><span className='underline'>Incidents</span></Link>
                            </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2> <Link to={`/profile/${user.username}`} className='navtabs'>{user.username}</Link> </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={4} xl={4} xxl={4}>
                            <h2>
                                <Link to="/login" onClick={logout} className='navtabs'><span className='underline'>Logout</span></Link>
                            </h2>
                        </Col>
                    </Row>
                    : <Row className="background margin_auto">
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2>
                                <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
                            </h2>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={5} xl={5} xxl={5}>
                            <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link>
                        </Col>
                        <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                            <h2> <Link to="/login" className='navtabs'>login</Link> </h2>
                        </Col>
                    </Row>
            }
        </div>
    );
}

export default Navbar;