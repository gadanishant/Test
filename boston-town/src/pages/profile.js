
import React from 'react';
import { Avatar, Typography, Card, Divider } from 'antd';
// import 'antd/dist/antd.css';

const { Title, Paragraph } = Typography;
const Profile = () => {
    return (
        <div style={{ maxWidth: '600px', margin: 'auto', paddingTop: '20px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <Avatar size={128} src="URL_TO_YOUR_IMAGE" />
            <Title level={3} style={{ margin: '10px 0' }}>
              John Doe
            </Title>
          </div>
          <Divider />
          <Typography style={{ padding: '0 20px' }}>
            <Title level={4}>About Me</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              placerat tristique elit, sed maximus nunc posuere nec.
            </Paragraph>
            <Title level={4}>Contact Information</Title>
            <Paragraph>Email: john@example.com</Paragraph>
            <Paragraph>Phone: +1234567890</Paragraph>
            <Title level={4}>Address</Title>
            <Paragraph>
              123 Street Name, City, Country, Postal Code
            </Paragraph>
          </Typography>
        </Card>
      </div>
    );
}

export default Profile;