import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { sum } from "./Button";
import MyButton from './Button';

 
global.React = React;
test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
 });

 describe('Button component', () => {
  it('renders the button with the correct label', () => {
    const label = 'I\'m a button';
    const { getByText } = render(<MyButton label={label} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const label = 'I\'m a button';
    const { getByText } = render(<MyButton onClick={handleClick} label={label} />);
    const buttonElement = getByText(label);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});