import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  & a {
    color: #61dafb;
    margin: 0 1rem;
    text-decoration: none;
  @media (max-width: 768px) {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const FooterText = styled.p`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    
    <SocialLinks>
    {/* <FooterText> Follow me on: </FooterText> */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </SocialLinks>
    <FooterText>© 2024 My Portfolio. All rights reserved.</FooterText>
  </FooterWrapper>
);

export default Footer;
