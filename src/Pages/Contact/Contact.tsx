import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center; /* Center-align text */
  padding: 2rem; /* Add some padding around the content */
`;

const Contact: React.FC = () => (
  <>
    <Header title={''}/>
    <Container>
      <h2>Contact Me</h2>
      <Form />
    </Container>
  </>
);

export default Contact;
