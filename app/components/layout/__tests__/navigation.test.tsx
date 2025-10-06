import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../navigation';

describe('Navigation', () => {
  beforeEach(() => {
    // Setup DOM with sections
    document.body.innerHTML = `
      <div id="evidence">Evidence Section</div>
      <div id="testimony">Testimony Section</div>
      <div id="action">Action Section</div>
    `;
  });

  it('should render the navigation bar', () => {
    const { container } = render(<Navigation />);
    
    // Check for the outer nav element
    const outerNav = container.querySelector('nav.fixed');
    expect(outerNav).toBeInTheDocument();
    
    // Check for the inner semantic nav
    const innerNav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(innerNav).toBeInTheDocument();
  });

  it('should render the logo/brand name', () => {
    render(<Navigation />);
    
    expect(screen.getByText('SUSHI TRUTH')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByRole('button', { name: /Navigate to evidence section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Navigate to testimony section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Navigate to take action section/i })).toBeInTheDocument();
  });

  it('should render the resist button', () => {
    render(<Navigation />);
    
    const resistButton = screen.getByRole('button', { name: /Join the resistance/i });
    expect(resistButton).toBeInTheDocument();
    expect(resistButton).toHaveTextContent('RESIST');
  });

  it('should scroll to evidence section when evidence link is clicked', () => {
    render(<Navigation />);
    
    const evidenceSection = document.getElementById('evidence');
    const scrollIntoViewMock = jest.fn();
    if (evidenceSection) {
      evidenceSection.scrollIntoView = scrollIntoViewMock;
    }
    
    const evidenceButton = screen.getByRole('button', { name: /Navigate to evidence section/i });
    fireEvent.click(evidenceButton);
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('should scroll to testimony section when testimony link is clicked', () => {
    render(<Navigation />);
    
    const testimonySection = document.getElementById('testimony');
    const scrollIntoViewMock = jest.fn();
    if (testimonySection) {
      testimonySection.scrollIntoView = scrollIntoViewMock;
    }
    
    const testimonyButton = screen.getByRole('button', { name: /Navigate to testimony section/i });
    fireEvent.click(testimonyButton);
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('should scroll to action section when action link is clicked', () => {
    render(<Navigation />);
    
    const actionSection = document.getElementById('action');
    const scrollIntoViewMock = jest.fn();
    if (actionSection) {
      actionSection.scrollIntoView = scrollIntoViewMock;
    }
    
    const actionButton = screen.getByRole('button', { name: /Navigate to take action section/i });
    fireEvent.click(actionButton);
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('should have fixed positioning with proper styling', () => {
    const { container } = render(<Navigation />);
    
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
    expect(nav).toHaveClass('bg-black', 'text-white', 'border-b-4', 'border-red-500');
  });

  it('should hide navigation links on mobile (md:flex)', () => {
    const { container } = render(<Navigation />);
    
    // Updated to match new semantic nav structure
    const navLinks = container.querySelector('nav[aria-label="Main navigation"]');
    expect(navLinks).toBeInTheDocument();
    expect(navLinks).toHaveClass('hidden', 'md:flex');
  });

  it('should handle missing section gracefully', () => {
    // Remove a section from DOM
    const evidenceSection = document.getElementById('evidence');
    evidenceSection?.remove();
    
    render(<Navigation />);
    
    const evidenceButton = screen.getByRole('button', { name: /Navigate to evidence section/i });
    
    // Should not throw error
    expect(() => fireEvent.click(evidenceButton)).not.toThrow();
  });
});
