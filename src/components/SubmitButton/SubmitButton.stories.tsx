import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SubmitButton from './SubmitButton';
import { SubmitButtonProps } from './SubmitButton.types';
import { within, userEvent } from '@storybook/test';
import { expect } from '@storybook/jest';


global.React = React;

export default {
  title: 'Components/SubmitButton',
  component: SubmitButton,
} as Meta;

const Template: StoryFn<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Submit',
  onClick: (e) => {
    e.preventDefault();
    alert('Button clicked!');
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Submit',
  disabled: true,
};


// Interactive Test for Primary
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Ensure the button is visible
  const button = canvas.getByText(/Submit/i);
  await expect(button).toBeInTheDocument();
  
  // Simulate a click on the button
  await userEvent.click(button);

  // Check if the button is clickable and alerts as expected
  // Note: Alerts will not work in this testing environment, so consider a different approach for assertions
  // This is just a basic check that the button can be interacted with
};

// Interactive Test for Disabled
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Ensure the button is visible
  const button = canvas.getByText(/Submit/i);
  await expect(button).toBeInTheDocument();
  
  // Verify that the button is disabled
  await expect(button).toBeDisabled();

  // Simulate a click on the button and ensure no interaction happens
  await userEvent.click(button);
  
  // Ensure that clicking the button doesn't trigger any actions
  // Note: For a more comprehensive test, you might need to mock the click handler and verify it wasn't called
};