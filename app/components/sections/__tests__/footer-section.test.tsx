import { render, screen } from '@testing-library/react';
import { FooterSection } from '../footer-section';

describe('FooterSection', () => {
  it('should render mission section', () => {
    render(<FooterSection />);
    
    expect(screen.getByText('MISSION')).toBeInTheDocument();
    expect(screen.getByText(/EXPOSE THE CREAM CHEESE CONSPIRACY/i)).toBeInTheDocument();
    expect(screen.getByText(/RESTORE SUSHI TO ITS RIGHTFUL GLORY/i)).toBeInTheDocument();
  });

  it('should render contact section', () => {
    render(<FooterSection />);
    
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
    expect(screen.getByText(/TRUTH@REALUSUSHI.COM/i)).toBeInTheDocument();
    expect(screen.getByText(/@NOCREAMCHEESE/i)).toBeInTheDocument();
    expect(screen.getByText(/#AUTHENTICITYMATTERS/i)).toBeInTheDocument();
  });

  it('should render resources section', () => {
    render(<FooterSection />);
    
    expect(screen.getByText('RESOURCES')).toBeInTheDocument();
    expect(screen.getByText(/FIND REAL SUSHI SPOTS/i)).toBeInTheDocument();
    expect(screen.getByText(/LEARN TRADITIONAL METHODS/i)).toBeInTheDocument();
    expect(screen.getByText(/REPORT CREAM CHEESE CRIMES/i)).toBeInTheDocument();
    expect(screen.getByText(/JOIN THE RESISTANCE/i)).toBeInTheDocument();
  });

  it('should render disclaimer', () => {
    render(<FooterSection />);
    
    expect(screen.getByText(/WARNING: THIS SITE CONTAINS GRAPHIC CONTENT/i)).toBeInTheDocument();
    expect(screen.getByText(/VIEWER DISCRETION ADVISED/i)).toBeInTheDocument();
  });

  it('should render copyright', () => {
    render(<FooterSection />);
    
    expect(screen.getByText(/© 2025 THE SUSHI TRUTH PROJECT/i)).toBeInTheDocument();
    expect(screen.getByText(/NO CREAM CHEESE ALLOWED/i)).toBeInTheDocument();
  });

  it('should have proper footer structure', () => {
    const { container } = render(<FooterSection />);
    
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('bg-black', 'text-white', 'border-t-8', 'border-red-500');
  });

  it('should render three main content columns', () => {
    const { container } = render(<FooterSection />);
    
    const grid = container.querySelector('.grid.md\\:grid-cols-3');
    expect(grid).toBeInTheDocument();
  });
});
