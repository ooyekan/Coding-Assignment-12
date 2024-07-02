import styled from 'styled-components';
import { CardProps } from './Card.types';
import cardImage from '../../assets/images/card_image.png'; // Import your image

interface StyledCardProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
}

const CardContainer = styled.div<StyledCardProps>`
  background-color: ${(props) => (props.disabled ? props.backgroundColor ||'#ccc' : '#fff')};
  border: 1px solid ${(props) => (props.disabled ? '#ccc' : '#ddd')};
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Image = styled.img`
  width: 10%;
  height: auto;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Subtitle = styled.h4`
  margin-top: 8px;
  font-size: 1.2em;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 1em;
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
}: CardProps) => (
  <CardContainer data-testid="card-component" disabled={disabled} hidden={hidden} backgroundColor={backgroundColor}>
    {imageSrc && <Image src={cardImage} alt={description} data-testid="card-image"  />}
    <Content>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Description>{content}</Description>
    </Content>
  </CardContainer>
);

export default Card;
