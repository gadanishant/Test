// Importing necessary components and styles
import { Form, Input, Select, Button, Upload, message, Card, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';
import "./signup.css"
import { Navigate } from 'react-router-dom';
import Button_component from '../../../components/Button_component';

// Signup component
const Signup = () => {
        // State variables for form inputs and other data
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [mobile, setMobile] = useState("");
    const [image, setImage] = useState("");
    const [emailId, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [description, setDescription] = useState("");
    const [linkedinURL, setLinkedinURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");
    const [petPreference, setPetPreference] = useState("");
    const [foodPreference, setFoodPreference] = useState("");

    const [successfulSignup, setSuccessfulSignup] = useState();

    // Fetching countries data from the API on component mount
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

    // Handling search for countries
    const handleSearch = (value) => {
        setSearchValue(value);
    };

    const sortedCountries = countries.slice().sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        return nameA.localeCompare(nameB);
    });


        // Props for image upload component
    const UploadImageprops = {
        name: 'file',
        //replace this url with api endpoint that handles file uploads
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


        // Function to call the API for creating a new user
    const callCreateNewUserAPI = async () => {

        if (firstName === "" || lastName === "" || userName === "" || password === "" ||
            confirmPassword === "" || age === "" || country === "" || mobile === "" || emailId === ""
            || profession === "") {
            alert("Please enter all required fields");
        }
        else {

            try {
                console.log("callCreateNewUserAPI: try");
                const response = await sendRequest("http://localhost:3000/createNewUser", {
                    "firstname": firstName,
                    "lastname": lastName,
                    "username": userName,
                    "password": password,
                    "confirm_password": confirmPassword,
                    "age": age,
                    "country": country,
                    "mobile": mobile,
                    "email": emailId,
                    "profession": profession,
                    "description": description,
                    "social_media": {
                        "linkedin": linkedinURL,
                        "instagram": instagramURL
                    },
                    "food_preferences": foodPreference,
                    "pet_preferences": petPreference
                }, "POST", {})

                console.log("response => ", response);

                setSuccessfulSignup(true);
            } catch (error) {
                console.log("callCreateNewUserAPI: catch");
            }
        }
    }


        // Event handlers for form input changes

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    const onChangeCountry = (value) => {
        setCountry(value);
    }

    const onChangeMobile = (e) => {
        setMobile(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeProfession = (e) => {
        setProfession(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }


    const onChangeFoodPreference = (value) => {
        setFoodPreference(value);
    }

    const onChangePetPreference = (value) => {
        setPetPreference(value);
    }

    const onBlurLinkedin = (e) => {
        setLinkedinURL(e.target.value);
    }
    const onBlurInstagram = (e) => {
        setInstagramURL(e.target.value);
    }
    
    // Redirecting to login page after successful signup
    if (successfulSignup) {
        console.log("successfulSignup => ", successfulSignup);
        return <Navigate to="/login" />;
    }

        // Rendering the signup form

    return (
        <>
            <div className="centered-card-container">
                <Card className="signUpCard">
                    <Form>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="First Name"
                                    name="firstname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your firstname!',
                                        },
                                    ]}
                                >
                                    <Input className="InputFieldClass" onBlur={onChangeFirstName} />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    label="Last Name"
                                    name="lastname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your lastname!',
                                        },
                                    ]}
                                >
                                    <Input className="InputFieldClass" onBlur={onChangeLastName} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input className="InputFieldClass" onBlur={onChangeUserName} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className="InputFieldClass" onBlur={onChangePassword} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmpassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className="InputFieldClass" onBlur={onChangeConfirmPassword} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>

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
                                    <Input onBlur={onChangeAge} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Country" required>
                                    <Select
                                        showSearch
                                        id="country"
                                        name="country"
                                        filterOption={false}
                                        onSearch={handleSearch}
                                        onChange={onChangeCountry}
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
                            </Col>
                            <Col span={12}>

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input onBlur={onChangeMobile} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                        </Row>


                        <Row gutter={16}>
                            <Col span={12}>
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
                                    <Input onBlur={onChangeEmail} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                            <Col span={12}>

                                <Form.Item
                                    name="uploadProfilePicture"
                                    label="Upload Profile Picture"
                                    valuePropName="fileList"
                                >
                                    <Upload {...UploadImageprops} className="InputFieldClass"
                                        maxCount={1}
                                    >
                                        {/* <Button icon={<UploadOutlined />}>Click to upload</Button> */}
                                        <Button_component icon={<UploadOutlined />}>
                                        Click to upload
                                        </Button_component>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="profession"
                                    label="Profession"
                                    rules={[{ required: true, message: 'Please input your profession!' }]}
                                >
                                    <Input onBlur={onChangeProfession} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                            <Col span={12}>

                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[{ required: false, message: 'Please input your profession!' }]}
                                >
                                    <Input onBlur={onChangeDescription} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="linkedin"
                                    label="Linkedin"
                                    rules={[{ required: true, message: 'Please share your Linkedin profile' }]}
                                >
                                    <Input onBlur={onBlurLinkedin} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                            <Col span={12}>

                                <Form.Item
                                    name="instagram"
                                    label="Instagram"
                                    rules={[{ required: false, message: 'Please share your Instagram Profile' }]}
                                >
                                    <Input onBlur={onBlurInstagram} className="InputFieldClass" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>

                                <Form.Item label="Food Preference" required>
                                    <Select onChange={onChangeFoodPreference} value={foodPreference} className="InputFieldClass">
                                        <Select.Option value="Vegetarian">Vegetarian</Select.Option>
                                        <Select.Option value="Non-vegetarian">Non-vegetarian</Select.Option>
                                        <Select.Option value="None">None</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={12}>


                                <Form.Item label="Pet Preference">
                                    <Select onChange={onChangePetPreference} value={petPreference} className="InputFieldClass">
                                        <Select.Option value="Dogs">Dogs</Select.Option>
                                        <Select.Option value="Cats">Cats</Select.Option>
                                        <Select.Option value="None">None</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>


                        {/* <Button className="submitButton" onClick={callCreateNewUserAPI} type="primary">
                            Sign Up
                        </Button> */}
                        <Button_component className="submitButton" onClick={callCreateNewUserAPI} type="primary"> Sign Up</Button_component>

                    </Form>
                </Card>
            </div >
        </>
    );
}

export default Signup;