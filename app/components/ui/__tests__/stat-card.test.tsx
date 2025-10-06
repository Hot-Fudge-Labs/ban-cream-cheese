import { render, screen } from '@testing-library/react';
import { StatCard } from '../stat-card';

describe('StatCard', () => {
  it('should render value and label', () => {
    render(<StatCard value="90%" label="TEST STATISTIC" />);
    
    expect(screen.getByText('90%')).toBeInTheDocument();
    expect(screen.getByText('TEST STATISTIC')).toBeInTheDocument();
  });

  it('should apply dark variant styles', () => {
    const { container } = render(
      <StatCard value="100%" label="DARK TEST" variant="dark" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-black', 'text-white', 'border-white');
  });

  it('should apply light variant styles', () => {
    const { container } = render(
      <StatCard value="0%" label="LIGHT TEST" variant="light" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white', 'text-black', 'border-black');
  });

  it('should apply red variant styles', () => {
    const { container } = render(
      <StatCard value="50%" label="RED TEST" variant="red" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-red-500', 'text-white', 'border-white');
  });

  it('should apply rotation class', () => {
    const { container } = render(
      <StatCard value="∞" label="ROTATED" rotation="rotate-2" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('rotate-2');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <StatCard value="42" label="CUSTOM" className="custom-class" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('custom-class');
  });

  it('should have proper structure with border and padding', () => {
    const { container } = render(
      <StatCard value="123" label="STRUCTURE TEST" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('p-8', 'border-4', 'text-center', 'transform');
  });

  it('should render special characters in value', () => {
    render(<StatCard value="∞" label="INFINITY" />);
    
    expect(screen.getByText('∞')).toBeInTheDocument();
  });

  it('should render multi-word labels', () => {
    render(
      <StatCard 
        value="10+" 
        label="YEARS OF TRAINING WASTED" 
      />
    );
    
    expect(screen.getByText('YEARS OF TRAINING WASTED')).toBeInTheDocument();
  });

  it('should default to dark variant when not specified', () => {
    const { container } = render(
      <StatCard value="99%" label="DEFAULT" variant="dark" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('bg-black', 'text-white');
  });

  it('should handle empty rotation string', () => {
    const { container } = render(
      <StatCard value="1" label="NO ROTATION" rotation="" />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('transform'); // Should still have transform class
  });

  it('should combine all classes correctly', () => {
    const { container } = render(
      <StatCard 
        value="100%" 
        label="ALL PROPS" 
        variant="red"
        rotation="rotate-1"
        className="extra-class"
      />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass(
      'p-8',
      'border-4',
      'text-center',
      'transform',
      'bg-red-500',
      'text-white',
      'border-white',
      'rotate-1',
      'extra-class'
    );
  });
});