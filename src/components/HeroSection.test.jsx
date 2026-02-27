import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import '@testing-library/jest-dom';

describe('HeroSection Component', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  test('renders without crashing', () => {
    const heroDiv = screen.getByText(/Understanding Energy Today/i).closest('div.text-white');
    expect(heroDiv).toBeInTheDocument();
  });

  test('displays the main heading', () => {
    expect(screen.getByRole('heading', { 
      name: /Understanding Energy Today to Build a Sustainable Tomorrow/i 
    })).toBeInTheDocument();
  });

  test('displays the lead paragraph', () => {
    expect(screen.getByText(
      /Learn how energy shapes our world — from renewable innovations to responsible usage — and be part of the change./i
    )).toBeInTheDocument();
  });
});