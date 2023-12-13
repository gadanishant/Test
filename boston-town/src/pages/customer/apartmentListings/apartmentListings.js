import { Row, Col, Card, Input, Divider, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import Loader from '../../../components/loader';
import sendRequest from '../../../components/sendRequest';
import './apartmentListings.css';
import { Link } from 'react-router-dom';


const ApartmentListings = () => {
	const [listOfProperties, setListOfProperties] = useState([]);
	const [zipCodeFilter, setZipCodeFilter] = useState('');
	const [filteredProperties, setFilteredProperties] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); // State to manage current page
	const pageSize = 8; // Number of items per page
	const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
	const [loading, setLoading] = useState();

	const getAllpropertyAPI = async () => {
		try {
			const response = await sendRequest("http://localhost:3000/property/getAllproperty", {}, "GET", {});
			setTimeout(() => { setLoading(false) }, [1000 * 3])
			const data = response.data.description.slice(1);
			setListOfProperties(data)

		} catch (error) {
			console.log("Error fetching properties:", error);
		}
	};

	useEffect(() => {
		setLoading(true);
		getAllpropertyAPI();
	}, []);

	useEffect(() => {
		if (zipCodeFilter.trim() === '' && selectedNeighborhoods.length === 0) {
			setFilteredProperties(listOfProperties);
		} else {
			let filtered = listOfProperties;

			if (zipCodeFilter.trim() !== '') {
				filtered = filtered.filter(
					(property) => property.zip_code === zipCodeFilter.trim()
				);
			}

			if (selectedNeighborhoods.length > 0) {
				filtered = filtered.filter((property) =>
					selectedNeighborhoods.includes(property.neighborhood)
				);
			}

			setFilteredProperties(filtered);
		}
		setCurrentPage(1); // Reset to first page when filters change
	}, [listOfProperties, zipCodeFilter, selectedNeighborhoods]);

	const indexOfLastProperty = currentPage * pageSize;
	const indexOfFirstProperty = indexOfLastProperty - pageSize;
	const currentProperties = filteredProperties.slice(
		indexOfFirstProperty,
		indexOfLastProperty
	);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const uniqueNeighborhoods = new Set();
	listOfProperties.forEach((apartment) => {
		uniqueNeighborhoods.add(apartment.neighborhood);
	});
	const uniqueNeighborhoodsArray = Array.from(uniqueNeighborhoods);

	const handleNeighborhoodSelect = (neighborhood) => {
		const updatedSelection = [...selectedNeighborhoods];

		if (updatedSelection.includes(neighborhood)) {
			const index = updatedSelection.indexOf(neighborhood);
			updatedSelection.splice(index, 1);
		} else {
			updatedSelection.push(neighborhood);
		}

		setSelectedNeighborhoods(updatedSelection);
	};

	useEffect(() => {
		setIsAuthenticated(sessionStorage.getItem("isAuthenticated"));
		console.log("isAuthenticated => ", isAuthenticated);
	}, [sessionStorage.getItem("isAuthenticated")])

	return (
		(
			isAuthenticated === "true" ?
				<>
					{
						loading ?
							<Loader />
							: <div className="paddingListings">
							<Row gutter={24}>
								<Col span={5}>
									<Card>
										Filter By -
										<Divider />
										<div>
											Zipcode
											<br/>
											<Input
												value={zipCodeFilter}
												onChange={(e) => setZipCodeFilter(e.target.value)}
											/>
										</div>
										<br/>
										<br/>
										<br/>
										<div>
											Neighborhood
											<br/>
											<Row gutter={16}>
												{uniqueNeighborhoodsArray.map((neighborhood, index) => (
													<Col span={24} key={index}>
														<div
															className={`neighborhood_card ${selectedNeighborhoods.includes(neighborhood) ? 'selected' : ''
																}`}
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
										{currentProperties.map((apartment) => (
											<Col key={apartment.id} xs={24} sm={12} md={8} lg={6}>
												<Link to="/apartmentdetails">
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
												</Link>
											</Col>
										))}
									</Row>
									<Pagination
										current={currentPage}
										total={filteredProperties.length}
										pageSize={pageSize}
										onChange={handlePageChange}
										style={{ marginTop: '20px', textAlign: 'center' }}
										showSizeChanger={false}
									/>
								</Col>
							</Row>
						</div>
					}
				</>
				: <>
					<div className='paddingListings'>
						<p>Kindly Login!</p>
					</div>
				</>
		)
	)
}

export default ApartmentListings;
