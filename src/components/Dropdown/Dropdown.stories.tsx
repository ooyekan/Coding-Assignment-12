import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types'; 

export default {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    hidden: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    options: { control: 'object' },
    onSelect: { action: 'selected' },
  },
} as Meta<typeof Dropdown>;


const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />; 

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  onSelect: (option: string) => console.log('Selected:', option),
};

export const Disabled: StoryFn<DropdownProps> = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  disabled: true,
  hidden: true,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  backgroundColor: '#eaeaea', 
};