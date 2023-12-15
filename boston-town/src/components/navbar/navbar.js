import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo4.png';
import "./navbar.css";
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import { Drawer } from 'antd';
import { HomeOutlined, IdcardOutlined, UnorderedListOutlined, HeatMapOutlined, LogoutOutlined } from '@ant-design/icons';

import  Button_component  from '../../../src/components/Button_component.js'



// ant design icons
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}



const Navbar = () => {


// usestates
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

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const items = [
        getItem(
            <> <h2>
                <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
            </h2></>
        ),
        getItem(
            <h2>
                <Link to="/feed" className='navtabs'><span className='underline'>Feed</span></Link>
            </h2>
        ),
        getItem(
            <h2>
                <Link to="/listing" className='navtabs'><span className='underline'>Listing</span></Link>
            </h2>
        ),
        getItem(
            <h2>
                <Link to="/incidents" className='navtabs'><span className='underline'>Incidents</span></Link>
            </h2>
        ),
        getItem(
            <h2>
                <Link to="/login" onClick={logout} className='navtabs'><span className='underline'>Logout</span></Link>
            </h2>
        )
    ];
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='navposition'>


{/* code for navbar when used in full screen and in mobile withj  */}
            <Row>
                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row className='small_navbar'>
                        <Col span={4}>
                        </Col>
                       
                        <Col span={16}>
                            <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link>
                        </Col>
                        <Col span={4} >
                           

                            <Button_component className="navbutton" type="primary" onClick={showDrawer} > {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</Button_component>
                            </Col>

                    </Row>
{/* drawe for mobile view navbar */}
                    <Drawer placement="left" onClose={onClose} open={open}>

                        {
                            isAuthenticated === "true" ?
                                <div >
                                    <h2>
                                        <Link to="/" className='navtabs'> <span className='underline'><HomeOutlined /> Home</span></Link>
                                    </h2>

                                    <h2>
                                        <Link to="/feed" className='navtabs'><span className='underline'><IdcardOutlined /> Feed</span></Link>
                                    </h2>

                                    <h2>
                                        <Link to="/listing" className='navtabs'><span className='underline'><UnorderedListOutlined /> Listing</span></Link>
                                    </h2>

                                    {/* <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link> */}

                                    <h2>
                                        <Link to="/incidents" className='navtabs'><span className='underline'><HeatMapOutlined /> Incidents</span></Link>
                                    </h2>

                                    <h2> <Link to={`/profile/${user.username}`} className='navtabs'>{user.username}</Link> </h2>

                                    <h2>
                                        <Link to="/login" onClick={logout} className='navtabs'><span className='underline'><LogoutOutlined /> Logout</span></Link>
                                    </h2>

                                </div>
                                : <Row className="background margin_auto">

                                    <h2>
                                        <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
                                    </h2>

                                    <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link>

                                    <h2> <Link to="/signup" className='navtabs'>Sign up</Link> </h2>

                                    <h2> <Link to="/login" className='navtabs'>Login</Link> </h2>
                                </Row>
                        }

                    </Drawer>
                </Col>
            </Row>




            <div className='navbar_display'>
                {
                    isAuthenticated === "true" ?
                        <Row className="background margin_auto ">
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
                            <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                                <h2>
                                    <Link to="/login" onClick={logout} className='navtabs'><span className='underline'>Logout</span></Link>
                                </h2>
                            </Col>
                        </Row>
                        : <Row className="background margin_auto">
                            <Col align='middle' xs={2} sm={4} md={6} lg={6} xl={6} xxl={6}>
                                <h2>
                                    <Link to="/" className='navtabs'> <span className='underline'>Home</span></Link>
                                </h2>
                            </Col>
                            <Col align='middle' xs={2} sm={4} md={6} lg={12} xl={12} xxl={12}>
                                <Link to="/"> <img className="nav_logo" src={logo} alt="" /></Link>
                            </Col>
                            <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                                <h2> <Link to="/signup" className='navtabs'>Sign up</Link> </h2>
                            </Col>
                            <Col align='middle' xs={2} sm={4} md={6} lg={3} xl={3} xxl={3}>
                                <h2> <Link to="/login" className='navtabs'>Login</Link> </h2>
                            </Col>
                        </Row>
                }
            </div>
            {/* <div className="hamburger_display">
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                   
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                {collapsed ? <></> :
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        className="custom_menu"
                    />}
            </div> */}
        </div>
    );
}

export default Navbar;