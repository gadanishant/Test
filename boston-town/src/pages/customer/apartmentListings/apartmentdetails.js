import './apartmentdetails.css';
import React from 'react';
import { Carousel, Row, Col, Button } from 'antd'; // Import Button from antd
import logo from '../../../../src/assets/images/logo4.png';
import pic1 from '../../../../src/assets/images/pic1.png';
import pic2 from '../../../../src/assets/images/pic2.png';
import pic3 from '../../../../src/assets/images/pic3.png';



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const ApartmentDetails = () => {
    const carouselRef = React.useRef(); // Create a reference to the carousel component

    const next = () => {
        carouselRef.current.next(); // Function to go to the next slide
    };

    const prev = () => {
        carouselRef.current.prev(); // Function to go to the previous slide
    };

    return (
        <div className="details_padding">
            <Row gutter={[42, 42]}>
                <Col span={16}>
                    <Carousel className="carousel_apt" ref={carouselRef}>
                        <div >
                            <h3> <img className='images' src={logo} alt="logo" /></h3>
                        </div>
                        <div>
                            <h3 > <img className='images' src={pic1} alt="logo" /></h3>
                        </div>
                        <div>
                            <h3 > <img className='images' src={pic3} alt="logo" /></h3>
                        </div>
                        <div>
                            <h3 > <img className='images' src={pic2} alt="logo" /></h3>
                        </div>
                    </Carousel>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Button onClick={prev} style={{ marginRight: '10px' }}>Previous</Button>
                        <Button onClick={next}>Next</Button>
                        <Button>Like</Button>
                    </div>
                </Col>
                <Col span={8}>
                    <Row gutter={[24, 24]}>
                    <Col className='rent_card' span={11}>
                    <div>
                        Rent
                    </div>
                    <div class ="apartmentContent">
                        <p class = "apartmentRent">$2650</p>/month
                    </div>
                    </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div>
                                Bedrooms
                            </div>
                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167139089x172125820032762440/Vectorbed.svg"></img>
                            <p class = "apartmentContent">3 Bedrooms</p>
                        </Col>
                        
                        <Col className='rent_card' span={11}>
                            <div>
                                Bathrooms
                            </div>

                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167200873x190593201659127420/Group%2070bath.svg"></img>
                            <p class = "apartmentContent">1 Bathroom</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div>
                                Area
                            </div>
                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167207372x370943336758121400/Group%2081area.svg"></img>
                            <p class = "apartmentContent">1000 Sq Ft</p>
                        </Col>
                        <Col className='rent_card' span={11}>
                            <div>
                                Move - In
                            </div>
                            <img class = "ApartmentCardIcon"src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167222340x313042430337722160/Group%20125movein.svg"></img>
                            <p class = "apartmentContent">12th May 2024</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div>
                               Laundary
                            </div>
                            <img class = "ApartmentCardIcon" src="https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167259642x229271827691618800/washing-machine%201laundry.svg"></img>
                            <p class = "apartmentContent">Available</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ApartmentDetails;
