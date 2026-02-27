import React from 'react';
import { render, screen } from '@testing-library/react';
import EnergyDashboard from './EnergyDashboard';
import '@testing-library/jest-dom';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() =>
      Promise.resolve({
        data: [
          { date: '2024-07-01', time: '12:00', thermostatId: 'T1', energyConsumption: 10 },
          { date: '2024-07-01', time: '13:00', thermostatId: 'T2', energyConsumption: 15 },
        ],
      })
    ),
  },
}));

describe('EnergyDashboard', () => {
  it('renders energy consumption data', async () => {
    render(<EnergyDashboard />);

    expect(screen.getByText('Energy Consumption Dashboard')).toBeInTheDocument();

    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(1); // 1 header row + 2 data rows

    const firstRow = rows[1];
    expect(firstRow).toHaveTextContent('2024-07-01');
    expect(firstRow).toHaveTextContent('12:00');
    expect(firstRow).toHaveTextContent('T1');
    expect(firstRow).toHaveTextContent('10');

    const secondRow = rows[2];
    expect(secondRow).toHaveTextContent('2024-07-01');
    expect(secondRow).toHaveTextContent('13:00');
    expect(secondRow).toHaveTextContent('T2');
    expect(secondRow).toHaveTextContent('15');
  });
});