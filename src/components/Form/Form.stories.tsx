import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form from './Form';
import { FormProps } from './Form.types';
import { within, userEvent, waitFor } from '@storybook/test';

global.React = React;
export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

const Template: StoryFn<FormProps> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  initialName: 'John Doe',
  initialEmail: 'john.doe@example.com',
  initialEnquiry: 'I have a question.',
  onSubmit: (values) => console.log('Form values:', values),
};

export const Disabled = Template.bind({});
Disabled.args = {
  initialName: 'John Doe',
  initialEmail: 'john.doe@example.com',
  initialEnquiry: 'I have a question.',
  onSubmit: (values) => console.log('Form values:', values),
  disabled: true,
};

// Interactive test
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Select elements by placeholder
  const nameInput = canvas.getByPlaceholderText('Your Name') as HTMLInputElement;
  const emailInput = canvas.getByPlaceholderText('Your Email') as HTMLInputElement;
  const enquiryInput = canvas.getByPlaceholderText('Your Enquiry') as HTMLTextAreaElement;
  const submitButton = canvas.getByText('Submit') as HTMLButtonElement;

  // Verify initial values
  await waitFor(() => {
    if (nameInput.value !== 'John Doe') throw new Error('Initial name value should be John Doe');
    if (emailInput.value !== 'john.doe@example.com') throw new Error('Initial email value should be john.doe@example.com');
    if (enquiryInput.value !== 'I have a question.') throw new Error('Initial enquiry value should be I have a question.');
  });

  // Simulate user input
  await userEvent.clear(nameInput);
  await userEvent.type(nameInput, 'Jane Smith');

  await userEvent.clear(emailInput);
  await userEvent.type(emailInput, 'jane.smith@example.com');

  await userEvent.clear(enquiryInput);
  await userEvent.type(enquiryInput, 'I have a new question.');

  // Submit the form
  await userEvent.click(submitButton);

  // Assert the form submission
  await waitFor(() => {
    if (nameInput.value !== '') throw new Error('Name input should be cleared after submission');
    if (emailInput.value !== '') throw new Error('Email input should be cleared after submission');
    if (enquiryInput.value !== '') throw new Error('Enquiry input should be cleared after submission');
  });

  // Check if submission status is displayed
  await waitFor(() => {
    if (!canvas.queryByText(/Form submitted successfully!/i)) throw new Error('Submission status message should be displayed');
  });
};

// Interactive test for Disabled
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Select elements by placeholder
  const nameInput = canvas.getByPlaceholderText('Your Name') as HTMLInputElement;
  const emailInput = canvas.getByPlaceholderText('Your Email') as HTMLInputElement;
  const enquiryInput = canvas.getByPlaceholderText('Your Enquiry') as HTMLTextAreaElement;
  const submitButton = canvas.getByText('Submit') as HTMLButtonElement;

  // Verify initial values
  await waitFor(() => {
    if (nameInput.value !== 'John Doe') throw new Error('Initial name value should be John Doe');
    if (emailInput.value !== 'john.doe@example.com') throw new Error('Initial email value should be john.doe@example.com');
    if (enquiryInput.value !== 'I have a question.') throw new Error('Initial enquiry value should be I have a question.');
  });

  // Ensure inputs are disabled
  await waitFor(() => {
    if (!nameInput.disabled) throw new Error('Name input should be disabled');
    if (!emailInput.disabled) throw new Error('Email input should be disabled');
    if (!enquiryInput.disabled) throw new Error('Enquiry input should be disabled');
    if (!submitButton.disabled) throw new Error('Submit button should be disabled');
  });

  // Check if submit button is disabled
  await waitFor(() => {
    if (!submitButton.disabled) throw new Error('Submit button should be disabled when the form is disabled');
  });
};