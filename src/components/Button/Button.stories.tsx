import { StoryFn, Meta } from '@storybook/react';
import MyButton from './Button';
import { MyButtonProps } from './Button.types';


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
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  hidden: false,
  label: 'I\'m a button',
  backgroundColor: '#ccc',
};

export const Hidden = Template.bind({});
Hidden.args = {
  hidden: true,
  label: "I'm a hidden button",
};