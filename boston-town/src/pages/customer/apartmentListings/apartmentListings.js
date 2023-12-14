import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Card, Input, Divider, Pagination, Slider, Space } from 'antd';
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
	const [bathSelected, setBathSelected] = useState([]);
    const [rentRange, setRentRange] = useState([0, 5000]);


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

	const handleBathSelect = (number) => {
        const isSelected = bathSelected.includes(number);
        let updatedSelection = isSelected ? bathSelected.filter(n => n !== number) : [...bathSelected, number];
        setBathSelected(updatedSelection);
    };


	const getCircleStyle = (number, type) => {
        const isSelected = type === 'bed' ? bedSelected.includes(number) : bathSelected.includes(number);
        return isSelected
            ? {
                backgroundColor: 'rgb(28, 138, 221)',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
            }
            : {};
    };

	const navigate = useNavigate();

	const filteredProperties = useMemo(() => {
        return listOfProperties.filter(property => {
            const zipCodeMatch = zipCodeFilter.trim() === '' || property.zip_code.startsWith(zipCodeFilter.trim());
            const neighborhoodMatch = selectedNeighborhoods.length === 0 || selectedNeighborhoods.includes(property.neighborhood);
            const bedroomMatch = bedSelected.length === 0 || bedSelected.includes(property.bedrooms);
            const bathroomMatch = bathSelected.length === 0 || bathSelected.includes(property.bathrooms);
            const rentMatch = property.price >= rentRange[0] && property.price <= rentRange[1];
            return zipCodeMatch && neighborhoodMatch && bedroomMatch && bathroomMatch && rentMatch;
        });
    }, [listOfProperties, zipCodeFilter, selectedNeighborhoods, bedSelected, bathSelected, rentRange]);

    // Click event handler
    const handleCardClick = (apartment) => {
        // Navigate to details page with apartment info
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

	const onRentRangeChange = (range) => {
        setRentRange(range);
    };

	useEffect(() => {
		getAllpropertyAPI();
	}, []);

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
							{/* <h2 className='accent_red'>
								Find the best<br /> apartment
							</h2> */}
						</Col>
						<Col span={19}>
							<h1>{filteredProperties.length} Apartments Found</h1>
						</Col>
					</Row>
					<br />
					<br />
					<Row gutter={24}>
						<Col className="filter_show"  xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
							<Card>
								<div>Filter By :</div>
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
													style={getCircleStyle(number, 'bed')}
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
										{[1, 2, 3, 4, 5].map((number) => (
											<React.Fragment key={number}>
												<Col
													align="middle"
													span={7}
													className="bedroom_circle"
													style={getCircleStyle(number, 'bath')}
													onClick={() => handleBathSelect(number)}
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
									Rent Range:
								</div>
								<div>
									<Slider
										min={0}
										range
										value={rentRange}
										max={5000}
										disabled={disabled}
										onChange={onRentRangeChange}
										step={100}
									/>
								</div>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={24} lg={19} xl={19} xxl={19}>
							<Row gutter={16}>
								{currentProperties.map((apartment, index) => (
									<Col key={index} xs={24} sm={12} md={8} lg={8}>
										<Card
											hoverable
											className="property-card"
											onClick={() => handleCardClick(apartment)}
										>
											<img className='listing_home_img' src={apartment.images[1]} alt='apartment'></img>
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
