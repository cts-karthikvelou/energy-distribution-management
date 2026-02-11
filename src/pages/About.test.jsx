import { render, screen } from '@testing-library/react';
import About from './About';
import '@testing-library/jest-dom';

// Mock IntersectionObserver
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('renders the main heading "About Us"', () => {
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument();
  });

  test('renders the "Who We Are" section', () => {
    expect(screen.getByRole('heading', { name: /Who We Are/i })).toBeInTheDocument();
    expect(screen.getByText(/We are a passionate team dedicated to shaping a cleaner energy future./i)).toBeInTheDocument();
  });

  test('renders the "Our Approach" section', () => {
    expect(screen.getByRole('heading', { name: /Our Approach/i })).toBeInTheDocument();
  });

  test('renders Mission and Vision sections', () => {
    expect(screen.getByRole('heading', { name: /Our Mission/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Our Vision/i })).toBeInTheDocument();
  });

  test('renders Core Values', () => {
    expect(screen.getByRole('heading', { name: /Our Core Values/i })).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Sustainability')).toBeInTheDocument();
    expect(screen.getByText('Integrity')).toBeInTheDocument();
    expect(screen.getByText('Collaboration')).toBeInTheDocument();
  });

  test('renders the "Meet Our Team" section with team members', () => {
    expect(screen.getByRole('heading', { name: /Meet Our Team/i })).toBeInTheDocument();
    expect(screen.getByText('Naveen')).toBeInTheDocument();
    expect(screen.getByText('Maneesha')).toBeInTheDocument();
    expect(screen.getByText('Aishwarya')).toBeInTheDocument();
  });
});