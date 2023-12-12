import { Row, Col, Card, Input, Divider, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import sendRequest from '../../../components/sendRequest';
import './apartmentListings.css';

const ApartmentListings = () => {
	const [listOfProperties, setListOfProperties] = useState([]);
	const [zipCodeFilter, setZipCodeFilter] = useState('');
	const [filteredProperties, setFilteredProperties] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // State to manage current page
	const pageSize = 8; // Number of items per page
console.log(listOfProperties)
	const getAllpropertyAPI = async () => {
		try {
			const response = await sendRequest(
				"http://localhost:3000/property/getAllproperty",
				{},
				"GET",
				{}
			);
			const data = response.data.description.slice(1);
			setListOfProperties(data);
		} catch (error) {
			console.log("Error fetching properties:", error);
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
		setCurrentPage(1); // Reset to first page when filters change
	}, [listOfProperties, zipCodeFilter]);

	// Calculate the properties to display based on pagination
	const indexOfLastProperty = currentPage * pageSize;
	const indexOfFirstProperty = indexOfLastProperty - pageSize;
	const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			<div className="paddingListings">
				<Row gutter={24}>
					<Col span={5}>
						<Card>
							Filter By -
							<Divider />
							<div>
								Zipcode
								<Input
									value={zipCodeFilter}
									onChange={(e) => setZipCodeFilter(e.target.value)}
								/>
							</div>
							<div>
							Neighborhood
							
							</div>
						</Card>
					</Col>
					<Col span={19}>
						<h1>{filteredProperties.length} Apartments Found</h1>
						<Row gutter={16}>
							{currentProperties.map((apartment) => (
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
										<div>
										Neighborhood - {apartment.neighborhood}
										</div>
									</Card>
								</Col>
							))}
						</Row>
						<Pagination
							current={currentPage}
							total={filteredProperties.length}
							pageSize={pageSize}
							onChange={handlePageChange}
							style={{ marginTop: '20px', textAlign: 'center' }}
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default ApartmentListings;
