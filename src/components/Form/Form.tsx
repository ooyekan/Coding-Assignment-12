import React, { useState } from 'react';
import styled from 'styled-components';
import SubmitButton from '../SubmitButton/SubmitButton';
import { SubmitButtonProps } from '../SubmitButton/SubmitButton.types';
import { FormProps } from './Form.types';



const FormContainer = styled.form<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 3rem;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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

const Form: React.FC<FormProps> = ({ initialName = '', initialEmail = '', initialEnquiry = '', onSubmit , disabled = false}) => {
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
    <FormContainer disabled={disabled}>
      <InputField 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        disabled={disabled}
      />
      <InputField 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        disabled={disabled}
      />
      <TextAreaField 
        placeholder="Your Enquiry" 
        value={enquiry} 
        onChange={(e) => setEnquiry(e.target.value)} 
        disabled={disabled}
      />
      <SubmitButton onClick={handleSubmit} disabled={disabled}>Submit</SubmitButton>
      {submissionStatus && <p>{submissionStatus}</p>}
    </FormContainer>
  );
};

export default Form;
