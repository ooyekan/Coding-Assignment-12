// Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { CardProps } from './Card.types';

global.React = React;
// Mock the image import
jest.mock('../../assets/images/card_image.png', () => 'test-image.jpg');

describe('Card Component', () => {
  const renderComponent = (props: CardProps) => render(<Card {...props} />);

  test('renders the Card component with a disabled state', () => {
    renderComponent({
      title: 'Test Title',
      content: 'This is the card content',
      disabled: true,
      link: '',
      size: 'small'
    });

    const cardElement = screen.getByTestId('card-component'); // Check the correct data-testid used
    expect(cardElement).toHaveAttribute('disabled');
  });

  test('renders the Card component with a hidden state', () => {
    renderComponent({
      title: 'Test Title',
      content: 'This is the card content',
      hidden: true,
      link: '',
      size: 'small'
    });

    const cardElement = screen.getByTestId('card-component'); // Check the correct data-testid used
    expect(cardElement).not.toBeVisible();
  });
});