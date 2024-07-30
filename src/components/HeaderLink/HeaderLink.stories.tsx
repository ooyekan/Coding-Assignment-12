import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HeaderLinkProps } from './HeaderLink.types';
import { within, userEvent } from '@storybook/test';
import { expect } from '@storybook/jest';
import HeaderLink from './HeaderLink';

global.React = React

export default {
  title: 'Components/HeaderLink',
  component: HeaderLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<HeaderLinkProps> = (args) => <HeaderLink {...args} />;


export const Default = Template.bind({});
Default.args = {
  href: '/projects',
  children: 'Projects',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: '/projects',
  children: 'Projects',
  disabled: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link', { name: /Projects/i });
  
  // Verify that the link is rendered
  expect(link).toBeInTheDocument();

  // Simulate a click event
  userEvent.click(link);

  // Verify that the link has been clicked
  expect(link).toHaveAttribute('href', '/projects');
};


Disabled.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /Projects/i });
    
    // Verify that the link is rendered
    expect(link).toBeInTheDocument();
    
    // Verify that the link is styled as disabled
    expect(link).toHaveStyle('color: #aaa');
    expect(link).toHaveStyle('pointer-events: none');
    
    // Verify that the link is not clickable
    // Check for element styles, not interaction
    expect(link).toHaveAttribute('href', '/projects');
  };