import React from "react"; 
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyText from './text';
import { MyTextProps } from './text.types';

global.React = React;
describe('MyText Component', () => {
    const renderComponent = (props: MyTextProps) => render(<MyText {...props} />);
  
    test('renders with default props', () => {
      renderComponent({
        text: 'This is a text',
        children: undefined
      });
      expect(screen.getByText('This is a text')).toBeInTheDocument();
    });
  
    test('renders disabled text', () => {
      renderComponent({
        text: 'This text is disabled', disabled: true,
        children: undefined
      });
      const textElement = screen.getByText('This text is disabled');
      expect(textElement).toBeInTheDocument();
      expect(textElement).toHaveStyle('color: rgb(102, 102, 102)'); // Update to actual color
    });
  
    test('renders bold text', () => {
      renderComponent({
        text: 'This text is bold', bold: true,
        children: undefined
      });
      const textElement = screen.getByText('This text is bold');
      expect(textElement).toBeInTheDocument();
      expect(textElement).toHaveStyle('font-weight: bold'); // Assuming bold style is applied
    });
  });