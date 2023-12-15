import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Pagination, Row, Button, Input } from "antd";
import { useContext, useEffect, useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../components/context";
import Loader from "../components/loader";
import sendRequest from "../components/sendRequest";
import "./feed.css";
import boys2 from "../../src/assets/images/boystalking.png"
import userpic from "../../src/assets/images/userimages/user1.png"


const Feed = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
    const [listOfPosts, setListOfPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // Number of posts per page
    const { user, setUser } = useContext(Context);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredPosts = useMemo(() => {
        return searchInput.trim()
            ? listOfPosts.filter(post => post.username.toLowerCase().startsWith(searchInput.toLowerCase().trim()))
            : listOfPosts;
    }, [listOfPosts, searchInput]);

    const userImages = [
        "user1.png",
        "user2.png",
        "user3.png",
        // Add more image names here...
      ];

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
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        (isAuthenticated === "true"
            ? <>
                {loading ? <Loader /> :
                    <div className='padding_background_feed'>
                        <Row>
                            <Col  xs={0} sm={0} md={2} lg={4} xl={4} xxl={4}>
                                <h1>Feed</h1>
                            </Col>
                            <Col >
                            <Input placeholder="Search User" value={searchInput} onChange={handleSearchChange}></Input>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row gutter={[24, 24]} >
                            <Col xs={0} sm={0} md={2} lg={4} xl={4} xxl={4}></Col>

                            <Col xs={24} sm={24} md={20} lg={14} xl={14} xxl={14}>
                                {
                                    currentPosts.map((post, index) => (
                                        <Card key={post.id} className="card">
                                            <Row>
                                                <Col span={4}>
                                                    {/* <UserOutlined /> */}
                                                    <img className="userpic" src={`../../src/assets/images/userimages/${userImages[index % userImages.length]}`} alt={`User ${index + 1}`} />
                                                </Col>
                                                <Col className="time_color" span={14}>
                                                    <h2><b> {post.username}</b></h2>
                                                    <b>  <div className="time_color">{post.timestamp && post.timestamp.substring(0, 10)}</div></b>
                                                </Col>
                                                <Col span={6}>
                                                    <b><Link className="username" to={`/profile/${post.username}`}><Button className="view_button"><b className="view_color">View Profile</b></Button></Link></b>
                                                </Col>
                                                <Col>
                                                    <Row className="title_color">
                                                        <b> {post.title}</b>
                                                    </Row>
                                                    <Row>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="time_color">
                                                <h3><b>{post.description}</b></h3>
                                            </Row>
                                        </Card>
                                    ))
                                }
                            </Col>

                            <Col xs={0} sm={0} md={2} lg={6} xl={6} xxl={6}>

                                <img className="boys2" src={boys2} />
                            </Col>
                        </Row>

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
                    <Row gutter={[24, 40]} justify="center">
                        <Col span={24} align="middle">Kindly login!</Col>
                        <Col spna={24}>
                            <Link>
                                <Button>
                                    Click here to Login
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </>
        )
    );
}

export default Feed;
