import React from 'react';
import styled, { css } from 'styled-components';
import { LogoProps } from './Logo.types';
import defaultLogoImage from '../../assets/images/logo.png';

interface StyledLogoProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
}

const LogoWrapper = styled.div<StyledLogoProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  text-align: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

const StyledLogo = styled.img`
  height: 4em;
  width: auto;
`;

const Logo: React.FC<LogoProps> = ({ src = defaultLogoImage, alt = 'Logo', disabled, hidden, onClick, backgroundColor }) => (
  <LogoWrapper disabled={disabled} hidden={hidden} backgroundColor={backgroundColor} onClick={!disabled ? onClick : undefined} data-testid="logo-component">
    <StyledLogo src={src} alt={alt} />
  </LogoWrapper>
);

export default Logo;
