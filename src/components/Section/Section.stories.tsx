import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

global.React = React;

export default {
  title: 'Components/Section',
  component: Section,
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,  // Default to not disabled
  children: (
    <>
      <p>This is a section content.</p>
      <p>More content here.</p>
    </>
  ),
};

// Interactive Test for Primary
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Check if the section title and content are visible
  await expect(canvas.queryByText(/This is a section content./i)).toBeInTheDocument();
  await expect(canvas.queryByText(/More content here./i)).toBeInTheDocument();
  
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: (
    <>
      <p>This section is disabled and should not be interactive.</p>
      <p>Content here is for display only.</p>
    </>
  ),
};

// Interactive Test for Disabled
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Check if the section title and content are visible
  await expect(canvas.queryByText(/This section is disabled and should not be interactive./i)).toBeInTheDocument();
  await expect(canvas.queryByText(/Content here is for display only./i)).toBeInTheDocument();
};
