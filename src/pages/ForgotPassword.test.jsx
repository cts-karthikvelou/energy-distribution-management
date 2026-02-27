import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import '@testing-library/jest-dom';

describe('ForgotPassword Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );
  });

  test('renders forgot password form', () => {
    expect(screen.getByRole('heading', { name: /Forgot Password/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your registered email/i)).toBeInTheDocument();
  });

  test('shows error on empty submission', () => {
    // Trigger validation error
    const button = screen.getByRole('button', { name: /Send Reset Link/i });
    fireEvent.click(button);
    
    expect(screen.getByText(/Please enter your email!/i)).toBeInTheDocument();
  });

  test('shows success message on valid submission', () => {
    jest.useFakeTimers();
    fireEvent.change(screen.getByPlaceholderText(/Enter your registered email/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Reset Link/i }));

    expect(screen.getByText(/Password reset link sent to your email!/i)).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
  });
});