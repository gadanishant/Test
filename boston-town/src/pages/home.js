import { Card, Col, Row, Divider, Button } from "antd";
import './home.css';
import home from '../../../boston-town/src/assets/images/home.png';
import apartment from '../../../boston-town/src/assets/images/apartment.png';
import roomates from '../../../boston-town/src/assets/images/roomates.png';
import maps from '../../../boston-town/src/assets/images/maps.png';

import React, { useState } from 'react';
import { Pagination } from 'antd';
// import 'antd/dist/antd.css';

const { Meta } = Card;



const Home = () => {

    // Sample data for cards (you can replace this with your data)
    const [cards, setCards] = useState([
        { id: 1, title: 'Card 1', description: 'Description for card 1' },
        { id: 2, title: 'Card 2', description: 'Description for card 2' },
        { id: 3, title: 'Card 2', description: 'Description for card 2' },
        { id: 4, title: 'Card 2', description: 'Description for card 2' },
        { id: 5, title: 'Card 2', description: 'Description for card 2' },
        { id: 6, title: 'Card 2', description: 'Description for card 2' },
        { id: 72, title: 'Card 2', description: 'Description for card 2' },
        { id: 8, title: 'Card 2', description: 'Description for card 2' },
        { id: 9, title: 'Card 2', description: 'Description for card 2' },
        // Add more cards as needed
        // ...
        { id: 10, title: 'Card 10', description: 'Description for card 10' },
        // Add more cards as needed
        // ...
    ]);

    // Pagination configuration
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Number of cards per page

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate cards to display based on current page
    const indexOfLastCard = currentPage * pageSize;
    const indexOfFirstCard = indexOfLastCard - pageSize;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    return (
        <div class="padding_home">
            <Row>
                <Col className="grey2 finding_apt" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <div><b>
                        Find your dream <span className="accent_blue">apartment</span> <br /> and the <span className="accent_blue">missing</span> pieces to <br /> your <span className="accent_blue">roommate puzzle</span> ,<br /> all in one click."</b>
                        <Row gutter={[24, 24]} className="find_button">
                            <Col>
                                <Button className="find_apt">
                                    <h3 > Find a Apartment</h3>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="find_rm">
                                    <h3 > Find Roomates</h3>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <img className="home" src={home}></img>
                </Col>

                <Col span={24} className="what_made_easy grey2">
                    <b> What we have made easy for students</b>
                </Col>
            </Row>
            <Row>
                <Col span={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={apartment}></img>

                    </div>
                    <br />
                    <h2>  <b>Find a Apartment</b></h2>
                </Col>
                <Col span={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={roomates}></img>
                    </div>
                    <br />
                    <h2> <b>Find a Roommate</b></h2>
                </Col>
                <Col span={8} justify="center" align="middle">
                    <div>
                        <img className="apartment" src={maps}></img>
                    </div>
                    <br />
                    <h2> <b>
                        Safe Areas
                    </b></h2>
                </Col>
            </Row>
            <br />
            <br />
            <br />

            <Row className="row3_color">
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {currentCards.map((card) => (
                            <Card key={card.id} style={{ width: 300 }}>
                                <Meta title={card.title} description={card.description} />
                            </Card>
                        ))}
                    </div>
                    <Pagination
                        style={{ marginTop: '20px', textAlign: 'center' }}
                        current={currentPage}
                        pageSize={pageSize}
                        total={cards.length}
                        onChange={handlePageChange}
                    />
                </div>
            </Row>

        </div>
    );
}

export default Home;