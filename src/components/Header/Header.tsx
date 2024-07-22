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
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#282c34')};
  
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
    `;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2em;
  color: #999;
`;

const HeaderSubtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #999;
`;

  const Header = ({ title, subtitle, disabled, backgroundColor, onClick, hidden }: HeaderProps) => (
  <HeaderWrapper disabled={disabled} backgroundColor={backgroundColor} onClick={!disabled ? onClick : undefined} hidden={hidden} data-testid="header-component">
    <HeaderTitle>{title}</HeaderTitle>
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>} <Logo />
    <NavigationBar />
  </HeaderWrapper>
);

export default Header;
