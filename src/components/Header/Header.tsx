import { useState } from 'react';
import styled, { css } from 'styled-components';
import { HeaderProps } from './Header.types';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import Dropdown from '../Dropdown/Dropdown';


interface StyledHeaderProps {
  disabled?: boolean;
  backgroundColor?: string;
  hidden?: boolean;
}

const HeaderWrapper = styled.header<StyledHeaderProps>`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor || '#282c34'};
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc;
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2em;
  color: #999;
  text-align: center;
`;

const HeaderSubtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #999;
  text-align: center;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavList = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = ({ subtitle, disabled, backgroundColor, onClick, hidden }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownSelect = (option: string) => {
    switch (option) {
      case 'Home':
        window.location.href = '/';
        break;
      case 'About':
        window.location.href = '/about';
        break;
      case 'Projects':
        window.location.href = '/projects';
        break;
      case 'Contact':
        window.location.href = '/contact';
        break;
      case 'Resume':
        window.location.href = '/resume';
        break;
      default:
        break;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={!disabled ? onClick : undefined}
      hidden={hidden}
      data-testid="header-component"
    >
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
      <MobileMenuButton onClick={handleMobileMenuToggle}>
        &#9776;
      </MobileMenuButton>
      {isMobileMenuOpen && (
        <MobileNavList>
          <Dropdown
            options={['Select', 'Home', 'About', 'Projects', 'Contact', 'Resume']}
            onSelect={handleDropdownSelect} onChange={function (): void {
              throw new Error('Function not implemented.');
            } }      />
        </MobileNavList>
      )}
    </HeaderWrapper>
  );
};

export default Header;
