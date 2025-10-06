import { render, screen } from '@testing-library/react';
import { RotatedCard } from '../rotated-card';

describe('RotatedCard', () => {
  it('should render children content', () => {
    render(
      <RotatedCard>
        <p>Test Content</p>
      </RotatedCard>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply dark variant styles by default', () => {
    const { container } = render(
      <RotatedCard>
        <p>Dark Card</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-black', 'text-white', 'border-white');
  });

  it('should apply light variant styles', () => {
    const { container } = render(
      <RotatedCard variant="light">
        <p>Light Card</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white', 'text-black', 'border-black');
  });

  it('should apply red variant styles', () => {
    const { container } = render(
      <RotatedCard variant="red">
        <p>Red Card</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-red-500', 'text-white', 'border-white');
  });

  it('should apply rotation transform', () => {
    const { container } = render(
      <RotatedCard rotation="-rotate-2">
        <p>Rotated</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('-rotate-2');
  });

  it('should apply custom border color', () => {
    const { container } = render(
      <RotatedCard borderColor="red">
        <p>Red Border</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('border-red-500');
  });

  it('should auto-determine border color for dark variant', () => {
    const { container } = render(
      <RotatedCard variant="dark">
        <p>Auto Border</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('border-white');
  });

  it('should auto-determine border color for light variant', () => {
    const { container } = render(
      <RotatedCard variant="light">
        <p>Auto Border</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('border-black');
  });

  it('should auto-determine border color for red variant', () => {
    const { container } = render(
      <RotatedCard variant="red">
        <p>Auto Border</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('border-white');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <RotatedCard className="custom-padding">
        <p>Custom Class</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('custom-padding');
  });

  it('should have base card structure', () => {
    const { container } = render(
      <RotatedCard>
        <p>Structure Test</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('p-6', 'border-4', 'transform');
  });

  it('should render complex children', () => {
    render(
      <RotatedCard>
        <div>
          <h3>Title</h3>
          <p>Description</p>
          <button>Action</button>
        </div>
      </RotatedCard>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('should override border color when explicitly provided', () => {
    const { container } = render(
      <RotatedCard variant="dark" borderColor="red">
        <p>Override Border</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('border-red-500');
    expect(card).not.toHaveClass('border-white');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <RotatedCard 
        variant="red" 
        rotation="rotate-1" 
        borderColor="black"
        className="mb-8"
      >
        <p>All Props</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass(
      'p-6',
      'border-4',
      'transform',
      'bg-red-500',
      'text-white',
      'border-black',
      'rotate-1',
      'mb-8'
    );
  });

  it('should handle empty rotation string', () => {
    const { container } = render(
      <RotatedCard rotation="">
        <p>No Rotation</p>
      </RotatedCard>
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('transform');
  });
});
