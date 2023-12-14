import { Button, Card, Form, Input, Modal, Row } from 'antd';
import { useContext, useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';
import "./login.css"
import { Context } from '../../../components/context';
import { Navigate } from 'react-router-dom';
import Success from '../../../components/modals/success';

// Inside your component's logic, after successful authentication



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const logout = 1000 * 60 * 15;

    const getUserDetailsAPI = async () => {
        try {
            const response = await sendRequest(`http://localhost:3000/getUserDetails?username=${username}`, {}, "GET", {})
            const data = response.data.description
            console.log("getUserDetailsAPI: response => ", data);

            return data;
        } catch (error) {
            console.log("error => ", error);
        }
    }

    const authenticateUserAPI = async () => {
        try {
            console.log("authenticateUserAPI: try");
            const response = await sendRequest("http://localhost:3000/authenticateUser", {
                "username": username,
                "password": password
            }, "POST", {})

            console.log("response => ", response);
            const userId = response.data.description._id;
            // console.log("Successfully logged in!");
            // alert("Successfully logged in!")

            const data = getUserDetailsAPI();
            console.log("authenticateUserAPI: data => ", data);

            setShowModal(true);
            setTimeout(() => {
                setShowModal(false)

                setUser({
                    ...user,
                    username: username,
                    password: password,
                    userId: userId,        
                    social_media: data.social_media,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    age: data.age,
                    country: data.country,
                    mobile: data.mobile,
                    email: data.email,
                    profession: data.profession,
                    description: data.description,
                    food_preferences: data.food_preferences,
                    pet_preferences: data.pet_preferences,
                    posts: data.posts,
                    incidents: data.incidents,
                })

                sessionStorage.setItem("isAuthenticated", "true");
            }, [1000 * 2])


            setTimeout(() => {
                console.log("setTimeout");
                sessionStorage.setItem("isAuthenticated", "false");
            }, [logout])

        } catch (error) {
            console.log("error => ", error);
            console.log("authenticateUserAPI: catch");
        }
    }

    const onClickLogin = () => {
        // Your form submission logic here
        if (password === "" && username === "") {
            alert("Please enter username and password");
        }

        else if (username === "") {
            alert("Please enter username");
        }

        else if (password === "") {
            alert("Please enter password");
        }
        else {
            authenticateUserAPI();
        }
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    if (sessionStorage.getItem("isAuthenticated") === "true") {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Modal
                className="successModal"
                title="Successful Login"
                open={showModal}
                // onOk={handleAddIncidentSubmit}
                onCancel={() => setShowModal(false)}
                closable={false}
                footer={null}
            >
                <p>Welcome</p>
            </Modal>
            <div className="centered-card-login-container">
                <Success />
                <Card className="loginCard">
                    <Form>
                        <Form.Item
                            label="Username / Email Id"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email address!',
                                },

                                {
                                    // pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Please enter a valid email address!'
                                }
                            ]}>
                            <Input placeholder="Enter your username or email address" onBlur={onChangeUsername} className="InputFieldClass" />
                        </Form.Item>
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
                            <Input.Password
                                placeholder="Enter your password"
                                onBlur={onChangePassword}
                                className="InputFieldClass"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button className="LoginButtonClass" onClick={onClickLogin} type="primary">Login!</Button>
                        </Form.Item>


                    </Form>
                </Card>
            </div>
        </>

    );
}

export default Login;