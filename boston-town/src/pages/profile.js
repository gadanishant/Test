import { InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood, faDog, faGlobe, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, Col, Divider, Row, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ageIcon from '../../../boston-town/src/assets/images/ageIcon.png';
import contactInfo from '../../../boston-town/src/assets/images/contactInfo.png';
import person from '../assets/images/person.jpeg';
import { Context } from '../components/context';
import sendRequest from '../components/sendRequest';
import "./profile.css";


const Profile = () => {
	const { Title, Paragraph } = Typography;
	const { username } = useParams();
	const { user, setUser } = useContext(Context);
	const [sameUser, setSameUser] = useState();

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
	const [profilePicture, setProfilePicture] = useState();
	const [instagramLink, setInstagramLink] = useState();
	const [linkedinLink, setLinkedinLink] = useState();
	const [posts, setPosts] = useState([]);

	const getPostDetailsAPI = async () => {
		console.log("getPostDetailsAPI");
		try {

		} catch (error) {

		}
	}

	const getUserDetailsAPI = async () => {
		try {
			const response = await sendRequest(`http://localhost:3000/getUserDetails?username=${username}`, {}, "GET", {});
			const data = response.data.description
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
			setInstagramLink(data.social_media.instagram)
			setLinkedinLink(data.social_media.linkedin)
			setPosts(data.posts)

		} catch (error) {
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		getUserDetailsAPI();
		console.log("username => ", username);
		if (username === user.username) setSameUser(true);
	}, [])

	/*
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
	*/

	return (
		<div className='profile_page'>
			<Card className='details-container'>
				<div style={{ textAlign: 'center' }}>
					<Avatar size={128} src={profilePicture ? "" : person} />
					<Title level={3} style={{ margin: '10px 0 0 0' }}>
						{firstName} {lastName}
					</Title>
				</div>
				<div style={{ textAlign: 'center' }}>
					<Paragraph>{username}</Paragraph>
				</div>
				<Divider />

				<Typography style={{ padding: '0 20px' }}>
					<Title level={4}>About Me</Title>
					<Paragraph>
						{description}
					</Paragraph>

					<Row gutter={16}>
						<Col span={12}>

							<Paragraph className="profileRow">  <FontAwesomeIcon icon={faGlobe} className="profileIcons" ></FontAwesomeIcon> Country: {country}</Paragraph>

						</Col>
						<Col span={12}>
							<Paragraph className="profileRow"> <img id="ageIcon" src={ageIcon} className="profileIcons"></img>Age: {age}</Paragraph>

						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>

							<Paragraph className="profileRow"> <FontAwesomeIcon icon={faUserTie} className="profileIcons" ></FontAwesomeIcon>Profession: {profession}</Paragraph>

						</Col>

						<Col span={12}>

							<Paragraph className="profileRow"><FontAwesomeIcon icon={faBowlFood} className="profileIcons" ></FontAwesomeIcon> Food Preference: {foodPreferences}</Paragraph>

						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Paragraph className="profileRow"> <FontAwesomeIcon icon={faDog} className="profileIcons" ></FontAwesomeIcon>Pet Preference: {petPreferences}</Paragraph>

						</Col>
					</Row>

					<Title level={4} className="profileRow"><img id="contactInfo" src={contactInfo}></img>Contact Information</Title>
					<Row gutter={16}>
						<Col span={12}>
							<Paragraph className="profileRow"> <MailOutlined className="profileIcons" />{email}</Paragraph>
						</Col>
						<Col span={12}>
							<Paragraph className="profileRow"> <PhoneOutlined className="profileIcons" />{mobile}</Paragraph>
						</Col>
					</Row>


					<Row gutter={16}>
						<Col span={12}>
							<Paragraph className="profileRow"><InstagramOutlined className="profileIcons" />{instagramLink}</Paragraph>
						</Col>
						<Col span={12}>
							<Paragraph className="profileRow"><FontAwesomeIcon icon={faLinkedinIn} className="profileIcons" ></FontAwesomeIcon>{linkedinLink}</Paragraph>
						</Col>
					</Row>
				</Typography>
			</Card>
		</div>
	);
}

export default Profile;