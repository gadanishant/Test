import { Row, Col, Card, Input, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import sendRequest from '../../../components/sendRequest';
import "./apartmentListings.css";

const ApartmentListings = () => {

	const [listOfProperties, setListOfProperties] = useState([]);

	const getAllpropertyAPI = async () => {
		console.log("Inside getAllproperty");
		try {
			const response = await sendRequest("http://localhost:3000/property/getAllproperty", {}, "GET", {});
			const data = response.data.description.slice(1);
			console.log("Count of List of Properties:", data.length);
			setListOfProperties(data)
			console.log(data)
		} catch (error) {
			console.log("getAllproperty: catch block");
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		getAllpropertyAPI();
	}, [])

	return (
		<>
			<div className='paddingListings'>

				<Row gutter={24} >
					<Col span={5}>
						<Card>
							Filter By -
							<Divider></Divider>
							<div>
							Zipcode
							<Input></Input>
							</div>

						</Card>
					</Col>
					<Col span={19}>
						<h1>{listOfProperties.length} Apartments Found</h1>
						<Row gutter={16}>

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
											<div>
											Zip Code-{apartment.zip_code}
											</div>
										</Card>
									</Col>
								))}</Row>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default ApartmentListings;