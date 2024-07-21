import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import MyText from './text';
import { MyTextProps } from './text.types';

export default {
  title: 'ReactComponentLibrary/Text',
  component: MyText,
  argTypes: {
    disabled: { control: 'boolean' },
    hidden: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    bold: { control: 'boolean' }, // Assuming you have a 'bold' prop
    text: { control: 'text' },
    },
} as Meta<typeof MyText>;

const Template: StoryFn<MyTextProps> = (args) => <MyText {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  text: 'This is a text',
  'data-testid': 'text-component',
};

Default.play = async ({ canvasElement }) => {
  const textComponent = within(canvasElement).getByTestId('text-component');

  // Example interaction: Clicking on the text component
  await userEvent.click(textComponent);
  // Add more interaction tests as needed
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'This text is disabled',
  'data-testid': 'text-component',
};

Disabled.play = async ({ canvasElement }) => {
  const textComponent = within(canvasElement).getByTestId('text-component');

  // Example interaction: Verifying disabled state (e.g., no click action should occur)
  await userEvent.click(textComponent); // Click should not perform any action
  // Add more interaction tests for disabled state
};

// New story for bold text
export const Bold = Template.bind({});
Bold.args = {
  text: 'This text is bold',
  bold: true,
  'data-testid': 'text-component',
};

Bold.play = async ({ canvasElement }) => {
  const textComponent = within(canvasElement).getByTestId('text-component');

  // Example interaction: Hover effect on bold text
  await userEvent.hover(textComponent); // Simulate hover interaction
  // Add more interaction tests specific to bold text scenario
};