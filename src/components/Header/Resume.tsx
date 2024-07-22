import React from 'react';
import styled from 'styled-components';
import MyText from '../Text/text';

const ResumeContainer = styled.section`
  padding: 50px;
  background: #f5f5f5;
`;

const Resume: React.FC = () => (
  <ResumeContainer>
    <h1>Resume</h1>
    <MyText size="large">
      Your resume details here.
    </MyText>
  </ResumeContainer>
);

export default Resume;
