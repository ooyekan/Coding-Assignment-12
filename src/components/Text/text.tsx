import styled from "styled-components";
import { MyTextProps } from "./text.types";

interface StyledTextProps {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
  bold?: boolean;
}

// Define a styled text component
const StyledText = styled.p<StyledTextProps>`
  color: ${props => props.disabled ? '#666' : 'white'}; /* Gray text for disabled, black for normal */
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '12px';
      case 'medium': return '16px';
      case 'large': return '30px';
      default: return '16px';
    }
  }};
  opacity: ${props => props.disabled ? 0.6 : 1}; 
  text-decoration: ${props => props.disabled ? 'line-through' : 'none'}; 
  font-weight: ${props => props.bold ? 'bold' : 'normal'};


`;

const MyText = ({ disabled = false, text = "", bold = false, hidden, backgroundColor, size, children }: MyTextProps) => {
  return (
    <StyledText disabled={disabled} hidden={hidden} backgroundColor={backgroundColor} bold={bold} size={size} data-testid="text-component">
      {text}  {children}
    </StyledText>
    
  );
};

export default MyText;