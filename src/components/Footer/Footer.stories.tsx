import Footer from './Footer';
import { StoryFn, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
      layout: 'fullscreen',
    },
  } as Meta;
  
  // Define the template for stories
  const Template: StoryFn = (args) => <Footer {...args} />;
  
  // Default story
  export const Default = Template.bind({});
  Default.args = {};
  
  // Disabled story
  export const Disabled = Template.bind({});
  Disabled.args = { disabled: true };


  // Interactive tests
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Test: Check if social media links are rendered correctly
    const facebookLink = canvas.getByText(/Facebook/i);
    const twitterLink = canvas.getByText(/Twitter/i);
    const linkedinLink = canvas.getByText(/LinkedIn/i);
  
    // Simulate user interaction and verify the links
    userEvent.click(facebookLink);
    // Check if the link opens correctly
    const facebookUrl = 'https://facebook.com';
    if (window.location.href !== facebookUrl) {
      console.error(`Expected URL ${facebookUrl}, but got ${window.location.href}`);
    }
  
    userEvent.click(twitterLink);
    // Check if the link opens correctly
    const twitterUrl = 'https://twitter.com';
    if (window.location.href !== twitterUrl) {
      console.error(`Expected URL ${twitterUrl}, but got ${window.location.href}`);
    }
  
    userEvent.click(linkedinLink);
    // Check if the link opens correctly
    const linkedinUrl = 'https://linkedin.com';
    if (window.location.href !== linkedinUrl) {
      console.error(`Expected URL ${linkedinUrl}, but got ${window.location.href}`);
    }
  };

  // Interactive tests for Disabled
    Disabled.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Test: Check if social media links are unclickable
    const facebookLink = canvas.getByText(/Facebook/i);
    const twitterLink = canvas.getByText(/Twitter/i);
    const linkedinLink = canvas.getByText(/LinkedIn/i);
  
    // Check CSS property
    const facebookPointerEvents = getComputedStyle(facebookLink).pointerEvents;
    const twitterPointerEvents = getComputedStyle(twitterLink).pointerEvents;
    const linkedinPointerEvents = getComputedStyle(linkedinLink).pointerEvents;
  
    // Assertions using expect
    await expect(facebookPointerEvents).toBe('none');
    await expect(twitterPointerEvents).toBe('none');
    await expect(linkedinPointerEvents).toBe('none');
  };