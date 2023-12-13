import React from 'react';
import { Layout, Typography } from 'antd';
import './privacyPolicy.css'

const { Content } = Layout;
const { Title, Paragraph } = Typography;



const PrivacyPolicy = () => {
  return (
    <div class = "padding_privacy_policy">
    <Layout style={{ padding: '24px' }}>
      <Content style={{ background: '#fff', padding: '24px', margin: 0, minHeight: 280 }}>
        <Typography>
          <Title level={2}>Privacy Policy</Title>

          <p>Effective date: February 11, 2023</p>
          <p>Last updated on: February 11, 2023</p>

          <Paragraph>
            This Privacy Policy governs the manner in which Boston Town collects, uses, maintains, and discloses
            information collected from users (each, a "User") of the localhost website ("Site"). This privacy
            policy applies to the Site and all products and services offered by Boston Town.
          </Paragraph>

          <Title level={3}>1. Information we collect</Title>

          <Paragraph>
            We may collect personal identification information from Users in a variety of ways, including, but not
            limited to, when Users visit our site, register on the site, fill out a form, respond to a survey, and in
            connection with other activities, services, features, or resources we make available on our Site. Users may be
            asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our
            Site anonymously. We will collect personal identification information from Users only if they voluntarily
            submit such information to us. Users can always refuse to supply personally identification information,
            except that it may prevent them from engaging in certain Site-related activities.
          </Paragraph>

          {/* Additional sections like '2. How we use collected information', '3. Protection of your information', etc., can be added here. */}

          <Title level={3}>2. Changes to this privacy policy</Title>

          <Paragraph>
            Boston Town has the discretion to update this privacy policy at any time. When we do, we will
            revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the personal information we collect. You
            acknowledge and agree that it is your responsibility to review this privacy policy periodically and become
            aware of modifications.
          </Paragraph>

          <Title level={3}>3. Your acceptance of these terms</Title>

          <Paragraph>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do
            not use our Site. Your continued use of the Site following the posting of changes to this policy will be
            deemed your acceptance of those changes.
          </Paragraph>

          {/* Add more sections as needed */}

        </Typography>
      </Content>
    </Layout>
    </div>
  );
};

export default PrivacyPolicy;