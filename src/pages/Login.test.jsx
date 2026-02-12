import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import '@testing-library/jest-dom';

// Mock Firebase
jest.mock('../firebase', () => ({
  auth: {},
  provider: {},
  signInWithPopup: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  test('handles successful login', async () => {
    jest.useFakeTimers();
    const user = { email: 'test@example.com', password: 'password123', name: 'Test User' };
    localStorage.setItem('test@example.com', JSON.stringify(user));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(screen.getByText(/Login Successful!/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/datascience');
    jest.useRealTimers();
  });

  test('shows error on invalid credentials', async () => {
    jest.useFakeTimers();
    const user = { email: 'test@example.com', password: 'password123', name: 'Test User' };
    localStorage.setItem('test@example.com', JSON.stringify(user));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpassword' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(screen.getByText(/Invalid Email or Password/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(screen.queryByText(/Invalid Email or Password/i)).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  test('navigates to signup page', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    fireEvent.click(screen.getByText(/Signup/i));
    expect(mockNavigate).toHaveBeenCalledWith('/signup');
  });

  test('shows error when user does not exist', async () => {
    jest.useFakeTimers();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'nonexistent@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(screen.getByText(/Invalid Email or Password/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(screen.queryByText(/Invalid Email or Password/i)).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});