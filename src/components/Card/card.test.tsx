import { render, screen } from '@testing-library/react';
import Card from './Card';

jest.mock('../../assets/images/card_image.png', () => ({
    default: 'mocked-card-image-path',
  }));

describe('Card Component', () => {
  test('renders the Card component with title, subtitle, content, and image', () => {
    // Define props for the Card component
    const cardProps = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      content: 'This is the card content',
      imageSrc: 'mocked-card-image-path', // Placeholder image URL
      description: 'Card description',
      backgroundColor: 'transparent',
    };

    // Render the Card component with defined props
    render(<Card {...cardProps} />);

    // Assertions
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByText('Test Subtitle');
    expect(subtitleElement).toBeInTheDocument();

    const contentElement = screen.getByText('This is the card content');
    expect(contentElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('Card description') as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe('https://via.placeholder.com/150');
  });

  test('renders the Card component without subtitle and image', () => {
    // Define props for the Card component
    const cardProps = {
      title: 'Test Title',
      content: 'This is the card content',
      backgroundColor: 'transparent',
    };

    // Render the Card component with defined props
    render(<Card {...cardProps} />);

    // Assertions
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.queryByText('Test Subtitle');
    expect(subtitleElement).toBeNull();

    const contentElement = screen.getByText('This is the card content');
    expect(contentElement).toBeInTheDocument();

    const imageElement = screen.queryByAltText('Card description');
    expect(imageElement).toBeNull();
  });
});
