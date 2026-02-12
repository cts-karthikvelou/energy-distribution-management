import { render, screen } from '@testing-library/react';
import Services from './Services';
import '@testing-library/jest-dom';

describe('Services Component', () => {
  test('renders services page content', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument();
    expect(screen.getByText(/Powering the world with sustainable energy solutions/i)).toBeInTheDocument();
    
    // Check for specific service cards
    expect(screen.getByText(/Solar Power Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind Energy Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Hydropower Systems/i)).toBeInTheDocument();
    expect(screen.getByText(/Biomass Energy/i)).toBeInTheDocument();
    expect(screen.getByText(/Research & Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Energy Consultation/i)).toBeInTheDocument();
  });
});