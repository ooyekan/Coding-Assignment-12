//import styled from 'styled-components';
import styled, { css } from 'styled-components';
import { HeroImageProps } from './heroImage.types';
// import heroImage from '../../public/hero_Image.png';

interface StyledHeroImageProps{
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
}

const ImageWrapper = styled.div<StyledHeroImageProps>`
  position: relative;
  text-align: center;
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};


  /* Add conditional styling for disabled state */
  ${({ disabled }: StyledHeroImageProps) =>
    disabled &&
    css`
      opacity: 0.6; /* Reduce opacity for disabled state */
      cursor: not-allowed; /* Change cursor for disabled state */
    `}
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  max-height: 400px; /* Adjust as needed */

  @media (max-width: 768px) {
    width: 70%; /* Adjust for smaller screens */
  }
`;

const HeroImage = ({ src, alt, disabled, hidden, onClick,
  backgroundColor, }: HeroImageProps) => (
  <ImageWrapper disabled={disabled} hidden={hidden} backgroundColor={backgroundColor} onClick={!disabled ? onClick : undefined} data-testid="heroimage-component">
    <Image src={src} alt={alt} />
  </ImageWrapper>
);

export default HeroImage;
