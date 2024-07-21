import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

global.React = React;
describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const handleSelect = jest.fn();

  beforeEach(() => {
    handleSelect.mockClear();
  });

  test('handles option select event', () => {
    render(<Dropdown options={options} onChange={() => {}} onSelect={handleSelect} />);
    
    const dropdown = screen.getByTestId('dropdown-component');
    fireEvent.change(dropdown, { target: { value: 'Option 2' } });

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith('Option 2');
  });

  test('renders with custom background color', () => {
    render(<Dropdown options={options} onChange={() => {}} onSelect={handleSelect} backgroundColor="#eaeaea" />);
    
    const dropdown = screen.getByTestId('dropdown-component');
    expect(dropdown).toHaveStyle('background-color: #eaeaea');
  });
});
