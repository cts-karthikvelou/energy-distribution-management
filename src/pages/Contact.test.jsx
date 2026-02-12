import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';
import '@testing-library/jest-dom';
import emailjs from '@emailjs/browser';

// Mock emailjs
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(),
}));

// Mock Leaflet to prevent errors with global L object modification
jest.mock('leaflet', () => ({
  __esModule: true,
  default: {
    Icon: {
      Default: {
        prototype: {
          _getIconUrl: jest.fn(),
        },
        mergeOptions: jest.fn(),
      },
    },
  },
}));

// Mock Leaflet components
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div>MapContainer {children}</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: ({ children }) => <div>Marker {children}</div>,
  Popup: ({ children }) => <div>Popup {children}</div>,
}));

describe('Contact Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form and info', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Our Office/i })).toBeInTheDocument();
  });

  test('handles successful form submission', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200, text: 'OK' });

    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument();
    });
    
    expect(emailjs.sendForm).toHaveBeenCalled();
  });

  test('handles failed form submission', async () => {
    emailjs.sendForm.mockRejectedValue(new Error('Failed'));

    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
    });
  });
});