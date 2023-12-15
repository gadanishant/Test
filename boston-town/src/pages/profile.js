import { InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood, faDog, faGlobe, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, Col, Divider, Row, Typography, Button, Modal, Form, DatePicker, Input, Select } from 'antd';
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
	const [countries, setCountries] = useState([]);
	const [searchValue, setSearchValue] = useState('');

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
	const [updateProfileModalVisible, showUpdateProfileModalVisible] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState();
	const [selectedPetPreference, setSelectedPetPreference] = useState();
	const [selectedFoodPreference, setSelectedFoodPreference] = useState();

	const [form] = Form.useForm();

	const getPostDetailsAPI = async () => {
		console.log("getPostDetailsAPI");
		try {

		} catch (error) {

		}
	}

	const updateUserDetailsAPI = async () => {
		console.log("updateUserDetailsAPI");
		try {
			const response = await sendRequest("http://localhost:3000/updateUserDetails", {
				"firstname": firstName,
				"lastname": lastName,
				"username": username,
				"password": password,
				"age": age,
				"country": selectedCountry,
				"mobile": mobile,
				"email": email,
				"profession": profession,
				"description": description,
				"food_preferences": selectedFoodPreference,
				"pet_preferences": selectedPetPreference,
				"social_media": {
					linkedin: linkedinLink,
					instagramLink: instagramLink
				}
			}, "PUT", {})

			console.log("updateUserDetailsAPI: response => ", response);
		} catch (error) {
			console.log("updateUserDetailsAPI: error => ", error);
		}
	}

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await fetch('https://restcountries.com/v3.1/all');
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setCountries(data);
			} catch (error) {
				console.error('Error fetching countries:', error.message);
			}
		};

		fetchCountries();
	}, []);

	const handleSearch = (value) => {
		setSearchValue(value);
	};

	const onChangeCountry = (value) => {
		setCountry(value);
	}

	const sortedCountries = countries.slice().sort((a, b) => {
		const nameA = a.name.common.toLowerCase();
		const nameB = b.name.common.toLowerCase();
		return nameA.localeCompare(nameB);
	});

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
			setSelectedCountry(data.country)
			setSelectedPetPreference(data.pet_preferences)
			setSelectedFoodPreference(data.food_preferences)


			form.setFieldsValue({
				firstname: data.firstname,
				lastname: data.lastname,
				age: data.age,
				phone: data.mobile,
				email: data.email,
				profession: data.profession,
				description: data.description,
				country: selectedCountry,
				foodPreference: selectedFoodPreference,
				petPreference: selectedPetPreference


				// ... (other fields)
			});

		} catch (error) {
			console.log("error => ", error);
		}
	}

	useEffect(() => {
		getUserDetailsAPI();
		console.log("username => ", username);
		if (username === user.username) setSameUser(true);
	}, [])

	const showUpdateProfileModal = () => {
		showUpdateProfileModalVisible(true);
	};

	const showUpdateProfileModalCancel = () => {
		showUpdateProfileModalVisible(false);
	};

	const onUpdateFirstName = (e) => {
		setFirstName(e.target.value);
	}
	const onUpdateLastName = (e) => {
		setLastName(e.target.value);
	}
	const onUpdateCountry = (e) => {
		setCountry(e.target.value);
	}
	const onUpdateMobile = (e) => {
		setMobile(e.target.value);
	}
	const onUpdateAge = (e) => {
		setAge(e.target.value);
	}
	const onUpdateEmail = (e) => {
		setemail(e.target.value);
	}
	const onUpdateLinkedin = (e) => {
		setLinkedinLink(e.target.value);
	}
	const onUpdateInstagram = (e) => {
		setInstagramLink(e.target.value);
	}
	const onUpdateDescription = (e) => {
		setDescription(e.target.value);
	}
	const onUpdateProfession = (e) => {
		setProfession(e.target.value);
	}
	const onUpdateFoodPreference = (e) => {
		setFoodPreferences(e.target.value);
	}
	const onUpdatePetPreference = (e) => {
		setPetPreferences(e.target.value);
	}


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

				<Button onClick={showUpdateProfileModal}>Update</Button>
			</Card>

			<Modal
				title="Update Profile"
				open={updateProfileModalVisible}
				onCancel={showUpdateProfileModalCancel}
				okText="Update"
				onOk={() => {
					updateUserDetailsAPI();
					showUpdateProfileModalCancel();
				}}
			>
				<Form form={form}>
					<Form.Item
						label="FirstName"
						name="firstname"
						rules={[
							{
								required: true,
								message: 'Please input your firstname!',
							},
						]}
					>
						<Input onBlur={onUpdateFirstName} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						label="LastName"
						name="lastname"
						rules={[
							{
								required: true,
								message: 'Please input your lastname!',
							},
						]}
					>
						<Input onBlur={onUpdateLastName} className="InputFieldClass" />
					</Form.Item>
					<Form.Item
						label="Age"
						name="age"
						rules={[
							{
								required: true,
								message: 'Please input your age!',
							},
						]}
					>
						<Input onBlur={onUpdateAge} className="InputFieldClass" />
					</Form.Item>

					<Form.Item label="Country" required>
						<Select
							showSearch
							id="country"
							name="country"
							filterOption={false}
							onSearch={handleSearch}
							onChange={onChangeCountry}
							value={selectedCountry}
						>
							<Select.Option value="" disabled className="InputFieldClass">
								Select your country
							</Select.Option>
							{sortedCountries
								.filter((country) =>
									country.name.common.toLowerCase().includes(searchValue.toLowerCase())
								)
								.map((country) => (
									<Select.Option key={country.name.common} value={country.name.common}>
										{country.name.common}
									</Select.Option>
								))}
						</Select>
					</Form.Item>

					<Form.Item
						name="phone"
						label="Phone Number"
						rules={[{ required: true, message: 'Please input your phone number!' }]}
					>
						<Input onBlur={onUpdateMobile} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						name="email"
						label="E-mail"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid email address!',
							},
							{
								required: true,
								message: 'Please input your email address!',
							},

							{
								pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: 'Please enter a valid email address!',
							}

						]}
					>
						<Input onBlur={onUpdateEmail} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						name="profession"
						label="Profession"
						rules={[{ required: true, message: 'Please input your profession!' }]}
					>
						<Input onBlur={onUpdateProfession} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						name="description"
						label="Description"
						rules={[{ required: false, message: 'Please input your description!' }]}
					>
						<Input onBlur={onUpdateDescription} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						name="linkedin"
						label="Linkedin"
						rules={[{ required: false, message: 'Please share your Linkedin profile' }]}
					>
						<Input onBlur={onUpdateLinkedin} value={linkedinLink} className="InputFieldClass" />
					</Form.Item>

					<Form.Item
						name="instagram"
						label="Instagram"
						rules={[{ required: false, message: 'Please share your Instagram Profile' }]}
					>
						<Input onBlur={onUpdateInstagram} className="InputFieldClass" />
					</Form.Item>

					<Form.Item label="Food Preference" >
						<Select name="foodPreference" value={selectedFoodPreference} className="InputFieldClass">
							<Select.Option value="Vegetarian">Vegetarian</Select.Option>
							<Select.Option value="Non-vegetarian">Non-vegetarian</Select.Option>
							<Select.Option value="None">None</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item label="Pet Preference">
						<Select name="petPreference" value={selectedPetPreference} className="InputFieldClass">
							<Select.Option value="Dogs">Dogs</Select.Option>
							<Select.Option value="Cats">Cats</Select.Option>
							<Select.Option value="None">None</Select.Option>
						</Select>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}

export default Profile;