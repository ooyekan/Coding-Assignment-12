import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';


interface NavProps {
  disabled?: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide the navigation bar on mobile */
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
      a {
        pointer-events: none;
        color: grey; /* or any other color to indicate disabled state */
      }
    `}
`;

const NavigationBar: React.FC<NavProps> = ({ disabled} ) => (
  <Nav disabled={disabled} >
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/resume">Resume</Link>
  </Nav>
);

export default NavigationBar;
