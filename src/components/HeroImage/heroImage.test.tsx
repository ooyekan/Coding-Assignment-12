import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroImage from './heroImage'; // Adjust the import path as per your actual file location
import { HeroImageProps } from './heroImage.types'; // Adjust the import path as per your actual file location // Adjust the import path as per your actual file location

global.React = React;
// Mock the image source
jest.mock('../../assets/images/hero_Image.png', () => 'test-hero-image.jpg');

describe('HeroImage Component', () => {
  const defaultProps: HeroImageProps = {
    src: 'heroImage.png', // This will be replaced by 'test-hero-image.jpg' due to the mock
    alt: 'hero image',
    title: 'Hero Title',
    subtitle: 'Hero Subtitle',
    disabled: false,
    hidden: false,
    backgroundColor: 'transparent',
    'data-testid': 'heroimage-component',
  };

  test('does not handle click event when disabled', () => {
    const handleClick = jest.fn();
    render(<HeroImage {...defaultProps} onClick={handleClick} disabled />);

    const mockHeroImageComponent = screen.getByTestId('heroimage-component');
    userEvent.click(mockHeroImageComponent);

    expect(handleClick).not.toHaveBeenCalled();
  });
});