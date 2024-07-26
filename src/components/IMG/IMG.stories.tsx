import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IMG  from './IMG';
import { IMGProps } from './IMG.types'
import { waitFor, within } from '@storybook/test';

global.React = React;

export default {
  title: 'Components/IMG',
  component: IMG,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<IMGProps> = (args) => <IMG {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
};

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Wait for the image to be present in the document
    await waitFor(() => canvas.getByAltText('Placeholder Image'));

  };
  
  Disabled.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Wait for the image to be present in the document
    await waitFor(() => canvas.getByAltText('Placeholder Image'));
  
  };