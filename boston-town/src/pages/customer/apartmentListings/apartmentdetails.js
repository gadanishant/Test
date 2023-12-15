import './apartmentdetails.css';
import React , { useState, useEffect, useContext } from 'react';
import { Carousel, Row, Col, Button, Card, Divider} from 'antd'; // Import Button from antd
import logo from '../../../../src/assets/images/logo4.png';
import pic1 from '../../../../src/assets/images/pic1.png';
import pic2 from '../../../../src/assets/images/pic2.png';
import pic3 from '../../../../src/assets/images/pic3.png';
import { Context } from '../../../components/context';
import { useLocation } from 'react-router-dom';



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const ApartmentDetails = () => {
    const location = useLocation();
    const { user, setUser } = useContext(Context);
    const [isLiked, setIsLiked] = useState(false);
    const [apartment, setApartment] = useState(location.state.apartment);
    const [agent, setAgent] = useState(null);
    const carouselRef = React.useRef(); // Create a reference to the carousel component

    const next = () => {
        carouselRef.current.next(); // Function to go to the next slide
    };

    const prev = () => {
        carouselRef.current.prev(); // Function to go to the previous slide
    };

    useEffect(() => {
        if (apartment.liked_by.includes(user.username)) {
            setIsLiked(true);
        }
    }, [user.username, apartment.liked_by]);

    const handleLikeClick = async () => {
        let updatedLikes = [...apartment.liked_by];
        if (isLiked) {
            // cancel like
            updatedLikes = updatedLikes.filter(name => name !== user.username);
        } else {
            // add like
            updatedLikes.push(user.username);
        }
    
        // const updatedData = { liked_by: updatedLikes };
        const updatedData = { liked_by: updatedLikes };
        console.log("!!! => ", apartment._id);
    
        try {
            // send PUT request to update the property
            const response = await fetch(`http://localhost:3000/property/updateProperty/${apartment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
    
            const responseData = await response.json();
            if (response.ok && responseData.success) {
                console.log('Property updated successfully');
    
                // update state
                setIsLiked(!isLiked);
                // 更新 apartment 状态以及点赞数量和列表
                setApartment(prevApartment => ({
                    ...prevApartment, 
                    liked_by: updatedLikes
                }));
    
            } else {
                console.error('Failed to update property');
            }
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };
    
    useEffect(() => {
        const fetchAgentData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/getAgent/${apartment.agent}`);
                const data = await response.json();
                if (data.success) {
                    setAgent(data.description);
                } else {
                    console.error('Failed to fetch agent data');
                }
            } catch (error) {
                console.error('Error fetching agent data:', error);
            }
        };

        if (apartment && apartment.agent) {
            fetchAgentData();
        }
    }, [apartment.agent]);

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
                        <Button 
                            className={isLiked ? "likedButton" : "likeButton"} 
                            onClick={handleLikeClick}>
                            {isLiked ? 'Liked' : 'Like'}
                        </Button>
                        <div className="likes_count">
                            <p>({apartment.liked_by.filter(name => name !== "").length} likes)</p>
                            <p>{apartment.liked_by.join(", ")}</p>
                        </div>
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
                            <p class = "apartmentContent">{apartment.bedrooms} Bedrooms</p>
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
                            <p class = "apartmentContent">{(apartment.move_in).split('T')[0]}</p>
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
            {agent && (
                    <>
                        <Divider/>
                        <h3>Agent Contact:</h3>
                        <p>Mobile: {agent.mobile}</p>
                        <p>Email: {agent.email}</p>
                    </>
                )}
            </Card>
        </div>
    );
};

export default ApartmentDetails;
