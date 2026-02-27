import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom';

describe('ContactForm Component', () => {
  test('renders contact form', () => {
    render(<ContactForm />);
    // Check for button
    expect(screen.getByRole('button')).toBeInTheDocument();
    // Check for inputs (assuming generic inputs exist)
    expect(screen.getAllByRole('textbox').length).toBeGreaterThan(0);
  });
});