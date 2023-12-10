import {Form, Input, Button} from 'antd';
import { useEffect, useState } from 'react';
import sendRequest from '../../../../src/components/sendRequest';


const Login = () => {

    const [username, setUserName] = useState("");

    const [password, setPassword] = useState("");


    const callCustomerLoginAPI = async () => {
        try {
            console.log("callCustomerLoginAPI: try");
            const response = await sendRequest("http://localhost:3000/createNewUser", {
                "password": password,
                "email": emailId,

            }, "POST", {})

            console.log("response => ", response);
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
        <Form.Item
        label="emailId"
        name="emailId"
        rules={[
            {
            required: true,
            message: 'Please input your emailId!',
            },
        ]}
        >
        <Input onBlur = {onChangeEmailId} />
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
        <Input.Password onBlur = {onChangePassword}/>
        </Form.Item>

            <Button onClick={callCustomerLoginAPI} type="primary">Submit</Button>


        </>
    );
}

export default Login;