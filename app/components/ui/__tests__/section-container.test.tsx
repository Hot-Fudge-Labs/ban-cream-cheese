import { render, screen } from '@testing-library/react';
import { SectionContainer } from '../section-container';

describe('SectionContainer', () => {
  it('should render children content', () => {
    render(
      <SectionContainer>
        <p>Test Content</p>
      </SectionContainer>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render as section element by default', () => {
    const { container } = render(
      <SectionContainer>
        <p>Default Section</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('should render as footer element when specified', () => {
    const { container } = render(
      <SectionContainer as="footer">
        <p>Footer Content</p>
      </SectionContainer>
    );
    
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render as div element when specified', () => {
    const { container } = render(
      <SectionContainer as="div">
        <p>Div Content</p>
      </SectionContainer>
    );
    
    const div = container.querySelector('div.container');
    expect(div).toBeInTheDocument();
  });

  it('should apply custom className to wrapper', () => {
    const { container } = render(
      <SectionContainer className="bg-red-500 py-20">
        <p>Custom Style</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-red-500');
    expect(section).toHaveClass('py-20');
  });

  it('should have container structure', () => {
    const { container } = render(
      <SectionContainer>
        <p>Structure Test</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    const containerDiv = section?.querySelector('.container');
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass('mx-auto');
    expect(containerDiv).toHaveClass('px-4');
  });

  it('should apply 6xl max-width by default', () => {
    const { container } = render(
      <SectionContainer>
        <p>Default Width</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    const innerDiv = section?.querySelector('.max-w-6xl');
    expect(innerDiv).toBeInTheDocument();
  });

  it('should apply 4xl max-width when specified', () => {
    const { container } = render(
      <SectionContainer maxWidth="4xl">
        <p>Narrow Width</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    const innerDiv = section?.querySelector('.max-w-4xl');
    expect(innerDiv).toBeInTheDocument();
    expect(section?.querySelector('.max-w-6xl')).not.toBeInTheDocument();
  });

  it('should have centered inner container', () => {
    const { container } = render(
      <SectionContainer>
        <p>Centered</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    const innerDiv = section?.querySelector('.max-w-6xl');
    expect(innerDiv).toHaveClass('mx-auto');
  });

  it('should render complex children structure', () => {
    render(
      <SectionContainer>
        <div>
          <h2>Title</h2>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
      </SectionContainer>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });

  it('should combine all props correctly', () => {
    const { container } = render(
      <SectionContainer 
        as="footer" 
        className="bg-black text-white py-16"
        maxWidth="4xl"
      >
        <p>All Props</p>
      </SectionContainer>
    );
    
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('bg-black');
    expect(footer).toHaveClass('text-white');
    expect(footer).toHaveClass('py-16');
    
    const innerDiv = footer?.querySelector('.max-w-4xl');
    expect(innerDiv).toBeInTheDocument();
  });

  it('should maintain responsive padding', () => {
    const { container } = render(
      <SectionContainer>
        <p>Responsive</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    const containerDiv = section?.querySelector('.container');
    expect(containerDiv).toHaveClass('px-4');
  });

  it('should nest containers correctly', () => {
    const { container } = render(
      <SectionContainer className="outer">
        <div className="middle">
          <p>Nested Content</p>
        </div>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('outer');
    
    const containerDiv = section?.querySelector('.container');
    expect(containerDiv).toBeInTheDocument();
    
    const innerDiv = containerDiv?.querySelector('.max-w-6xl');
    expect(innerDiv).toBeInTheDocument();
    
    const middleDiv = innerDiv?.querySelector('.middle');
    expect(middleDiv).toBeInTheDocument();
  });

  it('should handle empty children', () => {
    const { container } = render(
      <SectionContainer>
        {null}
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('should preserve semantic HTML structure', () => {
    const { container } = render(
      <SectionContainer as="footer">
        <nav>
          <a href="#test">Link</a>
        </nav>
      </SectionContainer>
    );
    
    const footer = container.querySelector('footer');
    const nav = footer?.querySelector('nav');
    const link = nav?.querySelector('a');
    
    expect(footer).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
