import example from "../../../assets/Image_created_with_a_mobile_phone.png";
import { Button, Form, Input, MyFormItemGroup} from 'antd';
const Signup = () => {

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countryDropdown = document.getElementById('country');

        // Add each country as an option in the dropdown
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            countryDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching countries:', error));

            return (
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItemGroup prefix={['user']}>

                        <MyFormItemGroup prefix={['name']}>


                            <MyFormItem name="firstName" label="First Name">
                                rules={[{ required: true, message: 'FirstName is required' }]}
                                <Input />
                            </MyFormItem>

                            <MyFormItem name="lastName" label="Last Name">
                                rules={[{ required: true, message: 'LastName is required' }]}
                                <Input />
                            </MyFormItem>
                        </MyFormItemGroup>

                        <MyFormItem name="userName" label="User Name">
                            rules={[{ required: true, message: 'UserName is required' }]}
                            <Input />
                        </MyFormItem>
                    </MyFormItemGroup>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Password is required',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <MyFormItem name="age" label="Age">
                        rules={[{ required: true, message: 'Age is required' }]}
                        <Input />
                    </MyFormItem>
                <MyFormItemGroup>
                    <Form.Item label="Country">
                        <Space.Compact>
                            <Form.Item
                                name="country"
                                noStyle
                                rules={[{ required: true, message: 'Country is required' }]}
                            >
                                <select id="country" name="country" required>
                                    <option value="" disabled selected>Select your country</option>
                                </select>
                    </Form.Item>
                    </Space.Compact>
                    </Form.Item>

                            <MyFormItem name="mobilenumber" label="MobileNumber">
                                rules={[{ required: true, message: 'Mobile Number is required' }]}
                                <Input />
                            </MyFormItem>
                    </MyFormItemGroup>

                        <MyFormItem name="email" label="Email">
                            rules={[{ required: true, message: 'Email is required' }]}
                            <Input />
                        </MyFormItem>
                    <MyFormItemGroup><Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="longgggggggggggggggggggggggggggggggggg"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Upload profile picture</Button>
                        </Upload>
                    </Form.Item>

                    <MyFormItem name="profession" label="Profession">
                        <Input />
                    </MyFormItem>
                </MyFormItemGroup>

                
                <MyFormItem name="description" label="Description">
                <Input />
                </MyFormItem>

                
                <><Form.Item
                        name="select"
                        label="Select"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select your food preference!' }]}
                    >
                        <Select placeholder="Please select your food preference!">
                            <Option value="veg">Veg</Option>
                            <Option value="non-veg">Non-Veg</Option>
                        </Select>
                    </Form.Item>
                    
                    <Form.Item
                        name="select"
                        label="Select"
                        hasFeedback
                        rules={[{ message: 'Please select your pet preference!' }]}
                    >
                            <Select placeholder="Please select your pet preference!">
                                <Option value="dog">Dog</Option>
                                <Option value="cat">Cat</Option>
                                <Option value="none">None</Option>
                            </Select>
                        </Form.Item><Button type="primary" htmlType="submit">
                            Submit
                        </Button></>
            </Form>
  );
}


export default Signup;

