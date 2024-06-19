import styled from "styled-components";
import { MyButtonProps } from "./Button.types";

interface StyledButtonProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
}

// Define a styled button component
const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => props.disabled ? props.backgroundColor ||'#ccc' : '#4CAF50'}; /* Gray background for disabled, green for normal */
  border: none;              /* Remove borders */
  color: ${props => props.disabled ? '#666' : 'white'}; /* Gray text for disabled, white for normal */
  padding: 15px 32px;        /* Some padding */
  text-align: center;        /* Centered text */
  text-decoration: none;     /* Remove underline */
  display: ${props => props.hidden ? 'none' : 'inline-block'};
  font-size: 16px;           /* Set a font size */
  margin: 4px 2px;           /* Some margin */
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; /* Not-allowed cursor for disabled, pointer for normal */
  opacity: ${props => props.disabled ? 0.6 : 1}; /* Reduced opacity for disabled */

  /* Add a hover effect */
  &:hover {
    background-color: ${props => props.disabled ? props.backgroundColor ||'#ccc' : '#45a049'};
  }
`;

export function sum(a: number, b: number) {
  return a + b;
 }

const MyButton = ({ disabled = false, label = "I'm a button", backgroundColor, hidden  }: MyButtonProps) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} hidden={hidden}>
      {label}
    </StyledButton>
  );
};



export default MyButton;
