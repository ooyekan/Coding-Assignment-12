import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form from './Form';
import { FormProps } from './Form.types';

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
    onSubmit: (values) => console.log('Form values:', values),
  };
