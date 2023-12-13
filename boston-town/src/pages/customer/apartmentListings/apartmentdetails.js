import './apartmentdetails.css';
import React from 'react';
import { Carousel, Row, Col, Button } from 'antd'; // Import Button from antd
import logo from '../../../../src/assets/images/logo4.png';

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
            <Row>
                <Col span={16}>
                    <Carousel autoplay ref={carouselRef}>
                        <div>
                            <h3 style={contentStyle}> <img src={logo} alt="logo" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        {/* Button to go to previous slide */}
                        <Button onClick={prev} style={{ marginRight: '10px' }}>Previous</Button>
                        {/* Button to go to next slide */}
                        <Button onClick={next}>Next</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ApartmentDetails;
