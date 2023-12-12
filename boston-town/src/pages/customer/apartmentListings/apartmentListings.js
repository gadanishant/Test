import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Loader from '../../../components/loader';
import sendRequest from '../../../components/sendRequest';
import "./apartmentListings.css";

const ApartmentListings = () => {

	const [listOfProperties, setListOfProperties] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticated"));
	const [loading, setLoading] = useState();

	const getAllpropertyAPI = async () => {
		console.log("Inside getAllproperty");
		try {
			const response = await sendRequest("http://localhost:3000/property/getAllproperty", {}, "GET", {});
			setTimeout(() => { setLoading(false) }, [1000 * 3])
			const data = response.data.description.slice(1);
			setListOfProperties(data)

		} catch (error) {
			console.log("getAllproperty: catch block");
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		setLoading(true);
		getAllpropertyAPI();
	}, [])

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
							: <div className='paddingListings'>
								<Row gutter={16} >
									{
										listOfProperties.map((apartment) => (
											<Col key={apartment.id} xs={24} sm={12} md={8} lg={6}>
												<Card
													hoverable
													cover={<img alt="apartment" src={apartment.image} />}
													className='property-card'
												>
													<Card.Meta
														title={apartment.title}
														description={apartment.description}
													/>
													<div style={{ marginTop: '16px' }}>
														<p>{apartment.price}</p>
													</div>
												</Card>
											</Col>
											// <p key={index}>{apartment.title}</p>
										))}
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