import React from 'react';
import { Row, Col } from 'antd';
import Heading from '#root/components/UI/Heading/Heading';
import Text from '#root/components/UI/Text/Text';
import Loader from '#root/components/Loader/Loader';
import ContactForm from '#root/components/ContactForm/ContactFrom';
import useDataApi from '#root/library/hooks/useDataApi';
import { UserContactWrapper, ContactDetails } from './UserDetails.style';
import isEmpty from 'lodash/isEmpty';

const UserContact = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const { agent_location, cell_number, email } = data[0];

  return (
    <UserContactWrapper>
      <Heading content="Send Message" />
      <Row gutter={30}>
        <Col lg={16}>
          <ContactForm />
        </Col>
        <Col lg={8}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={cell_number} />
            <Heading as="h3" content="Email" />
            <Text content={email} />
            <Heading as="h3" content="Address" />
            <Text content={agent_location.formattedAddress} />
          </ContactDetails>
        </Col>
      </Row>
    </UserContactWrapper>
  );
};

export default UserContact;
