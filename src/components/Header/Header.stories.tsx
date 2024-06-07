import { StoryFn, Meta } from '@storybook/react';
import Header from './Header';
import { HeaderProps } from './Header.types';

export default {
  title: 'ReactComponentLibrary/Header',
  component: Header,
  argTypes: {
    hidden: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Header>;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Header Title',
  subtitle: 'Header Subtitle',
  disabled: false,
  hidden: false,
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Header Title',
};
export const Disabled = Template.bind({});
Disabled.args = {
    title: 'Header Title',
    subtitle: 'Header Subtitle',
    disabled: true,
    hidden: false,
};
