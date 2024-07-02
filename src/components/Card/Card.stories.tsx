import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';
import { userEvent, within } from '@storybook/test';
import cardImage from '../../assets/images/card_image.png';

export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
    hidden: { control: 'boolean', description: 'Hides the card' },
    backgroundColor: { control: 'color', description: 'Changes the background color when the card is disabled' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    imageSrc: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card.',
  imageSrc: cardImage,
  hidden: false,
  backgroundColor: 'transparent',

};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('card-container'));
  // Add assertions for interaction here if needed
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('card-container'));
  // Add assertions for interaction here if needed
};

export const Disabled: StoryFn<CardProps> = Template.bind({});
Disabled.args = {
  title: 'Disabled Card Title',
  subtitle: 'Disabled Card Subtitle',
  content: 'This is the content of the disabled card.',
  imageSrc: cardImage,
  disabled: true,
  hidden: false,
  backgroundColor: '#ccc',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('card-container'));
  // Add assertions for interaction here if needed
};



export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hidden Card Title',
  subtitle: 'Hidden Card Subtitle',
  content: 'This is the content of the hidden card.',
  imageSrc: cardImage,
  description: 'This is a description of the hidden card.',
  disabled: false,
  hidden: true,
  backgroundColor: 'transparent',
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('card-container'));
  // Add assertions for interaction here if needed
};
