import { Row, Col, Card, Input, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import sendRequest from '../../../components/sendRequest';
import './apartmentListings.css';

const ApartmentListings = () => {
  const [listOfProperties, setListOfProperties] = useState([]);
  const [zipCodeFilter, setZipCodeFilter] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  const getAllpropertyAPI = async () => {
    console.log("Inside getAllproperty");
    try {
      const response = await sendRequest(
        "http://localhost:3000/property/getAllproperty",
        {},
        "GET",
        {}
      );
      const data = response.data.description.slice(1);
      console.log("Count of List of Properties:", data.length);
      setListOfProperties(data);
      console.log(data);
    } catch (error) {
      console.log("getAllproperty: catch block");
      console.log("error => ", error);
    }
  };

  useEffect(() => {
    getAllpropertyAPI();
  }, []);

  useEffect(() => {
    if (zipCodeFilter.trim() === '') {
      setFilteredProperties(listOfProperties);
    } else {
      const filtered = listOfProperties.filter(
        (property) => property.zip_code === zipCodeFilter.trim()
      );
      setFilteredProperties(filtered);
    }
  }, [listOfProperties, zipCodeFilter]);

  return (
    <>
      <div className="paddingListings">
        <Row gutter={24}>
          <Col span={5}>
            <Card>
              Filter By -
              <Divider></Divider>
              <div>
                Zipcode
                <Input
                  value={zipCodeFilter}
                  onChange={(e) => setZipCodeFilter(e.target.value)}
                ></Input>
              </div>
            </Card>
          </Col>
          <Col span={19}>
            <h1>{filteredProperties.length} Apartments Found</h1>
            <Row gutter={16}>
              {filteredProperties.map((apartment) => (
                <Col key={apartment.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={<img alt="apartment" src={apartment.image} />}
                    className="property-card"
                  >
                    <Card.Meta
                      title={apartment.title}
                      description={apartment.description}
                    />
                    <div style={{ marginTop: '16px' }}>
                      <p>{apartment.price}</p>
                    </div>
                    <div>
                      Zip Code - {apartment.zip_code}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ApartmentListings;
