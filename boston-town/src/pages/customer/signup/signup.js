import {Form, Input, Select, Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const Signup = () => {
    const [countries, setCountries] = useState([]);

    const [searchValue, setSearchValue] = useState('');

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

    const sortedCountries = countries.slice().sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        return nameA.localeCompare(nameB);
    });
    return (
        <>
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
                <Input />
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
                <Input />
            </Form.Item>

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
            <Input />
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
            <Input.Password />
            </Form.Item>

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
            <Input.Password />
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
                <Input />
            </Form.Item>
            <Form.Item label="Country" required>
                <Select
                    showSearch
                    id="country"
                    name="country"
                    filterOption={false}
                    onSearch={handleSearch}
                >
                    <Select.Option value="" disabled>
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
                <Input/>
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
            name="uploadProfilePicture"
            label="Upload Profile Picture"
            valuePropName="fileList"
            >
            <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
            </Form.Item>

            <Form.Item
                name="profession"
                label= "Profession"
                rules={[{ required: true, message: 'Please input your profession!' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="description"
                label= "Description"
                rules={[{ required: false, message: 'Please input your profession!' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item label="Food Preference" required>
                <Select>
                <Select.Option value="" disabled required>
                Select your Food Preference
                </Select.Option>
                <Select.Option value="veg">Veg</Select.Option>
                <Select.Option value="nonVeg">Non-Veg</Select.Option>
                <Select.Option value="none">None</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Pet Preference">
                <Select>
                <Select.Option value="" disabled required>
                Select your Pet Preference
                </Select.Option>
                <Select.Option value="dog">Dog</Select.Option>
                <Select.Option value="cat">Cat</Select.Option>
                <Select.Option value="none">None</Select.Option>
                </Select>
            </Form.Item>

            <Button type="primary">Submit</Button>


        </>
    );
}

export default Signup;