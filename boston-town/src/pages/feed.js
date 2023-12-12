import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./feed.css";


const Feed = () => {

    const [isAuthenticated, setIsAuthenticated] = useState();

    useEffect(() => {
        setIsAuthenticated(Boolean(sessionStorage.getItem("isAuthenticated")));
        console.log("isAuthenticated => ", isAuthenticated);
    }, [])

    return (
        (!isAuthenticated
            ? <>
                <div className='padding_background_feed'>
                    <Row gutter={[24, 24]}>
                        <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5}>
                            <Card className="card"></Card>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={13} xl={13} xxl={13}>
                            <Card className="card">
                                <Row>
                                    <Col>
                                        <UserOutlined />
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Link to="/profile">User Name</Link>
                                        </Row>
                                        <Row>
                                            New apartment
                                        </Row>
                                        <Row>
                                            5 Hours Ago
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <h3>
                                        This is a new feed post
                                    </h3>
                                </Row>
                                <Row>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, deleniti.
                                </Row>
                                <Divider></Divider>
                            </Card>
                        </Col>
                        <Col xs={2} sm={4} md={8} lg={6} xl={6} xxl={6}>
                            <Card className="card">

                            </Card>
                        </Col>

                    </Row>
                </div>
            </>
            : <>
                <div className='padding_background_feed'>
                    <p>Kindly login!</p>
                </div>
            </>)
    );
}

export default Feed;