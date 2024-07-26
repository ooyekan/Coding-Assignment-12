// src/components/Logo/Logo.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Logo from './Logo';
import { LogoProps } from './Logo.types';
import defaultLogoImage from '../../assets/images/logo.png';
import { within, userEvent } from '@storybook/test';
import { expect } from '@storybook/jest';

global.React = React;
export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    hidden: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: defaultLogoImage,
  alt: 'Default Logo',
  backgroundColor: '#bb2929',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: defaultLogoImage,
  alt: 'Disabled Logo',
  disabled: true,
  backgroundColor: '#bb2929'
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: defaultLogoImage,
  alt: 'Hidden Logo',
  hidden: true,
};


// Interactive tests
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const logo = canvas.getByTestId('logo-component');

  // Check if the logo is visible and clickable
  await expect(logo).toBeVisible();
  await expect(logo).not.toHaveStyle('opacity: 0.6');
  await expect(logo).not.toHaveStyle('cursor: not-allowed');

  // Simulate click
  userEvent.click(logo);
};

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const logo = canvas.getByTestId('logo-component');

  // Check if the logo is visible and not clickable
  await expect(logo).toBeVisible();
  await expect(logo).toHaveStyle('opacity: 0.6');
  await expect(logo).toHaveStyle('cursor: not-allowed');

  // Simulate click, but the logo should not respond
  userEvent.click(logo);
};

Hidden.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
  
    // Check if the logo is hidden
    const logo = canvas.queryByTestId('logo-component');
  
    // Verify that the logo is not visible
    if (logo) {
      await expect(logo).toHaveStyle('display: none');
    } else {
      console.error('Logo component is not found in the document.');
    }
  };
