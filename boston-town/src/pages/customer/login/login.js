import { Button, Card, Form, Input, Row } from 'antd';
import { useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';
import "./login.css"


const Login = () => {
    const [emailId, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const logout = 1000 * 60 * 9999999999;

    const callCustomerLoginAPI = async () => {
        try {
            console.log("callCustomerLoginAPI: try");
            const response = await sendRequest("http://localhost:3000/authenticateUser", {
                "username": emailId,
                "password": password
            }, "POST", {})

            console.log("response => ", response);
            console.log("Successfully logged in!");
            sessionStorage.setItem("isAuthenticated", "true");

            setTimeout(() => {
                console.log("setTimeout");
                sessionStorage.setItem("isAuthenticated", "false");
            }, [logout])

        } catch (error) {
            console.log("callCustomerLoginAPI: catch");
        }
    }

    const onFinish = () => {
        // Your form submission logic here
        if (password === "" && emailId === "") {
            alert("Please enter email address and password");
        }

        else if (emailId === "") {
            alert("Please enter email address");
        }

        else if (password === "") {
            alert("Please enter password");
        }
        else {
            callCustomerLoginAPI();
        }
    };


    const onChangeEmailId = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <>
            <div className="centered-card-login-container">
                <Card className="loginCard">
                    <Form>

                        <Form.Item
                            label="Username / Email Id"
                            name="emailId"
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
                            <Input placeholder="Enter your username or email address" onBlur={onChangeEmailId} className="InputFieldClass" />
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
                            <Input.Password placeholder="Enter your password" onBlur={onChangePassword} className="InputFieldClass" style={{ width: '100%' }} />
                        </Form.Item>




                        <Form.Item>
                            <Button className="LoginButtonClass" onClick={onFinish} type="primary">Login!</Button>
                        </Form.Item>


                    </Form>
                </Card>
            </div>



        </>

    );
}

export default Login;