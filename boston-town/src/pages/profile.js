import { Avatar, Card, Divider, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sendRequest from '../components/sendRequest';
import "./profile.css";


const Profile = () => {
	const { Title, Paragraph } = Typography;
	const { username } = useParams();
	// let path = "http://localhost:3000/getUserDetails/";

	const getUserDetailsAPI = async () => {
		try {
			// const response = await sendRequest(`http://localhost:3000/getUserDetails/${userId}`, {}, "GET", {});
			// console.log("response => ", response);
		} catch (error) {
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		getUserDetailsAPI();
		console.log("username => ", username);
	}, [])
	
	return (
		<div className='profile_page'>
			<Card>
				<div style={{ textAlign: 'center' }}>
					<Avatar size={128} src="URL_TO_YOUR_IMAGE" />
					<Title level={3} style={{ margin: '10px 0' }}>
						John Doe
					</Title>
				</div>
				<Divider />
				<Typography style={{ padding: '0 20px' }}>
					<Title level={4}>About Me</Title>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						placerat tristique elit, sed maximus nunc posuere nec.
					</Paragraph>
					<Title level={4}>Contact Information</Title>
					<Paragraph>Email: john@example.com</Paragraph>
					<Paragraph>Phone: +1234567890</Paragraph>
					<Title level={4}>Address</Title>
					<Paragraph>
						123 Street Name, City, Country, Postal Code
					</Paragraph>
				</Typography>
			</Card>
		</div>
	);
}

export default Profile;