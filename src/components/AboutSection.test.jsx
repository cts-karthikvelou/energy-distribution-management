import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';
import '@testing-library/jest-dom';

describe('AboutSection Component', () => {
  test('renders about section', () => {
    render(<AboutSection />);
    // Assuming it has a heading or some text
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });
});