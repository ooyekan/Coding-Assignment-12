import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SubmitButton from './SubmitButton';
import { SubmitButtonProps } from './SubmitButton.types';

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
