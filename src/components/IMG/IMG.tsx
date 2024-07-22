import React from 'react';
import styled from 'styled-components';

interface IMGProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const StyledIMG = styled.img<IMGProps>`
  max-width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const IMG: React.FC<IMGProps> = ({ src, alt, disabled = false }) => (
  <StyledIMG src={src} alt={alt} disabled={disabled} />
);

export default IMG;
