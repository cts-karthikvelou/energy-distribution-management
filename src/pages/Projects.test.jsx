import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Projects Component', () => {
  test('renders projects page', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Our Energy Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Renewable Energy Projects$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Non-Renewable Energy Projects/i })).toBeInTheDocument();
  });

  test('navigates to project details', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
    // Click the first "View Details" button
    const buttons = screen.getAllByText(/View Details →/i);
    fireEvent.click(buttons[0]);
    expect(mockNavigate).toHaveBeenCalledWith('/renewable/1');
  });

  test('handles hover effects on project cards', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const solarCardTitle = screen.getByText('Solar Energy');
    const card = solarCardTitle.closest('.card');

    fireEvent.mouseEnter(card);
    expect(card).toHaveStyle('transform: translateY(-8px)');
    expect(card).toHaveStyle('box-shadow: 0 6px 20px rgba(0,0,0,0.15)');

    fireEvent.mouseLeave(card);
    expect(card).toHaveStyle('transform: translateY(0)');
    expect(card).toHaveStyle('box-shadow: 0 4px 10px rgba(0,0,0,0.1)');
  });
});