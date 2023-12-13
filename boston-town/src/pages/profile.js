import { Avatar, Card, Divider, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sendRequest from '../components/sendRequest';

const Profile = () => {
	const { Title, Paragraph } = Typography;
	const { username } = useParams();

	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [password, setPassword] = useState();
	const [country, setCountry] = useState();
	const [mobile, setMobile] = useState();
	const [age, setAge] = useState();
	const [email, setemail] = useState();
	const [profession, setProfession] = useState();
	const [description, setDescription] = useState();
	const [foodPreferences, setFoodPreferences] = useState();
	const [petPreferences, setPetPreferences] = useState();

	const getUserDetailsAPI = async () => {
		try {
			const response = await sendRequest(`http://localhost:3000/getUserDetails?username=${username}`, {}, "GET", {});
			const data = response.data.description.slice(1)[0];
			console.log("data => ", data);

			setFirstName(data.firstname);
			setLastName(data.lastname);
			setPassword(data.password);
			setCountry(data.country);
			setMobile(data.mobile);
			setAge(data.age);
			setemail(data.email);
			setProfession(data.profession);
			setDescription(data.description);
			setFoodPreferences(data.food_preferences);
			setPetPreferences(data.pet_preferences);
		} catch (error) {
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		getUserDetailsAPI();
		console.log("username => ", username);
	}, [])

	console.log("firstName => ", firstName)
	console.log("lastName => ", lastName)
	console.log("password => ", password)
	console.log("country => ", country)
	console.log("mobile => ", mobile)
	console.log("age => ", age)
	console.log("email => ", email)
	console.log("profession => ", profession)
	console.log("description => ", description)
	console.log("foodPreferences => ", foodPreferences)
	console.log("petPreferences => ", petPreferences)

	return (
		<div style={{ maxWidth: '600px', margin: 'auto', paddingTop: '20px' }}>
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