import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import '@testing-library/jest-dom';

// Mock Recharts to avoid rendering issues in test environment
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
  PieChart: ({ children }) => <div>{children}</div>,
  Pie: () => <div>Pie Chart</div>,
  Tooltip: () => <div>Tooltip</div>,
}));

describe('DetailsPage Component', () => {
  test('renders "No details found" when no state is passed', () => {
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/No details found/i)).toBeInTheDocument();
  });

  test('renders energy details when state is provided', () => {
    jest.useFakeTimers();
    const mockEnergy = {
      name: 'Solar Energy',
      desc: 'Description of Solar Energy',
      img: 'solar.jpg',
      rating: 5,
      efficiency: 80,
      impact: 20,
      advantages: ['Advantage 1'],
      disadvantages: ['Disadvantage 1'],
      examples: ['Example 1']
    };

    render(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: { energy: mockEnergy } }]}>
        <Routes>
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Solar Energy')).toBeInTheDocument();
    expect(screen.getByText('Description of Solar Energy')).toBeInTheDocument();
    expect(screen.getByText(/Rating: 5 \/ 5/i)).toBeInTheDocument();
    expect(screen.getByText(/80% Efficient/i)).toBeInTheDocument();
    expect(screen.getByText(/20\/100 Impact Score/i)).toBeInTheDocument();
    expect(screen.getByText('Advantage 1')).toBeInTheDocument();
    jest.useRealTimers();
  });
});