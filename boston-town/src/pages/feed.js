import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Pagination, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../components/context";
import Loader from "../components/loader";
import sendRequest from "../components/sendRequest";
import "./feed.css";

const Feed = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
    const [listOfPosts, setListOfPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // Number of posts per page
    const { user, setUser } = useContext(Context);

    const getAllPostsAPI = async () => {
        try {
            const response = await sendRequest("http://localhost:3000/getAllPosts", {}, "GET", {});
            setTimeout(() => { setLoading(false) }, [1000 * 0.1])
            const data = response.data.description.slice(1);
            console.log("data => ", data);
            setListOfPosts(data);
        } catch (error) {
            console.log("error => ", error);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setIsAuthenticated(sessionStorage.getItem("isAuthenticated"));
        console.log("isAuthenticated => ", isAuthenticated);
    }, [sessionStorage.getItem("isAuthenticated")]);

    useEffect(() => {
        setLoading(true);
        getAllPostsAPI();
        console.log("user => ", user);
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listOfPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        (isAuthenticated === "true"
            ? <>
                {loading ? <Loader /> :
                    <div className='padding_background_feed'>
                        {
                            currentPosts.map((post) => (
                                <Row gutter={[24, 24]} key={post.id}>
                                    <Col span={4}></Col>
                                    <Col xs={6} sm={6} md={6} lg={14} xl={14} xxl={14}>
                                        <Card className="card">
                                            <Row>
                                                <Col>
                                                    <UserOutlined />
                                                </Col>
                                                <Col>
                                                    <Row>
                                                        <b><Link className="username" to="/profile">{post.username}</Link></b>
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
                                        </Card>
                                    </Col>
                                    <Col span={6}></Col>
                                </Row>
                            ))
                        }
                        {/* Pagination component */}
                        <div className='pagination'>
                            <Pagination
                                current={currentPage}
                                total={listOfPosts.length}
                                pageSize={postsPerPage}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                            />
                        </div>
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
