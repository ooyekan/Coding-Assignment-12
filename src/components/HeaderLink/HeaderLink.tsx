import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinkProps } from './HeaderLink.types';
import styled from 'styled-components';



const StyledLink = styled(Link)<{ disabled?: boolean }>`
  color: ${props => props.disabled ? '#aaa' : '#535BF2'}; /* Disabled color */
  text-decoration: none;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'}; /* Disable pointer events */
  
  &:hover {
    color: ${props => props.disabled ? '#aaa' : '#FFC0CB'}; /* Hover color */
  }
`;


const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children, disabled = false  }) => {
  return (<StyledLink to={href} disabled={disabled}>
  {children}
</StyledLink>
  );
};

export default HeaderLink;
