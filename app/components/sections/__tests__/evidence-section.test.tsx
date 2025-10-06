import { render, screen } from '@testing-library/react';
import { EvidenceSection } from '../evidence-section';

describe('EvidenceSection', () => {
  it('should render section header', () => {
    render(<EvidenceSection />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/THE.*EVIDENCE/i);
    expect(screen.getByText(/SIDE BY SIDE COMPARISON/i)).toBeInTheDocument();
  });

  it('should render authentic sushi comparison card', () => {
    render(<EvidenceSection />);
    
    expect(screen.getByText('AUTHENTIC')).toBeInTheDocument();
    expect(screen.getByText('PURE FISH')).toBeInTheDocument();
    expect(screen.getByText('SEASONED RICE')).toBeInTheDocument();
    expect(screen.getByText('CENTURIES OF TRADITION')).toBeInTheDocument();
    expect(screen.getByText('RESPECT FOR INGREDIENTS')).toBeInTheDocument();
  });

  it('should render bastardized sushi comparison card', () => {
    render(<EvidenceSection />);
    
    expect(screen.getByText('BASTARDIZED')).toBeInTheDocument();
    expect(screen.getByText('PROCESSED DAIRY')).toBeInTheDocument();
    expect(screen.getByText('FLAVOR MASKING')).toBeInTheDocument();
    expect(screen.getByText('CULTURAL APPROPRIATION')).toBeInTheDocument();
    expect(screen.getByText('ARTISTRY DESTROYED')).toBeInTheDocument();
  });

  it('should render comparison images', () => {
    render(<EvidenceSection />);
    
    const traditionImage = screen.getByAltText('Traditional sushi nigiri');
    const creamCheeseImage = screen.getByAltText('Cream cheese sushi roll');
    
    expect(traditionImage).toBeInTheDocument();
    expect(creamCheeseImage).toBeInTheDocument();
  });

  it('should render conspiracy theory section', () => {
    render(<EvidenceSection />);
    
    expect(screen.getByText(/THE CREAM CHEESE CONSPIRACY/i)).toBeInTheDocument();
    expect(screen.getByText('STEP 1')).toBeInTheDocument();
    expect(screen.getByText('STEP 2')).toBeInTheDocument();
    expect(screen.getByText('STEP 3')).toBeInTheDocument();
    expect(screen.getByText(/INTRODUCE "FUSION" AS INNOVATION/i)).toBeInTheDocument();
    expect(screen.getByText(/NORMALIZE DAIRY IN JAPANESE CUISINE/i)).toBeInTheDocument();
    expect(screen.getByText(/ERASE CULTURAL AUTHENTICITY/i)).toBeInTheDocument();
  });

  it('should have proper section styling', () => {
    const { container } = render(<EvidenceSection />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white', 'text-black');
  });

  it('should render comparison items with icons', () => {
    const { container } = render(<EvidenceSection />);
    
    // Check for icon boxes (green for authentic, red for bastardized)
    const greenIcons = container.querySelectorAll('.bg-green-500.w-4.h-4');
    const redIcons = container.querySelectorAll('.bg-red-500.w-4.h-4');
    
    expect(greenIcons.length).toBeGreaterThan(0);
    expect(redIcons.length).toBeGreaterThan(0);
  });
});
