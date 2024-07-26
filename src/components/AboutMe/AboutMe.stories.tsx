import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AboutMe from './AboutMe';
import { AboutMeProps } from './AboutMe.types';
import { within, waitFor } from '@storybook/test';

global.React = React
export default {
    title: 'Components/AboutMe',
    component: AboutMe,
  } as Meta;
  
  const Template: StoryFn<AboutMeProps> = (args) => <AboutMe {...args} />;
  
  export const Default = Template.bind({});
 
  Default.args = {
    disabled: false,
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    disabled: true,
  };
  
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    // Verify the heading text
    await waitFor(() => canvas.getByText(/About Me/i));
  
    // Verify the first paragraph text
    await waitFor(() =>
      canvas.getByText(/I am a student of the Full Stack Web Development program at Red River College Polytechnic,/i)
    );
  
    // Verify the second paragraph text
    await waitFor(() =>
      canvas.getByText(/Throughout my studies, I have gained hands-on experience with various technologies including HTML, CSS, JavaScript, React, Ruby on Rails, and Python./i)
    );
  
    // Verify the third paragraph text
    await waitFor(() =>
      canvas.getByText(/Outside of academics, I am actively involved in various tech communities and enjoy staying updated with the latest industry trends./i)
    );

};

    Disabled.play = async ({ canvasElement }) => {
        const canvas = within(canvasElement);
      
        // Verify the heading text
        await waitFor(() => canvas.getByText(/About Me/i));
      
        // Verify the first paragraph text
        await waitFor(() =>
          canvas.getByText(/I am a student of the Full Stack Web Development program at Red River College Polytechnic,/i)
        );
      
        // Verify the second paragraph text
        await waitFor(() =>
          canvas.getByText(/Throughout my studies, I have gained hands-on experience with various technologies including HTML, CSS, JavaScript, React, Ruby on Rails, and Python./i)
        );
      
        // Verify the third paragraph text
        await waitFor(() =>
          canvas.getByText(/Outside of academics, I am actively involved in various tech communities and enjoy staying updated with the latest industry trends./i)
        );
      };
  
      