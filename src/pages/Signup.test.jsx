import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from './Signup';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signup Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  });

  test('renders signup form', () => {
    expect(screen.getByRole('heading', { name: /Create Account/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument();
  });

  test('shows error if email already exists', async () => {
    localStorage.setItem('test@example.com', JSON.stringify({ name: 'Test', email: 'test@example.com' }));
    
    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'New User' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(await screen.findByText(/Email already exists/i)).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('successfully signs up new user', async () => {
    jest.useFakeTimers();
    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'New User' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(await screen.findByText(/Signup successful/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(mockNavigate).toHaveBeenCalledWith('/login');
    
    expect(localStorage.getItem('new@example.com')).toBeTruthy();
    jest.useRealTimers();
  });
});