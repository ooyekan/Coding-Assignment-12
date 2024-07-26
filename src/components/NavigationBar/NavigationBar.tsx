import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide the navigation bar on mobile */
  }
`;

const NavigationBar: React.FC = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/resume">Resume</Link>
  </Nav>
);

export default NavigationBar;
