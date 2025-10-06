import { render, screen } from '@testing-library/react';
import { HeroSection } from '../hero-section';

describe('HeroSection', () => {
  it('should render the main headline', () => {
    render(<HeroSection />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/CREAM CHEESE/i);
    expect(heading).toHaveTextContent(/KILLED/i);
    expect(heading).toHaveTextContent(/SUSHI/i);
  });

  it('should render the tagline', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/THE SYSTEMATIC DESTRUCTION OF/i)).toBeInTheDocument();
    expect(screen.getByText(/JAPANESE CULINARY ARTISTRY/i)).toBeInTheDocument();
  });

  it('should render statistics cards', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('90%')).toBeInTheDocument();
    expect(screen.getByText(/ROLLS CONTAIN CREAM CHEESE/i)).toBeInTheDocument();
    
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText(/TRADITIONAL VALUE REMAINING/i)).toBeInTheDocument();
    
    expect(screen.getByText('∞')).toBeInTheDocument();
    expect(screen.getByText(/YEARS TO UNDO THIS DAMAGE/i)).toBeInTheDocument();
  });

  it('should render the CTA button', () => {
    render(<HeroSection />);
    
    const button = screen.getByRole('button', { name: /Learn more about the truth/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Learn more about the truth');
    expect(button).toHaveTextContent(/EXPOSE THE TRUTH/i);
  });

  it('should render background pattern grid', () => {
    const { container } = render(<HeroSection />);
    
    // Background grid should have 64 divs (8x8 grid)
    const gridItems = container.querySelectorAll('.grid-cols-8 > div');
    expect(gridItems).toHaveLength(64);
  });

  it('should have proper section structure', () => {
    const { container } = render(<HeroSection />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('min-h-screen', 'bg-black', 'text-white');
  });

  it('should apply hover styles to CTA button', () => {
    render(<HeroSection />);
    
    const button = screen.getByRole('button', { name: /Learn more about the truth/i });
    expect(button).toHaveClass('hover:scale-105');
  });
});
