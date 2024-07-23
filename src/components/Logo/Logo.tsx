import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo.png';

// Styled-component for Logo
const StyledLogo = styled.img`
  height: 4em;  // Adjust height as needed
  width: auto;  // Maintain aspect ratio
`;

// Functional Component using Styled Logo
const Logo: React.FC = () => (
  <StyledLogo src={logoImage} alt="Logo" data-testid="logo-image"/>
);

export default Logo;
