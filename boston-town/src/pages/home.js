import { Card, Col, Row, Divider, Button } from "antd";
import './home.css';
import home from '../../../boston-town/src/assets/images/logo5.png';
import apartment from '../../../boston-town/src/assets/images/apartment.png';
import roomates from '../../../boston-town/src/assets/images/roomates.png';
import maps from '../../../boston-town/src/assets/images/maps.png';
import { Link } from 'react-router-dom';



import React, { useState } from 'react';
import { Pagination } from 'antd';
// import 'antd/dist/antd.css';

const { Meta } = Card;



const Home = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Review 1', description: "A comprehensive platform! From budget-friendly studios to luxurious penthouses, this site offers a wide array of options. The filters make it easy to narrow down choices, and the interface is user-friendly." },
        { id: 2, title: 'Review 2', description: "Great resource for apartment hunting! I found my dream apartment within days of using this site. The listings are detailed, photos are accurate, and the contact process with landlords was smooth." },
        { id: 3, title: 'Review 3', description: "Mixed feelings. While the variety of listings is impressive, some details were outdated or inaccurate. It would be helpful if there was more consistency in the quality of information provided." },
        { id: 4, title: 'Review 4', description: "User-friendly interface, but lacking in diversity. The site's layout is excellent, but I wish there were more options in certain neighborhoods. It's a good starting point, but limited in terms of coverage." },
        { id: 5, title: 'Review 5', description: "Responsive customer service! I encountered an issue while trying to schedule a viewing, and the support team was quick to assist. They were polite and efficient in resolving my problem." },
        { id: 6, title: 'Review 6', description: "Impressive variety! Whether you're looking for a cozy place for one or a spacious family home, this site has it all. I appreciated the range of filters available to customize my search." },
        { id: 72, title: 'Review 7', description: "A little overwhelming. The sheer number of listings can be daunting, and it took me a while to navigate through everything. It would be helpful to have more refined search options." },
        { id: 8, title: 'Review 8', description: "Reliable and up-to-date! I've used this platform multiple times during my moves, and it's consistently provided accurate information. The real-time availability updates are a game-changer." },
        { id: 9, title: 'Review 9', description: "Could use better sorting options. While the search filters are useful, the ability to sort by specific criteria like 'newest listings' or 'highest rated' would greatly improve the browsing experience." },
        { id: 10, title: 'Review 10', description: "Fantastic for newcomers! As someone new to the city, this site was a lifesaver. The neighborhood guides and insights provided alongside listings were incredibly helpful in making an informed decision." },
    ]);
    

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastCard = currentPage * pageSize;
    const indexOfFirstCard = indexOfLastCard - pageSize;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    return (
        <div className="padding_home">
            <Row>
                <Col className="grey2 finding_apt" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <div><b>
                        Find your dream <span className="accent_blue">apartment</span> <br /> and the <span className="accent_blue">missing</span> pieces to <br /> your <span className="accent_blue">roommate puzzle</span> ,<br /> all in one click."</b>
                        <Row gutter={[24, 24]} className="find_button">
                            <Col>
                                <Link to="/listing">
                                    <Button className="find_apt">
                                        <h3 > Find a Apartment</h3>
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/feed">
                                    <Button className="find_rm">
                                        <h3 > Find Roomates</h3>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <img className="home" src={home}></img>
                </Col>

                <Col span={24} className="what_made_easy grey2">
                    <b> What we have made easy for students</b>
                </Col>
            </Row>
            <Row>
                <Col  xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={apartment}></img>
                    </div>
                    <br />
                    <b className="font2rem">Find a Apartment</b>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={roomates}></img>
                    </div>
                    <br />
                    <b className="font2rem">Find a Roommate</b>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={maps}></img>
                    </div>
                    <br />
                    <b className="font2rem">Safe Areas</b>
                </Col>
            </Row>
            <br />
            <br />
            <br />

            <Row className="row3_color">
                <Col span={24}>
                    <Row className="row_11">
                        {currentCards.map((card) => (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                                <Card className="review_card" key={card.id}>
                                    <Meta title={card.title} description={card.description} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Pagination
                        className="row_21"
                        current={currentPage}
                        pageSize={pageSize}
                        total={cards.length}
                        onChange={handlePageChange}
                    />
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Col className="finding_apt" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>

                    <div><b>
                        Find the <span className="accent_blue">safest</span><br /> area for <br />accommodation </b>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <Link to="/incidents">
                        <Button className="find_apt"> Find here</Button>
                        </Link>
                    </div>
                </Col>
                <Col  xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <div>
                        <img className="home" src={maps}></img>
                    </div>
                </Col>
            </Row>


        </div>
    );
}

export default Home;