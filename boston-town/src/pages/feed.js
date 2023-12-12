import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loader from "../components/loader";
import sendRequest from "../components/sendRequest";
import "./feed.css";

const Feed = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
    const [listOfPosts, setListOfPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllPostsAPI = async () => {
        try {
            const response = await sendRequest("http://localhost:3000/getAllPosts", {}, "GET", {});
            setTimeout(() => { setLoading(false) }, [1000 * 3])
            const data = response.data.description.slice(1);
            console.log("data => ", data);
            setListOfPosts(data)
        } catch (error) {
            console.log("error => ", error);
        }
    }

    useEffect(() => {
        setIsAuthenticated(sessionStorage.getItem("isAuthenticated"));
        console.log("isAuthenticated => ", isAuthenticated);
    }, [sessionStorage.getItem("isAuthenticated")])

    useEffect(() => {
        setLoading(true);
        getAllPostsAPI();
    }, [])

    return (
        (isAuthenticated === "true"
            ? <>
                {loading ? <Loader /> :
                    <div className='padding_background_feed'>
                        <Row gutter={[24, 24]}>
                            {
                                listOfPosts.map((post) => (
                                    <div key={post.id}>
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
                                                            <Link to="/profile">{post.username}</Link>
                                                        </Row>
                                                        <Row>
                                                            {post.title}
                                                        </Row>
                                                        <Row>
                                                            {post.timestamp}
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <h3>
                                                        This is a new feed post
                                                    </h3>
                                                </Row>
                                                <Row>
                                                    {post.description}
                                                </Row>
                                                <Divider></Divider>
                                            </Card>
                                        </Col>
                                        <Col xs={2} sm={4} md={8} lg={6} xl={6} xxl={6}>
                                            <Card className="card">

                                            </Card>
                                        </Col>
                                    </div>
                                ))
                            }
                        </Row>
                    </div>
                }
            </>
            : <>
                <div className='padding_background_feed'>
                    <p>Kindly login!</p>
                </div>
            </>
        )
    );
}

export default Feed;