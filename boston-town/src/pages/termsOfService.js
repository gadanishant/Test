import React from 'react';
import { Layout, Typography } from 'antd';
import "./termsofService.css"

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsOfService = () => {
  return (
    <div class = "terms_of_service">
    <Layout style={{ padding: '24px' }}>
      <Content style={{ background: '#fff', padding: '24px', margin: 0, minHeight: 280 }}>
        <Typography>
          <Title level={2}>Terms of Service</Title>

          <p>Effective date: February 11, 2023</p>
          <p>Website Covered: www.bostontown.com</p>

          <Paragraph>
            THE AGREEMENT: The use of this website and services on this website provided by Boston Town Pvt. Ltd. (GST:
            AA070223026727C), (hereinafter referred to as "Owner') are subject to the following Terms & Conditions
            (hereinafter the "Terms of Service"), all parts and sub-parts of which are specifically incorporated by
            reference here together with the Privacy Policy.
          </Paragraph>

          {/* Include the rest of the content here using Typography components */}
          {/* For example: */}
          <Paragraph>
            <strong>1. DEFINITIONS</strong>
          </Paragraph>
          <Paragraph>
            The parties referred to in these Terms of Service shall be defined as follows:
            <br />
            1. Owner, Us, We: The Owner, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. Roombae Pvt. Ltd., Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as all employees and affiliates of the Owner.
            <br />
            2. You, the User, the Client: You, as the user of the Website, will be referred to throughout these Terms of Service with second-person pronouns such as You, Your, Yours, or as User or Client. For the purpose of these Terms of Service, the term "User" or "you" shall mean any natural or legal person who person is accessing the Website. The term "Your" shall be construed accordingly.
            <br />
            3. Parties: Collectively, the parties to these Terms of Service (the Owner and You) will be referred to as Parties.
        
          </Paragraph>

          <Paragraph>
            <strong>2. ASSENT & ACCEPTANCE</strong>
          </Paragraph>

          <Paragraph>
          By using the Website, You warrant that You have read and reviewed these Terms of Service and that You agree to be bound by it. If You do not agree to be bound by these Terms of Service, please leave the Website immediately. The Owner only agrees to provide use of this Website and Services to You if You assent to these Terms of Service. Further, based on the Services obtained by a User, additional terms and conditions in respect of the specific Services may apply, which shall be deemed an agreement between the Users and the Owner.
          </Paragraph>


          <Paragraph>
            <strong>3. AGE RESTRICTION</strong>
          </Paragraph>

          <Paragraph>

          You must be at least 18 (eighteen) years of age to use this Website or any Services contained herein. By using this Website, You represent and warrant that You are at least 18 years of age and may legally agree to these Terms of Service. The Owner assumes no responsibility or liability for any misrepresentation of Your age.
        </Paragraph>



          <Paragraph>
            <strong>4. ABOUT THE SITE</strong>
          </Paragraph>

          <Paragraph>
          The Website does not screen or censor the users who register on and access the Website. You assume all risks associated with dealing with other users with whom you come in contact through the Website. You agree to use the Website only for lawful purposes without infringing the rights or restricting the use of this Website by any third party.

        </Paragraph>

        <Paragraph>
            <strong>5. LICENSE TO USE WEBSITE</strong>
          </Paragraph>

          <Paragraph>
          The Owner may provide You with certain information as a result of Your use of the Website or Services. Such information may include but is not limited to, documentation, data, or information developed by the Owner, and other materials which may assist in Your use of the Website or Services ("Owner Materials"). Subject to these Terms of Service, the Owner grants You a non-exclusive, limited, non-transferable and revocable license to use the Owner Materials solely in connection with Your use of the Website and Services. The Owner Materials may not be used for any other purpose and this license terminates upon Your cessation of use of the Website or Services or at the termination of these Terms of Service.

        You agree not to collect contact information of other Users from the Website or download or copy any information by means of unsolicited access so as to communicate directly with them or for any reason whatsoever.

        Any unauthorized use by you shall terminate the permission or license granted to you by the Website and You agree that you shall not bypass any measures used by the Owner to prevent or restrict access to the Website.
        </Paragraph>



          <Paragraph>
            <strong>6. INTELLECTUAL PROPERTY</strong>
          </Paragraph>

          <Paragraph>

          You agree that the Website and all Services provided by the Owner are the property of the Owner, including all copyrights, trademarks, trade secrets, patents and other intellectual property ("Owner IP").

        You agree that the Owner owns all right, title and interest in and to the Owner IP and that You will not use the Owner IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Owner IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Owner.

          </Paragraph>




        </Typography>
      </Content>
    </Layout>
    </div>
  );
};

export default TermsOfService;