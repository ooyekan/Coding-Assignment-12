import React, { useState } from 'react';
import styled from 'styled-components';
import SubmitButton from '../SubmitButton/SubmitButton';
import { SubmitButtonProps } from '../SubmitButton/SubmitButton.types';
import { FormProps } from './Form.types';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 3rem;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 250px;
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical; 
  width: 350px;
`;

const Form: React.FC<FormProps> = ({ initialName = '', initialEmail = '', initialEnquiry = '', onSubmit }) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [enquiry, setEnquiry] = useState(initialEnquiry);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit: SubmitButtonProps['onClick'] = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email, enquiry });
    }
    setSubmissionStatus('Form submitted successfully!');
    setName('');
    setEmail('');
    setEnquiry('');
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
      <TextAreaField 
        placeholder="Your Enquiry" 
        value={enquiry} 
        onChange={(e) => setEnquiry(e.target.value)} 
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      {submissionStatus && <p>{submissionStatus}</p>}
    </FormContainer>
  );
};

export default Form;
