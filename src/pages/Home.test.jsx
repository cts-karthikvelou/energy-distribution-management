import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test('renders the main hero title', () => {
    expect(screen.getByText(/Empowering Industries With Smart, Sustainable & Data-Driven Energy Systems/i)).toBeInTheDocument();
  });

  test('renders the hero eyebrow text', () => {
    expect(screen.getByText(/Intelligent Energy Futures/i)).toBeInTheDocument();
  });

  test('renders "What is Energy?" section', () => {
    expect(screen.getByRole('heading', { name: /What is Energy\?/i })).toBeInTheDocument();
  });

  test('renders "Explore Renewables" and "Explore Non-Renewables" links', () => {
    expect(screen.getByRole('link', { name: /Explore Renewables/i })).toHaveAttribute('href', '/renewable');
    expect(screen.getByRole('link', { name: /Explore Non-Renewables/i })).toHaveAttribute('href', '/nonrenewable');
  });

  test('renders the "About Our Approach" section', () => {
    expect(screen.getByRole('heading', { name: /About Our Approach/i })).toBeInTheDocument();
  });

  test('renders the solution card for "Solar Intelligence"', () => {
    expect(screen.getByRole('heading', { name: /Solar Intelligence/i })).toBeInTheDocument();
  });

  test('renders the final CTA section with a link to contact page', () => {
    expect(screen.getByText(/Let’s build a smarter, greener energy future together./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact Us/i })).toHaveAttribute('href', '/contact');
  });
});