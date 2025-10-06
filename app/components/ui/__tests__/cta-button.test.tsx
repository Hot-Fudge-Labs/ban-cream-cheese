import { render, screen, fireEvent } from '@testing-library/react';
import { CTAButton } from '../cta-button';

describe('CTAButton', () => {
  it('should render button with children text', () => {
    render(<CTAButton>CLICK ME</CTAButton>);
    
    expect(screen.getByRole('button', { name: 'CLICK ME' })).toBeInTheDocument();
  });

  it('should apply primary variant styles by default', () => {
    render(<CTAButton>Primary Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-500', 'hover:bg-red-600', 'text-white', 'border-white');
  });

  it('should apply secondary variant styles', () => {
    render(<CTAButton variant="secondary">Secondary Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-white', 'hover:bg-gray-100', 'text-black', 'border-black');
  });

  it('should apply small size styles', () => {
    render(<CTAButton size="sm">Small</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-sm');
  });

  it('should apply medium size styles by default', () => {
    render(<CTAButton>Medium</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-8', 'py-4', 'text-base');
  });

  it('should apply large size styles', () => {
    render(<CTAButton size="lg">Large</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-12', 'py-6', 'text-lg');
  });

  it('should have hover scale animation', () => {
    render(<CTAButton>Hover Me</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hover:scale-105', 'transition-transform');
  });

  it('should have neo-brutalist styling', () => {
    render(<CTAButton>Styled Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'border-4',
      'uppercase',
      'tracking-widest',
      'transform',
      'font-medium'
    );
  });

  it('should apply custom className', () => {
    render(<CTAButton className="custom-shadow">Custom</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-shadow');
  });

  it('should handle onClick events', () => {
    const handleClick = jest.fn();
    render(<CTAButton onClick={handleClick}>Click Test</CTAButton>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should pass through aria-label', () => {
    render(<CTAButton aria-label="Accessible Label">Button</CTAButton>);
    
    const button = screen.getByRole('button', { name: 'Accessible Label' });
    expect(button).toBeInTheDocument();
  });

  it('should support disabled state', () => {
    render(<CTAButton disabled>Disabled</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should support type attribute', () => {
    render(<CTAButton type="submit">Submit</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should combine all props correctly', () => {
    const handleClick = jest.fn();
    render(
      <CTAButton 
        variant="secondary" 
        size="lg"
        className="extra-class"
        onClick={handleClick}
        aria-label="Complete Action"
      >
        TAKE ACTION
      </CTAButton>
    );
    
    const button = screen.getByRole('button', { name: 'Complete Action' });
    expect(button).toHaveClass(
      'bg-white',
      'hover:bg-gray-100',
      'text-black',
      'border-black',
      'px-12',
      'py-6',
      'text-lg',
      'extra-class'
    );
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should render with primary variant and medium size by default', () => {
    render(<CTAButton>Default Props</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-500', 'px-8', 'py-4');
  });

  it('should handle complex children', () => {
    render(
      <CTAButton>
        <span>CLICK</span> <strong>NOW</strong>
      </CTAButton>
    );
    
    expect(screen.getByText('CLICK')).toBeInTheDocument();
    expect(screen.getByText('NOW')).toBeInTheDocument();
  });

  it('should maintain button semantics', () => {
    render(<CTAButton>Semantic Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
  });
});
