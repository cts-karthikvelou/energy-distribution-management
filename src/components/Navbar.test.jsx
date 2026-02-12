import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders navbar links and login button when not logged in', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/AboutUs/i)).toBeInTheDocument();
    expect(screen.getByText(/OurAi/i)).toBeInTheDocument();
    expect(screen.getByText(/ContactUs/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
  });

  test('shows Logout button when logged in', () => {
    localStorage.setItem('currentUser', 'user');
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
  });

  test('handleAiClick navigates to login if not logged in', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const aiLink = screen.getByText(/OurAi/i);
    fireEvent.click(aiLink);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('handleAiClick navigates to datascience if logged in', () => {
    localStorage.setItem('currentUser', 'user');
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const aiLink = screen.getByText(/OurAi/i);
    fireEvent.click(aiLink);
    expect(mockNavigate).toHaveBeenCalledWith('/datascience');
  });

  test('handleLogout removes user and navigates to login', () => {
    localStorage.setItem('currentUser', 'user');
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoutBtn = screen.getByText(/Logout/i);
    fireEvent.click(logoutBtn);
    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});