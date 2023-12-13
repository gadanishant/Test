import { Avatar, Card, Divider, Typography, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood ,faDog, faFilePen, faUserTie, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import sendRequest from '../components/sendRequest';
import {MailOutlined, PhoneOutlined, HomeOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons';
import "./profile.css"
import contactInfo from '../../../boston-town/src/assets/images/contactInfo.png';
import ageIcon from '../../../boston-town/src/assets/images/ageIcon.png';


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

					<Row gutter={16}>
                	<Col span={12}>

					<Paragraph className = "profileRow">  <FontAwesomeIcon icon={faGlobe} className = "profileIcons" ></FontAwesomeIcon> Country: India</Paragraph>

					</Col>
					<Col span={12}>
					<Paragraph className = "profileRow"> <img id = "ageIcon" src = {ageIcon} className = "profileIcons"></img>Age: 22</Paragraph>

					</Col>
					</Row>
					<Row gutter={16}>
                	<Col span={12}>

					<Paragraph className = "profileRow"> <FontAwesomeIcon icon={faUserTie} className = "profileIcons" ></FontAwesomeIcon>Profession: India</Paragraph>

					</Col>

					<Col span={12}>

					<Paragraph className = "profileRow"><FontAwesomeIcon icon={faBowlFood} className = "profileIcons" ></FontAwesomeIcon> Food Preference: India</Paragraph>

					</Col>
					</Row>
					<Row gutter={16}>
					<Col span={12}>
					<Paragraph className = "profileRow"> <FontAwesomeIcon icon={faDog} className = "profileIcons" ></FontAwesomeIcon>Pet Preference: 22</Paragraph>

					</Col>
					</Row>

					<Title level={4} className = "profileRow"><img id = "contactInfo" src = {contactInfo}></img>Contact Information</Title>
					<Row gutter={16}>
					<Col span={12}>
					<Paragraph className = "profileRow"> <MailOutlined className = "profileIcons"/> john@example.com</Paragraph>
					</Col>
					<Col span={12}>
					<Paragraph className = "profileRow"> <PhoneOutlined className = "profileIcons"/> +1234567890</Paragraph>
					</Col>
					</Row>


					<Row gutter={16}>
					<Col span={12}>
					<Paragraph className = "profileRow"><InstagramOutlined className = "profileIcons"/>Instagram Link</Paragraph>
					</Col>
					<Col span={12}>
					<Paragraph className = "profileRow"><FontAwesomeIcon icon={faLinkedinIn} className = "profileIcons" ></FontAwesomeIcon>LinkedIn Link</Paragraph>				
					</Col>
					</Row>
					<Title level={4} className = "profileRow"> <FontAwesomeIcon icon={faFilePen} className = "profileIcons" ></FontAwesomeIcon> Description</Title>
					<Paragraph>
						123 Street Name, City, Country, Postal Code
					</Paragraph>
				</Typography>
			</Card>
		</div>
	);
}

export default Profile;