import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders footer', () => {
    render(<Footer />);
    // Footer usually has a contentinfo role
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});