import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NavigationBar from './NavigationBar';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

global.React = React;

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<{ disabled?: boolean }> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};


// Interactive Tests with Playwright
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Check if all navigation links are present
  expect(canvas.getByText(/Home/i)).toBeVisible();
  expect(canvas.getByText(/About/i)).toBeVisible();
  expect(canvas.getByText(/Projects/i)).toBeVisible();
  expect(canvas.getByText(/Contact/i)).toBeVisible();
  expect(canvas.getByText(/Resume/i)).toBeVisible();
};

Disabled.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Check if the navigation is visible but not interactable
    const nav = canvas.getByRole('navigation');
    expect(nav).toHaveStyle('opacity: 0.5');
    expect(nav).toHaveStyle('pointer-events: none');
  
    // Check if links are not clickable
    const homeLink = canvas.getByText(/Home/i);
    
    // As links are not interactable, ensure the link is present but can't be clicked
    expect(homeLink).toBeVisible();
    
  };
