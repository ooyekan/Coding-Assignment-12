import React from 'react';
import styled from 'styled-components';
import { SubmitButtonProps } from './SubmitButton.types';

const StyledSubmitButton = styled.button<SubmitButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled = false, children , onClick}) => (
  <StyledSubmitButton type="submit" disabled={disabled} onClick={onClick}>
    {children}
  </StyledSubmitButton>
);

export default SubmitButton;
