import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import HeroImage from './heroImage';
import { HeroImageProps } from './heroImage.types';
import heroImage from '../../assets/images/hero_Image.png'; 

export default {
  title: 'ReactComponentLibrary/HeroImage',
  component: HeroImage,
  argTypes: {
    hidden: {
      control: 'boolean',
      description: 'Toggles visibility of the component',
    },
    backgroundColor: {
      control: 'color',
      description: 'Changes the background color when the component is disabled',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the component',
    },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: heroImage,
  alt: 'hero image',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  disabled: false,
  hidden: false,
  backgroundColor: 'transparent',
  'data-testid': 'heroimage-component',
};

Default.play = async ({ canvasElement }) => {
  const heroImageComponent = within(canvasElement).getByTestId('heroimage-component');

  // Perform interaction tests here, such as clicking on the hero image
  await userEvent.click(heroImageComponent);
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: heroImage,
  alt: 'hero image',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  disabled: true,
  hidden: false,
  backgroundColor: '#ccc',
  'data-testid': 'heroimage-component',
};

Disabled.play = async ({ canvasElement }) => {
  const heroImageComponent = within(canvasElement).getByTestId('heroimage-component');

  await userEvent.click(heroImageComponent);
};
