import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  disabled?: boolean;
}


const FooterWrapper = styled.footer<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#aaa' : '#282c34')};
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  padding: 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const SocialLinks = styled.div<{ disabled?: boolean }>`
  margin: 1rem 0;
  
  & a {
    color: ${({ disabled }) => (disabled ? '#888' : '#61dafb')};
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

const Footer: React.FC<FooterProps> = ({ disabled = false }) => (
  <FooterWrapper disabled={disabled}>
    <SocialLinks disabled={disabled}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </SocialLinks>
    <FooterText>© 2024 My Portfolio. All rights reserved.</FooterText>
  </FooterWrapper>
);

export default Footer;