import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DataScience from './DataScience';
import '@testing-library/jest-dom';

// Mock Recharts
jest.mock('recharts', () => ({
  PieChart: () => <div>PieChart</div>,
  Pie: () => <div>Pie</div>,
  Cell: () => <div>Cell</div>,
}));

// Mock global fetch
global.fetch = jest.fn();

describe('DataScience Component', () => {
  test('renders Step 1 initially', () => {
    render(<DataScience />);
    expect(screen.getByText(/Solar Energy AI Predictor/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start →/i })).toBeInTheDocument();
  });

  test('navigates to Step 2', () => {
    render(<DataScience />);
    fireEvent.click(screen.getByRole('button', { name: /Start →/i }));
    
    expect(screen.getByText(/Solar Panel Input/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/System Capacity/i)).toBeInTheDocument();
  });

  test('updates form inputs in Step 2', () => {
    render(<DataScience />);
    fireEvent.click(screen.getByRole('button', { name: /Start →/i }));

    const capacityInput = screen.getByLabelText(/System Capacity/i);
    fireEvent.change(capacityInput, { target: { value: '10' } });
    expect(capacityInput.value).toBe('10');
  });

  test('handles image upload and analysis (Step 2 -> Step 3)', async () => {
    render(<DataScience />);
    
    // Go to Step 2
    fireEvent.click(screen.getByRole('button', { name: /Start →/i }));
    
    // Mock API response
    const mockResponse = {
      summary: { total_daily_loss_kwh: 10 },
      download_url: '/annotated.jpg',
      panel_analysis: [
        {
          panel_number: 1,
          faults_left: [],
          faults_right: [],
          panel_loss_kwh: 0.5
        }
      ]
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    // Upload file
    const file = new File(['dummy content'], 'solar.jpg', { type: 'image/jpeg' });
    const fileInput = screen.getByLabelText(/Upload Image/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Click Analyze
    fireEvent.click(screen.getByText(/Analyze →/i));

    await waitFor(() => expect(screen.getByText(/Solar Panel Energy Loss Analysis/i)).toBeInTheDocument());
  });

  test('handles API error', async () => {
    render(<DataScience />);
    fireEvent.click(screen.getByRole('button', { name: /Start →/i }));
    
    // Mock API failure
    fetch.mockResolvedValueOnce({
      ok: false,
      text: async () => 'Server Error',
    });

    // Mock alert and console.error
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Upload file
    const file = new File(['dummy'], 'solar.jpg', { type: 'image/jpeg' });
    const fileInput = screen.getByLabelText(/Upload Image/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Click Analyze
    fireEvent.click(screen.getByText(/Analyze →/i));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(expect.stringContaining('Backend error'));
    });

    alertMock.mockRestore();
    consoleErrorMock.mockRestore();
  });
});