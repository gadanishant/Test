import { Button, Card, Form, Input, Row } from 'antd';
import { useContext, useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';
import "./login.css"
import { Context } from '../../../components/context';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(Context);

    const logout = 1000 * 60 * 10;

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
            alert("Successfully logged in!")

            setUser({
                ...user,
                username: username,
                password: password,
                userId: userId
            })

            sessionStorage.setItem("isAuthenticated", "true");

            setTimeout(() => {
                console.log("setTimeout");
                sessionStorage.setItem("isAuthenticated", "false");
            }, [logout])

        } catch (error) {
            console.log("error => ", error);
            console.log("authenticateUserAPI: catch");
        }
    }

    const onFinish = () => {
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


    return (
        <>
            <div className="centered-card-login-container">
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
                            <Button className="LoginButtonClass" onClick={onFinish} type="primary">Login!</Button>
                        </Form.Item>


                    </Form>
                </Card>
            </div>



        </>

    );
}

export default Login;