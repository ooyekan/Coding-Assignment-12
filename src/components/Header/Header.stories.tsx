import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import Header from './Header';
import { HeaderProps } from './Header.types';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'ReactComponentLibrary/Header',
  component: Header,
  argTypes: {
    hidden: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Header>;

const Template: StoryFn<HeaderProps> = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Header Title',
  subtitle: 'Header Subtitle',
  disabled: false,
  hidden: false,
  'data-testid': 'header-component',
};
Default.play = async ({ canvasElement }) => {
  const header = within(canvasElement).getByTestId('header-component');

  // Clicking on the header should trigger a console log with the title and subtitle
  await userEvent.click(header);
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Header Title',
  'data-testid': 'header-component',
};
WithoutSubtitle.play = async ({ canvasElement }) => {
  const header = within(canvasElement).getByTestId('header-component');

  // Clicking on the header should trigger a console log with just the title
  await userEvent.click(header);
};

export const Disabled = Template.bind({});
Disabled.args = {
    title: 'Header Title',
    subtitle: 'Header Subtitle',
    disabled: true,
    hidden: false,
    'data-testid': 'header-component',
};

Disabled.play = async ({ canvasElement }) => {
  const header = within(canvasElement).getByTestId('header-component');

  // Clicking on elements of a disabled header should not trigger any action
  await userEvent.click(header);
};
