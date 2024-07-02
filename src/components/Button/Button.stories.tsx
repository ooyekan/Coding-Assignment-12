import { StoryFn, Meta } from '@storybook/react';
import MyButton from './Button';
import { MyButtonProps } from './Button.types';
import { userEvent, within } from '@storybook/test';


export default {
    title: 'ReactComponentLibrary/Button',
    component: MyButton,
    argTypes: {
      disabled: {
        control: 'boolean',
        description: 'Disables the button',
      },
      hidden: {
        control: 'boolean',
        description: 'Hides the button',
      },
      backgroundColor: {
        control: 'color',
        description: 'Changes the background color when the button is disabled',
      },
      label: {
        control: 'text',
        description: 'Label of the button',
      },
    },
  } as Meta<typeof MyButton>;
  
  const Template: StoryFn<MyButtonProps> = (args) => <MyButton {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
  disabled: false,
  hidden: false,
  label: 'I\'m a button',
  backgroundColor: 'transparent',
  'data-testid': 'TestButton'
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('TestButton'));
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  hidden: false,
  label: 'I\'m a button',
  backgroundColor: '#ccc',
  'data-testid': 'TestButton'
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Clicking on a disabled button should not trigger any action
  await userEvent.click(canvas.getByTestId('TestButton'));
};

export const Hidden = Template.bind({});
Hidden.args = {
  hidden: true,
  label: "I'm a hidden button",
  'data-testid': 'TestButton'
};

Hidden.play = async ({ canvasElement }) => {
  // Adjust test logic for hidden state interaction if needed
  const canvas = within(canvasElement);
  // Example: Clicking on a hidden button should not be possible or have different behavior
  await userEvent.click(canvas.getByTestId('TestButton'));
};