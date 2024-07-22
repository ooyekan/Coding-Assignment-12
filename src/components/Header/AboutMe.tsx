import React from 'react';
import styled from 'styled-components';
import MyText from '../Text/text';

const AboutContainer = styled.section`
  padding: 50px;
  background: #f5f5f5;
`;

const AboutMe: React.FC = () => (
  <AboutContainer>
    <h1>About Me</h1>
    <MyText size="large">
      Information about yourself and your journey in the program.
    </MyText>
  </AboutContainer>
);

export default AboutMe;
