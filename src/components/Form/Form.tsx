import React, { useState } from 'react';
import styled from 'styled-components';
import SubmitButton from '../SubmitButton/SubmitButton';
import { SubmitButtonProps } from '../SubmitButton/SubmitButton.types';
import { FormProps } from './Form.types';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Form: React.FC<FormProps> = ({ initialName = '', initialEmail = '', onSubmit }) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit: SubmitButtonProps['onClick'] = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email });
    }
    alert('Form submitted!');
  };

  return (
    <FormContainer>
      <InputField 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <InputField 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;