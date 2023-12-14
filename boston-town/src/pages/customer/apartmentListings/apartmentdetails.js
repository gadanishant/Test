import './apartmentdetails.css';
import React from 'react';
import { Carousel, Row, Col, Button, Card, Divider} from 'antd'; // Import Button from antd
import logo from '../../../../src/assets/images/logo4.png';
import pic1 from '../../../../src/assets/images/pic1.png';
import pic2 from '../../../../src/assets/images/pic2.png';
import pic3 from '../../../../src/assets/images/pic3.png';
import { useLocation } from 'react-router-dom';



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

    const location = useLocation();

    // Access the state object from the location
    const { state } = location;
  
    // Access the apartment object from the state
    const { apartment } = state;
    console.log(apartment)

    return (
        <div className="details_padding">
            <Row gutter={[42, 42]}>
                <Col span={16}>
                <Carousel className="carousel_apt">
      {apartment.images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
      ))}
    </Carousel>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        {/* <Button onClick={prev} style={{ marginRight: '10px' }}>Previous</Button>
                        <Button onClick={next}>Next</Button> */}
                        <Button className = "likeButton">Like</Button>
                    </div>
                </Col>
                <Col span={8}>
                    <Row gutter={[24, 24]}>
                    <Col className='rent_card' span={11}>
                    <div class = "apartmentCardHeading">
                        Rent
                    </div>
                    <div class ="apartmentContent">
                        <p class = "apartmentRent">${apartment.price}</p>/month
                    </div>
                    </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div class = "apartmentCardHeading">
                                Bedrooms
                            </div>
                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167139089x172125820032762440/Vectorbed.svg"></img>
                            <p class = "apartmentContent">3{apartment.bedrooms}Bedrooms</p>
                        </Col>
                        
                        <Col className='rent_card' span={11}>
                            <div class = "apartmentCardHeading">
                                Bathrooms
                            </div>

                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167200873x190593201659127420/Group%2070bath.svg"></img>
                            <p class = "apartmentContent">{apartment.bathrooms} Bathroom</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div class = "apartmentCardHeading">
                                Area
                            </div>
                            <img class = "ApartmentCardIcon" src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167207372x370943336758121400/Group%2081area.svg"></img>
                            <p class = "apartmentContent">{apartment.area}</p>
                        </Col>
                        <Col className='rent_card' span={11}>
                            <div class = "apartmentCardHeading">
                                Move - In
                            </div>
                            <img class = "ApartmentCardIcon"src = "https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167222340x313042430337722160/Group%20125movein.svg"></img>
                            <p class = "apartmentContent">{apartment.move_in}</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col className='rent_card' span={11}>
                            <div class = "apartmentCardHeading">
                               Laundary
                            </div>
                            <img class = "ApartmentCardIcon" src="https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167259642x229271827691618800/washing-machine%201laundry.svg"></img>
                            <p class = "apartmentContent">{apartment.in_unit_laundry}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Card className = "apartmentDetailDescription">
            <h3>Title: </h3>
            <p>{apartment.title}</p>
            <Divider/>
            <h3>Address: </h3><p>{apartment.address}</p>
            <Divider/>
            <h3>Description: </h3><p>{apartment.description}</p>
            <Divider/>
            <h3>Facilities: </h3><p>{apartment.facilities}</p>
            <Divider/>
            <h3>Floor: </h3><p>{apartment.floor}</p>
            <Divider/>
            <h3>Year Built In: </h3><p>{apartment.year_built}</p>
            <Divider/>
            <h3>
                Remodeled: </h3><p>{apartment.year_remodeled}
            </p>
            </Card>
        </div>
    );
};

export default ApartmentDetails;
