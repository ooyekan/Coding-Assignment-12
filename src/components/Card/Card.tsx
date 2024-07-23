import styled from 'styled-components';
import { CardProps } from './Card.types';
// import cardImage from '../../assets/images/card_image.png'; // Import your image

interface StyledCardProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
  size: 'small' | 'large';
}

const CardContainer = styled.div<StyledCardProps>`
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: ${props => (props.size === 'small' ? '100px' : '150px')}; /* Small or large width */
  height: ${props => (props.size === 'small' ? '100px' : '150px')}; /* Small or large height */
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.disabled ? props.backgroundColor ||'#ccc' : '#fff')};
  border: 1px solid ${(props) => (props.disabled ? '#ccc' : '#ddd')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
 margin-top: 6rem;
  font-size: 1rem;
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Add pointer cursor to indicate it's clickable */
  
  &:hover {
    color: #FF60CB; /* Add underline on hover */
  }
`;

const Subtitle = styled.h4`
  margin-top: 8px;
  font-size: 1.2em;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 1em;
`;


const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Card = ({
  disabled = false,
  hidden = false,
  title,
  subtitle,
  content,
  imageSrc,
  description,
  backgroundColor,
  link,
  size,
}: CardProps) => (
  <CardContainer data-testid="card-component" disabled={disabled} hidden={hidden} backgroundColor={backgroundColor} size={size}>
    {imageSrc && <Image src={imageSrc} alt={description} data-testid="card-image"  />}
    <Content>
      <a href={link} style={{ textDecoration: 'none' }}>
      <Title>{title}</Title>
      </a>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Description>{content}</Description>
      <CardLink href={link}></CardLink> {/* Use link prop */}
    </Content>
  </CardContainer>
);

export default Card;
