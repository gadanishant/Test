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
        { id: 1, title: 'Card 1', description: 'Description for card 1' },
        { id: 2, title: 'Card 2', description: 'Description for card 2' },
        { id: 3, title: 'Card 3', description: 'Description for card 2' },
        { id: 4, title: 'Card 4', description: 'Description for card 2' },
        { id: 5, title: 'Card 5', description: 'Description for card 2' },
        { id: 6, title: 'Card 6', description: 'Description for card 2' },
        { id: 72, title: 'Card 7', description: 'Description for card 2' },
        { id: 8, title: 'Card 8', description: 'Description for card 2' },
        { id: 9, title: 'Card 9', description: 'Description for card 2' },
        { id: 10, title: 'Card 10', description: 'Description for card 10' },
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
        <Row gutter={[24, 24]}>
            <Col className="grey2 finding_apt" xs={24} md={12} lg={12}>
                <div>
                    <b>
                        Find your dream <span className="accent_blue">apartment</span> <br /> and the{' '}
                        <span className="accent_blue">missing</span> pieces to <br /> your{' '}
                        <span className="accent_blue">roommate puzzle</span>, <br /> all in one click."
                    </b>
                    <Row gutter={[24, 24]} className="find_button">
                        <Col>
                            <Link to="/listing">
                                <Button className="find_apt">
                                    <h3> Find an Apartment</h3>
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button className="find_rm">
                                <h3> Find Roommates</h3>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={24} md={12} lg={12}>
                <img className="home" src={home} alt="Home" />
            </Col>
        </Row>

        <Row className="what_made_easy grey2">
            <Col span={24}>
                <b>What we have made easy for students</b>
            </Col>
        </Row>

        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <div>
                    <img className="apartment" src={apartment} alt="Apartment" />
                </div>
                <br />
                <b className="font2rem">Find an Apartment</b>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <div>
                    <img className="apartment" src={roomates} alt="Roommates" />
                </div>
                <br />
                <b className="font2rem">Find a Roommate</b>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <div>
                    <img className="apartment" src={maps} alt="Maps" />
                </div>
                <br />
                <b className="font2rem">Safe Areas</b>
            </Col>
        </Row>

        <Row className="row3_color">
            <Col span={24}>
                <Row gutter={[24, 24]}>
                    {currentCards.map((card) => (
                        <Col key={card.id} xs={24} sm={12} md={8} lg={8}>
                            <Card className="review_card">
                                <Card.Meta title={card.title} description={card.description} />
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination
                    style={{ marginTop: '20px', textAlign: 'center' }}
                    current={currentPage}
                    pageSize={pageSize}
                    total={cards.length}
                    onChange={handlePageChange}
                />
            </Col>
        </Row>
    </div>
    );
}

export default Home;