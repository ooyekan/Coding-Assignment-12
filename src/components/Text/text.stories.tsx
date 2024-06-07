import { StoryFn, Meta } from '@storybook/react';
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
  text: 'This is a text'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'This text is disabled'
};

// New story for bold text
export const Bold = Template.bind({});
Bold.args = {
  text: 'This text is bold',
  bold: true
};