import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Card, Input, Divider, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
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
	const [disabled, setDisabled] = useState(false);
	const [bedSelected, setBedSelected] = useState([]);

	const handleSelect = (number) => {
		const isSelected = bedSelected.includes(number);
		let updatedSelection = [];

		if (isSelected) {
			updatedSelection = bedSelected.filter((selected) => selected !== number);
		} else {
			updatedSelection = [...bedSelected, number];
		}

		setBedSelected(updatedSelection);
	};

	const getCircleStyle = (number) => {
		return bedSelected.includes(number)
			? {
				backgroundColor: 'blue',
				color: 'white',
			}
			: {}; // Return default styles if not selected
	};
    const navigate = useNavigate();

    // Click event handler
    const handleCardClick = (apartment) => {
        // Navigate to details page with apartment info
		console.log("apartment => ", apartment);
        navigate(`/apartmentdetails`, { state: { apartment } });
    };
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
			const zipCodeMatch = zipCodeFilter.trim() === '' || property.zip_code.startsWith(zipCodeFilter.trim());
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

	const onChange = (checked) => {
		setDisabled(checked);
	};

	console.log("testing", { listOfProperties })

	return (
		isAuthenticated === "true" ? (
			loading ? (
				<Loader />
			) : (
				<div className="paddingListings">
					<Row>
						<Col span={5}>
							<h2 className='accent_red'>
								Find the best<br /> apartment
							</h2>
						</Col>
						<Col span={19}>
							<h1>{filteredProperties.length} Apartments Found</h1>
						</Col>
					</Row>
					<br />
					<br />
					<Row gutter={24}>
						<Col span={5}>
							<Card>
								<div>Filter By -</div>
								<Divider />
								<div>
									No of Bedrooms
								</div>
								<br />
								<div>
									<Row gutter={[12, 12]}>
										{[1, 2, 3, 4, 5].map((number) => (
											<React.Fragment key={number}>
												<Col
													align="middle"
													span={7}
													className="bedroom_circle"
													style={getCircleStyle(number)}
													onClick={() => handleSelect(number)}
												>
													{number}
												</Col>
												{number !== 5 && <Col span={1} />}
											</React.Fragment>
										))}
									</Row>

								</div>
								<br />
								<br />
								<div>
									No of Bathrooms
								</div>
								<br />
								<div>
									<Row gutter={[12, 12]}>
										<Col align="middle" span={7} className="bedroom_circle">
											1
										</Col>
										<Col span={1}>
										</Col>
										<Col align="middle" span={7} className="bedroom_circle">
											2
										</Col>
										<Col span={1}>
										</Col>
										<Col align="middle" span={7} className="bedroom_circle">
											3
										</Col>
										<Col align="middle" span={7} className="bedroom_circle">
											4
										</Col>
										<Col span={1}>
										</Col>
										<Col align="middle" span={7} className="bedroom_circle">
											5
										</Col>


									</Row>

								</div>
								<br />
								<br />
								<div>
									<div>Zipcode</div>
									<br />
									<Input
										value={zipCodeFilter}
										onChange={(e) => setZipCodeFilter(e.target.value)}
									/>
								</div>
								<br />
								<br />
								<div>
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
								<br />

								<div>
									Maximum Rent
								</div>

								<div>
									<Slider min={0}
										range
										defaultValue={[0, 2000]}
										max={5000} disabled={disabled}
										step={100}
									/>
								</div>
							</Card>
						</Col>
						<Col span={19}>
							<Row gutter={16}>
								{currentProperties.map((apartment, index) => (
									<Col key={index} xs={24} sm={12} md={8} lg={8}>
										<Card
											hoverable
											// cover={<img alt="apartment" src={apartment.image} />}
											className="property-card"
											onClick={() => handleCardClick(apartment)} // Add click event
										>

											{/* <Card.Meta
												title={apartment.title}
												description={apartment.description}
											/> */}
											<img className='listing_home_img' src={apartment.images[1]}></img>
											<div style={{ marginTop: '16px' }}>
												<b><h2>${apartment.price} / mo</h2></b>
											</div>
											<div>
												<h3><b>{apartment.title}</b></h3>
											</div>
											<br />
											<Row gutter={[24, 24]}>
												<Col align="center" span={6}>
													<Space>
														<img className='icon' src="https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167139089x172125820032762440/Vectorbed.svg"></img> {apartment.bedrooms}
													</Space>

												</Col>
												<Col align="center" span={6}>
													<Space>
														<img className='icon' src="https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167200873x190593201659127420/Group%2070bath.svg"></img> {apartment.bathrooms}
													</Space>

												</Col>
												<Col align="center" span={12}>
													<Space>
														<img className='icon' src="https://09bf81bfe27e51071744f3d8af8cdc0c.cdn.bubble.io/f1666167207372x370943336758121400/Group%2081area.svg"></img> {apartment.area}
													</Space>

												</Col>
											</Row>
											<div className='apt_desc'>
												{apartment.description.split('-')[1]}
											</div>
											<div>Zip Code - {apartment.zip_code}</div>
											<div> Neighborhood -  {apartment.neighborhood}</div>
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
