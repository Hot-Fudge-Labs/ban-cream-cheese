import { render, screen, fireEvent } from '@testing-library/react';
import { ImageWithFallback } from '../image-with-fallback';

describe('ImageWithFallback', () => {
  it('should render image with provided src and alt', () => {
    render(
      <ImageWithFallback
        src="https://example.com/image.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('should apply custom className', () => {
    render(
      <ImageWithFallback
        src="https://example.com/image.jpg"
        alt="Test image"
        className="custom-class"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText('Test image');
    expect(image).toHaveClass('custom-class');
  });

  it('should show fallback UI when image fails to load', () => {
    render(
      <ImageWithFallback
        src="https://example.com/broken-image.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText('Test image');
    
    // Simulate image load error
    fireEvent.error(image);

    // Should show error fallback
    const fallbackImage = screen.getByAltText('Error loading image');
    expect(fallbackImage).toBeInTheDocument();
  });

  it('should preserve original URL in data attribute on error', () => {
    const originalSrc = 'https://example.com/broken-image.jpg';
    
    render(
      <ImageWithFallback
        src={originalSrc}
        alt="Test image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText('Test image');
    fireEvent.error(image);

    const fallbackImage = screen.getByAltText('Error loading image');
    expect(fallbackImage).toHaveAttribute('data-original-url', originalSrc);
  });

  it('should use regular img tag for external URLs', () => {
    render(
      <ImageWithFallback
        src="https://external.com/image.jpg"
        alt="External image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByAltText('External image');
    expect(image.tagName).toBe('IMG');
  });

  it('should handle additional props', () => {
    render(
      <ImageWithFallback
        src="https://example.com/image.jpg"
        alt="Test image"
        width={100}
        height={100}
        data-testid="custom-test-id"
      />
    );

    const image = screen.getByTestId('custom-test-id');
    expect(image).toBeInTheDocument();
  });
});
