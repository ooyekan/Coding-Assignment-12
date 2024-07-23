import styled, { css } from 'styled-components';
import { HeaderProps } from './Header.types';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';

interface StyledHeaderProps {
  disabled?: boolean;
  backgroundColor?: string;
  hidden?: boolean;
}

const HeaderWrapper = styled.header<StyledHeaderProps>`
  width: 100%;
  padding: 1rem 2rem; /* Adjust padding as needed */
  background-color: ${({ backgroundColor }) => backgroundColor || '#282c34'};
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed; /* Keeps header at the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensures it stays on top */
  box-sizing: border-box;
  
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: #ccc; /* Change background color for disabled state */
        opacity: 0.6; /* Reduce opacity for disabled state */
        cursor: not-allowed; /* Change cursor for disabled state */
      `}
`;

const LogoWrapper = styled.div`
  margin-right: auto; /* Pushes the logo to the left side */
`;

const TitleWrapper = styled.div`
  flex: 1; /* Take up remaining space to center the title */
  display: flex;
  justify-content: center; /* Center the title horizontally */
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2em;
  color: #999;
  text-align: center; /* Center the text within TitleWrapper */
`;

const HeaderSubtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #999;
  text-align: center;
`;

const Header = ({ subtitle, disabled, backgroundColor, onClick, hidden }: HeaderProps) => (
  <HeaderWrapper disabled={disabled} backgroundColor={backgroundColor} onClick={!disabled ? onClick : undefined} hidden={hidden} data-testid="header-component">
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <TitleWrapper>
      <div>
        <HeaderTitle>MY PORTFOLIO</HeaderTitle>
        {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
      </div>
    </TitleWrapper>
    <NavigationBar />
  </HeaderWrapper>
);

export default Header;
