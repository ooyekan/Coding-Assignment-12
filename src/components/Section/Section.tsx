import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const SectionContainer = styled.section<SectionProps>`
  padding: 20px;
  background: ${(props) => (props.disabled ? '#f0f0f0' : '#fff')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Section: React.FC<SectionProps> = ({ disabled = false, children }) => (
  <SectionContainer disabled={disabled}>
    {children}
  </SectionContainer>
);

export default Section;
