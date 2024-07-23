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
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  & a {
    color: #61dafb;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    
    <SocialLinks>
    {/* <FooterText> Follow me on: </FooterText> */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </SocialLinks>
    <FooterText>© 2024 My Website. All rights reserved.</FooterText>
  </FooterWrapper>
);

export default Footer;
