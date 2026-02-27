import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logout from './logout';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Logout Component', () => {
  test('removes user and redirects', async () => {
    jest.useFakeTimers();
    localStorage.setItem('currentUser', 'someUser');
    render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );

    expect(screen.getByText(/Logging out.../i)).toBeInTheDocument();
    expect(localStorage.getItem('currentUser')).toBeNull();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(mockNavigate).toHaveBeenCalledWith('/login');
    jest.useRealTimers();
  });
});