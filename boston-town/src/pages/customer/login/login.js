import { Button, Card, Form, Input, Row } from 'antd';
import { useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';


const Login = () => {
    const [emailId, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const logout = 1000 * 60 * 2;

    const callCustomerLoginAPI = async () => {
        try {
            console.log("callCustomerLoginAPI: try");
            const response = await sendRequest("http://localhost:3000/authenticateUser", {
                "username": emailId,
                "password": password
            }, "POST", {})

            console.log("response => ", response);
            console.log("Successfully logged in!");
            sessionStorage.setItem("isAuthenticated", true);
            
            setTimeout(() => {
                console.log("setTimeout");
                sessionStorage.setItem("isAuthenticated", false);
            }, [logout])

        } catch (error) {
            console.log("callCustomerLoginAPI: catch");
        }
    }


    const onChangeEmailId = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <>
            <div className="centered-card-container">
                <Card className="signUpCard" style={{ width: 400 }}>
                    <Form>

                        <Row gutter={16}>
                            <Form.Item
                                label="Email Id"
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
                                ]}
                            >
                                <Input onBlur={onChangeEmailId} className="InputFieldClass" style={{ width: '100%' }} />
                            </Form.Item>
                        </Row>

                        <Row gutter={16}>
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
                                <Input.Password onBlur={onChangePassword} className="InputFieldClass" style={{ width: '100%' }} />
                            </Form.Item>
                        </Row>


                        <Row gutter={16}>
                            <Form.Item>
                                <Button onClick={callCustomerLoginAPI} type="primary">Submit</Button>
                            </Form.Item>
                        </Row>

                    </Form>
                </Card>
            </div>
        </>
    );
}

export default Login;