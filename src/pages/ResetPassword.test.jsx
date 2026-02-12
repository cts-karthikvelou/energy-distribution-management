import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ResetPassword Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <MemoryRouter>
        <ResetPassword />
      </MemoryRouter>
    );
  });

  test('renders reset password form', () => {
    expect(screen.getByRole('heading', { name: /Reset Password/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/New Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
  });

  test('shows error when passwords do not match', () => {
    fireEvent.change(screen.getByLabelText(/New Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password456' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(screen.getByText(/Passwords do not match!/i)).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('shows success and navigates when passwords match', async () => {
    jest.useFakeTimers();
    fireEvent.change(screen.getByLabelText(/New Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(screen.getByText(/Password reset successful!/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(mockNavigate).toHaveBeenCalledWith('/login');
    jest.useRealTimers();
  });
});