import { Button, Card, Form, Input, Row } from 'antd';
import { useState } from 'react';
import {Form, Input, Button, Row, Card} from 'antd';
import { useEffect, useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';
import "./login.css"


const Login = () => {
    const [emailId, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const callCustomerLoginAPI = async () => {
        try {
            console.log("callCustomerLoginAPI: try");
            const response = await sendRequest("http://localhost:3000/authenticateUser", {
                "username": emailId,
                "password": password
            }, "POST", {})

            console.log("response => ", response);
        } catch (error) {
            console.log("callCustomerLoginAPI: catch");
        }
    }

    const onFinish = () => {
        // Your form submission logic here
        if(password === "" && emailId === "")
        {
            alert("Please enter email address and password");
        }

        else if(emailId === "")
        {
            alert("Please enter email address");
        }

        else if(password === "")
        {
            alert("Please enter password");
        }
        else{
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
        <div className="centered-card-login-container">
        <Card className = "loginCard">
        <Form>
    
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
            {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please enter a valid email address!',
            }
        ]}
        >
        <Input onBlur = {onChangeEmailId} className = "InputFieldClass"/>
        </Form.Item>


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
        <Input.Password onBlur = {onChangePassword} className = "InputFieldClass"/>
        </Form.Item>



        <Form.Item>
        <Button className = "LoginButtonClass" onClick = {onFinish} type="primary">Login!</Button>
        </Form.Item>

                        <Row gutter={16}>
                            <Form.Item>
                                <Button onClick={callCustomerLoginAPI} type="primary">Submit</Button>
                            </Form.Item>
                        </Row>

                    </Form>
                </Card>
            </div>

        </Form>
        </Card>
        </div>


        </>

    );
}

export default Login;