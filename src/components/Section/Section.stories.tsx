import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section  from './Section';
import { SectionProps } from './Section.types';

global.React = React;

export default {
  title: 'Components/Section',
  component: Section,
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Section Title',
  children: (
    <>
      <p>This is a section content.</p>
      <p>More content here.</p>
    </>
  ),
};
