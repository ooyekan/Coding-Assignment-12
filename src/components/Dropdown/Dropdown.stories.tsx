import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
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
  'data-testid': 'dropdown-component',
};

Default.play = async ({ canvasElement }) => {
  const dropdown = within(canvasElement);
  
  // Click to open the dropdown
  await userEvent.click(dropdown.getByTestId('dropdown-component'));

};

export const Disabled: StoryFn<DropdownProps> = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  disabled: true,
  hidden: true,
  'data-testid': 'dropdown-component',
};

Disabled.play = async ({ canvasElement }) => {
  const dropdown = within(canvasElement).getByTestId('dropdown-component');
  
  // Attempt to select an option from the dropdown (should not trigger onSelect due to disabled state)
  await userEvent.selectOptions(dropdown, 'Option 2');
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  backgroundColor: '#eaeaea', 
  'data-testid': 'dropdown-component',
};

CustomBackground.play = async ({ canvasElement }) => {
  const dropdown = within(canvasElement).getByTestId('dropdown-component');
  
  // Click the dropdown to open options (simulate interaction)
  await userEvent.click(dropdown);

  // Simulate selecting an option (Option 3 in this case)
  const optionToSelect = within(dropdown).getByText('Option 3');
  await userEvent.click(optionToSelect);
};