import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';


const ApartmentListings = () => {
  // Example data for apartment listings
  const apartmentListings = [
    {
      id: 1,
      title: 'Modern Apartment in the City Center',
      description: 'Spacious and well-furnished apartment with great city views.',
      price: '$150 per night',
      image: 'https://placekitten.com/400/300', // Replace with the actual image URL
    },
    {
      id: 2,
      title: 'Cozy Studio Near the Park',
      description: 'Perfect studio apartment for a relaxing stay near the park.',
      price: '$80 per night',
      image: 'https://placekitten.com/400/301', // Replace with the actual image URL
    },
    // Add more apartment listings as needed
  ];

  return (
    <Row gutter={16}>
      {apartmentListings.map((apartment) => (
        <Col key={apartment.id} xs={24} sm={12} md={8} lg={6}>
          <Link to="/apartmentdetails">
          <Card
            hoverable
            cover={<img alt="apartment" src={apartment.image} />}
          >
            <Card.Meta
              title={apartment.title}
              description={apartment.description}
            />
            <div style={{ marginTop: '16px' }}>
              <p>{apartment.price}</p>
              {/* Add more details as needed */}
            </div>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ApartmentListings;