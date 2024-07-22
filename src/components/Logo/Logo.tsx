import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  height: 40px;
`;

const Logo: React.FC = () => (
  <LogoImage src="../../assets/images/logo.png" alt="Logo" />
);

export default Logo;
