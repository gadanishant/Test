import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Card, Input, Divider, Pagination } from 'antd';
import Loader from '../../../components/loader';
import sendRequest from '../../../components/sendRequest';
import './apartmentListings.css';

const ApartmentListings = () => {
	const [listOfProperties, setListOfProperties] = useState([]);
	const [zipCodeFilter, setZipCodeFilter] = useState('');
	const [currentPage, setCurrentPage] = useState(1); // State to manage current page
	const pageSize = 8; // Number of items per page
	const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
	const [loading, setLoading] = useState(true);

	const getAllpropertyAPI = async () => {
		try {
			const response = await sendRequest("http://localhost:3000/property/getAllproperty", {}, "GET", {});
			setTimeout(() => { setLoading(false) }, 3000);
			const data = response.data.description.slice(1);
			setListOfProperties(data);
		} catch (error) {
			console.log("Error fetching properties:", error);
		}
	};

	useEffect(() => {
		getAllpropertyAPI();
	}, []);

	const filteredProperties = useMemo(() => {
		return listOfProperties.filter(property => {
			const zipCodeMatch = zipCodeFilter.trim() === '' || property.zip_code.includes(zipCodeFilter.trim());
			const neighborhoodMatch = selectedNeighborhoods.length === 0 || selectedNeighborhoods.includes(property.neighborhood);
			return zipCodeMatch && neighborhoodMatch;
		});
	}, [listOfProperties, zipCodeFilter, selectedNeighborhoods]);

	const indexOfLastProperty = currentPage * pageSize;
	const indexOfFirstProperty = indexOfLastProperty - pageSize;
	const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const uniqueNeighborhoods = useMemo(() => {
		return new Set(listOfProperties.map(apartment => apartment.neighborhood));
	}, [listOfProperties]);

	const handleNeighborhoodSelect = (neighborhood) => {
		setSelectedNeighborhoods(prevNeighborhoods => {
			const updatedSelection = new Set(prevNeighborhoods);
			if (updatedSelection.has(neighborhood)) {
				updatedSelection.delete(neighborhood);
			} else {
				updatedSelection.add(neighborhood);
			}
			return Array.from(updatedSelection);
		});
	};

	useEffect(() => {
		setIsAuthenticated(sessionStorage.getItem("isAuthenticated"));
	}, [sessionStorage.getItem("isAuthenticated")]);

	return (
		isAuthenticated === "true" ? (
			loading ? (
				<Loader />
			) : (
				<div className="paddingListings">
					<Row gutter={24}>
						<Col span={5}>
							<Card>
								<div>Filter By -</div>
								<Divider />
								<div>
									<div>Zipcode</div>
									<Input
										value={zipCodeFilter}
										onChange={(e) => setZipCodeFilter(e.target.value)}
									/>
								</div>
								<div style={{ marginTop: '20px' }}>
									<div>Neighborhood</div>
									<Row gutter={16}>
										{Array.from(uniqueNeighborhoods).map((neighborhood, index) => (
											<Col span={24} key={index}>
												<div
													className={`neighborhood_card ${selectedNeighborhoods.includes(neighborhood) ? 'selected' : ''}`}
													onClick={() => handleNeighborhoodSelect(neighborhood)}
												>
													{neighborhood}
												</div>
											</Col>
										))}
									</Row>
								</div>
							</Card>
						</Col>
						<Col span={19}>
							<h1>{filteredProperties.length} Apartments Found</h1>
							<Row gutter={16}>
								{currentProperties.map((apartment, index) => (
									<Col key={index} xs={24} sm={12} md={8} lg={6}>
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
											<div>Zip Code - {apartment.zip_code}</div>
											<div>Neighborhood - {apartment.neighborhood}</div>
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
			)
		) : (
			<div className='paddingListings'>
				<p>Kindly Login!</p>
			</div>
		)
	);
};

export default ApartmentListings;
