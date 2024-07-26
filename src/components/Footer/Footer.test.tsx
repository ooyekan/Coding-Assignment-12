import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

global.React = React;
describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    // Check if the footer is rendered
    expect(screen.getByText(/© 2024 My Portfolio. All rights reserved./)).toBeInTheDocument();
  });

  it('contains social media links', () => {
    render(<Footer />);
    // Check if social media links are present
    expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/Twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });

  it('contains the correct link URLs', () => {
    render(<Footer />);
    // Check if social media links have the correct URLs
    expect(screen.getByText(/Facebook/i).closest('a')).toHaveAttribute('href', 'https://facebook.com');
    expect(screen.getByText(/Twitter/i).closest('a')).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByText(/LinkedIn/i).closest('a')).toHaveAttribute('href', 'https://linkedin.com');
  });

  it('applies correct styles', () => {
    render(<Footer />);
    // Check styles for different breakpoints
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveStyle('background-color: #282c34');
    expect(footer).toHaveStyle('color: #fff');
    expect(footer).toHaveStyle('padding: 1rem');
  });
});
