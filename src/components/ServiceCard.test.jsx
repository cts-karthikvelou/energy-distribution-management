import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import '@testing-library/jest-dom';

describe('ServiceCard Component', () => {
  test('renders service card with props (no link)', () => {
    const props = {
      title: 'Test Service',
      desc: 'Test Description',
      icon: 'bi-sun'
    };
    
    render(<ServiceCard {...props} />);
    
    expect(screen.getByText(/Test Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
    // Should not render a link if no link prop is passed
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  test('renders service card with link', () => {
    const props = {
      title: 'Linked Service',
      desc: 'Description with link',
      icon: 'bi-wind',
      link: '/service-details'
    };

    render(
      <MemoryRouter>
        <ServiceCard {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Linked Service/i)).toBeInTheDocument();
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/service-details');
  });
});