import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { HeaderProps } from './Header.types';
import { HashRouter as Router } from 'react-router-dom';

global.React = React;

describe('Header Component', () => {
  const renderComponent = (props: Partial<HeaderProps> = {}) => {
    const defaultProps: HeaderProps = {
      title: 'MY PORTFOLIO',
      subtitle: 'Header Subtitle',
      disabled: false,
      hidden: false,
      backgroundColor: '',
      'data-testid': 'header-component',
      onClick: jest.fn(),  // Default onClick handler
      ...props,
    };
    return render(
      <Router>  // Wrap with Router
        <Header {...defaultProps} />
      </Router>
    );
  };

  test('renders with default props', () => {
    renderComponent();
    expect(screen.getByText('MY PORTFOLIO')).toBeInTheDocument();
    expect(screen.getByText('Header Subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('logo-component')).toBeInTheDocument();
  });

  test('renders without subtitle', () => {
    renderComponent({ subtitle: undefined });
    expect(screen.getByText('MY PORTFOLIO')).toBeInTheDocument();
    expect(screen.queryByText('Header Subtitle')).not.toBeInTheDocument();
    expect(screen.getByTestId('logo-component')).toBeInTheDocument();
  });

  test('renders as hidden', () => {
    renderComponent({ hidden: true });
    const header = screen.getByTestId('header-component');
    expect(header).toHaveAttribute('hidden');
  });

  test('does not handle click event when disabled', () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick, disabled: true });
    const header = screen.getByTestId('header-component');
    userEvent.click(header);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
