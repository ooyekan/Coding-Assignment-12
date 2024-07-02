import styled, { css } from 'styled-components';
import { HeaderProps } from './Header.types';

interface StyledHeaderProps {
    disabled?: boolean;
    backgroundColor?: string;
    hidden?: boolean;
  }
const HeaderWrapper = styled.header<StyledHeaderProps>`
  text-align: center;
  padding: 16px;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#f5f5f5')};
  
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

  const Header = ({ title, subtitle, disabled, backgroundColor, hidden }: HeaderProps) => (
  <HeaderWrapper disabled={disabled} backgroundColor={backgroundColor} hidden={hidden} data-testid="header-component">
    <HeaderTitle>{title}</HeaderTitle>
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </HeaderWrapper>
);

export default Header;
