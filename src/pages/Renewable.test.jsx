import { render, screen, fireEvent } from '@testing-library/react';
import Renewable from './Renewable';
import '@testing-library/jest-dom';
import {MemoryRouter, Routes, Route} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MockRenewable = ({ highlightedId = null }) => {
  return (
    <MemoryRouter initialEntries={[{ state: { selectedId: highlightedId } }]}>
      <Routes>
        <Route path="/" element={<Renewable />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Renewable Component', () => {
  test('renders the heading', () => {
    render(<MockRenewable />);
    expect(screen.getByRole('heading', { name: /Renewable Energy Sources/i })).toBeInTheDocument();
  });

  test('renders all renewable energy cards by default', () => {
    render(<MockRenewable />);
    const cards = screen.getAllByRole('heading', { level: 4 });
    expect(cards).toHaveLength(6);
    expect(screen.getByText('Solar Energy')).toBeInTheDocument();
    expect(screen.getByText('Wind Energy')).toBeInTheDocument();
  });


  test('highlights the correct card when highlightedId is provided', () => {
    render(<MockRenewable highlightedId={2} />);
    
    const highlightedCardName = screen.getByText('Wind Energy');
    const cardDiv = highlightedCardName.closest('.card');

    expect(cardDiv).toHaveClass('border-success', 'shadow-lg');
    expect(cardDiv).toHaveStyle('transform: scale(1.05)');
    
    const highlightedIndicator = screen.getByText(/Highlighted → Wind Energy/i);
    expect(highlightedIndicator).toBeInTheDocument();
  });

  test('does not highlight any card when highlightedId is not provided', () => {
    render(<MockRenewable />);
    const cards = screen.getAllByRole('heading', { level: 4 });
    cards.forEach(card => {
      const cardDiv = card.closest('.card');
      expect(cardDiv).not.toHaveClass('border-success');
      expect(cardDiv).not.toHaveStyle('transform: scale(1.05)');
    });
    expect(screen.queryByText(/Highlighted →/i)).not.toBeInTheDocument();
  });

  test('renders the back to home link', () => {
    render(<MockRenewable />);
    const backLink = screen.getByRole('link', { name: /← Back to Home/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/Home');
  });

  test('handles hover effects on cards', () => {
    render(<MockRenewable />);
    
    const solarCardTitle = screen.getByText('Solar Energy');
    const card = solarCardTitle.closest('.card');

    fireEvent.mouseEnter(card);
    expect(card).toHaveStyle('transform: translateY(-10px)');
    expect(card).toHaveStyle('box-shadow: 0 10px 30px rgba(0,0,0,0.2)');

    fireEvent.mouseLeave(card);
    expect(card).toHaveStyle('transform: translateY(0)');
    expect(card).toHaveStyle('box-shadow: 0 5px 15px rgba(0,0,0,0.1)');
  });
});