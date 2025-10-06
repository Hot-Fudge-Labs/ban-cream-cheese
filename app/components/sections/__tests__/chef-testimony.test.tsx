import { render, screen } from '@testing-library/react';
import { ChefTestimony } from '../chef-testimony';

describe('ChefTestimony', () => {
  it('should render section header', () => {
    render(<ChefTestimony />);
    
    expect(screen.getByText(/CHEF/i)).toBeInTheDocument();
    expect(screen.getByText(/TESTIMONY/i)).toBeInTheDocument();
    expect(screen.getByText(/VOICES FROM THE KITCHEN/i)).toBeInTheDocument();
  });

  it('should render chef quote', () => {
    render(<ChefTestimony />);
    
    const quote = screen.getByText(/CREAM CHEESE IN SUSHI IS LIKE PUTTING KETCHUP ON WAGYU BEEF/i);
    expect(quote).toBeInTheDocument();
    expect(screen.getByText(/IT'S NOT FUSION - IT'S DESTRUCTION/i)).toBeInTheDocument();
  });

  it('should render chef attribution', () => {
    render(<ChefTestimony />);
    
    expect(screen.getByText(/ANONYMOUS SUSHI MASTER/i)).toBeInTheDocument();
  });

  it('should render fact box', () => {
    render(<ChefTestimony />);
    
    expect(screen.getByText(/FACT:/i)).toBeInTheDocument();
    expect(screen.getByText(/NO TRADITIONAL SUSHI CONTAINS DAIRY/i)).toBeInTheDocument();
  });

  it('should render chef image', () => {
    render(<ChefTestimony />);
    
    const image = screen.getByAltText('Traditional sushi chef');
    expect(image).toBeInTheDocument();
  });

  it('should render statistics cards', () => {
    render(<ChefTestimony />);
    
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText(/YEARS OF TRAINING WASTED/i)).toBeInTheDocument();
    
    expect(screen.getByText('$0')).toBeInTheDocument();
    expect(screen.getByText(/VALUE OF/i)).toBeInTheDocument();
    
    expect(screen.getByText('∞')).toBeInTheDocument();
    expect(screen.getByText(/ANCESTORS DISAPPOINTED/i)).toBeInTheDocument();
    
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText(/NOT ACTUAL SUSHI/i)).toBeInTheDocument();
  });

  it('should render call to action section', () => {
    render(<ChefTestimony />);
    
    expect(screen.getByText(/TAKE A STAND/i)).toBeInTheDocument();
    expect(screen.getByText(/REFUSE TO ACCEPT CREAM CHEESE AS A LEGITIMATE SUSHI INGREDIENT/i)).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(<ChefTestimony />);
    
    const spreadButton = screen.getByRole('button', { name: /SPREAD THE WORD/i });
    const findButton = screen.getByRole('button', { name: /FIND REAL SUSHI/i });
    
    expect(spreadButton).toBeInTheDocument();
    expect(findButton).toBeInTheDocument();
  });

  it('should have proper section styling', () => {
    const { container } = render(<ChefTestimony />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-red-500', 'text-white');
  });
});
