import React from 'react';
import styled from 'styled-components';
import { SubmitButtonProps } from './SubmitButton.types';

const Button = styled.button<{ disabled: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, onClick, disabled = false }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export default SubmitButton;
