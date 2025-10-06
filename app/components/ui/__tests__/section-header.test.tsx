import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../section-header';

describe('SectionHeader', () => {
  it('should render title text', () => {
    render(<SectionHeader title="TEST TITLE" />);
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('TEST TITLE');
  });

  it('should render title with JSX', () => {
    render(
      <SectionHeader 
        title={
          <>
            THE <span className="text-red-500">EVIDENCE</span>
          </>
        } 
      />
    );
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('THE EVIDENCE');
    
    const redSpan = heading.querySelector('.text-red-500');
    expect(redSpan).toBeInTheDocument();
    expect(redSpan).toHaveTextContent('EVIDENCE');
  });

  it('should render without subtitle', () => {
    render(<SectionHeader title="NO SUBTITLE" />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.queryByText(/SIDE BY SIDE/)).not.toBeInTheDocument();
  });

  it('should render with subtitle', () => {
    render(
      <SectionHeader 
        title="MAIN TITLE" 
        subtitle="SUPPORTING TEXT" 
      />
    );
    
    expect(screen.getByText('SUPPORTING TEXT')).toBeInTheDocument();
  });

  it('should apply default rotation to subtitle', () => {
    const { container } = render(
      <SectionHeader 
        title="TITLE" 
        subtitle="SUBTITLE" 
      />
    );
    
    // The subtitle is within a RotatedCard, check for rotation class
    const rotatedCard = container.querySelector('.rotate-1');
    expect(rotatedCard).toBeInTheDocument();
  });

  it('should apply custom rotation to subtitle', () => {
    const { container } = render(
      <SectionHeader 
        title="TITLE" 
        subtitle="SUBTITLE"
        subtitleRotation="-rotate-2"
      />
    );
    
    const rotatedCard = container.querySelector('.-rotate-2');
    expect(rotatedCard).toBeInTheDocument();
  });

  it('should have centered text alignment', () => {
    const { container } = render(
      <SectionHeader title="CENTERED" />
    );
    
    const headerContainer = container.firstChild;
    expect(headerContainer).toHaveClass('text-center');
  });

  it('should have bottom margin', () => {
    const { container } = render(
      <SectionHeader title="MARGIN TEST" />
    );
    
    const headerContainer = container.firstChild;
    expect(headerContainer).toHaveClass('mb-16');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <SectionHeader title="CUSTOM" className="custom-class" />
    );
    
    const headerContainer = container.firstChild;
    expect(headerContainer).toHaveClass('custom-class');
  });

  it('should have responsive heading size', () => {
    render(<SectionHeader title="RESPONSIVE" />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('text-5xl', 'md:text-7xl');
  });

  it('should have proper heading styling', () => {
    render(<SectionHeader title="STYLED HEADING" />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass(
      'text-5xl',
      'md:text-7xl',
      'font-black',
      'uppercase',
      'mb-8'
    );
  });

  it('should render subtitle in RotatedCard with dark variant', () => {
    const { container } = render(
      <SectionHeader 
        title="TITLE" 
        subtitle="SUBTITLE CARD" 
      />
    );
    
    const rotatedCard = container.querySelector('.bg-black.text-white');
    expect(rotatedCard).toBeInTheDocument();
    expect(rotatedCard).toHaveTextContent('SUBTITLE CARD');
  });

  it('should render subtitle as inline-block', () => {
    const { container } = render(
      <SectionHeader 
        title="TITLE" 
        subtitle="INLINE SUBTITLE" 
      />
    );
    
    const rotatedCard = container.querySelector('.inline-block');
    expect(rotatedCard).toBeInTheDocument();
  });

  it('should apply red border to subtitle card', () => {
    const { container } = render(
      <SectionHeader 
        title="TITLE" 
        subtitle="BORDERED" 
      />
    );
    
    const rotatedCard = container.querySelector('.border-red-500');
    expect(rotatedCard).toBeInTheDocument();
  });

  it('should render subtitle with proper typography', () => {
    render(
      <SectionHeader 
        title="TITLE" 
        subtitle="TYPOGRAPHY TEST" 
      />
    );
    
    const subtitle = screen.getByText('TYPOGRAPHY TEST');
    expect(subtitle).toHaveClass('text-xl', 'uppercase', 'tracking-wide');
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <SectionHeader 
        title={<>CHEF <span className="text-black">TESTIMONY</span></>}
        subtitle="VOICES FROM THE KITCHEN"
        subtitleRotation="-rotate-1"
        className="mt-20"
      />
    );
    
    const headerContainer = container.firstChild;
    expect(headerContainer).toHaveClass('text-center', 'mb-16', 'mt-20');
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('CHEF TESTIMONY');
    
    expect(screen.getByText('VOICES FROM THE KITCHEN')).toBeInTheDocument();
    
    const rotatedCard = container.querySelector('.-rotate-1');
    expect(rotatedCard).toBeInTheDocument();
  });
});
