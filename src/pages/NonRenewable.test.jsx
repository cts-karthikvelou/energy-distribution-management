import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NonRenewable from './NonRenewable';
import '@testing-library/jest-dom';

// eslint-disable-next-line react/prop-types
const MockNonRenewable = ({ highlightedId = null }) => {
  return (
    <MemoryRouter initialEntries={[{ state: { selectedId: highlightedId } }]}>
      <Routes>
        <Route path="/" element={<NonRenewable />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('NonRenewable Component', () => {
  test('renders the heading', () => {
    render(<MockNonRenewable />);
    expect(screen.getByRole('heading', { name: /Non-Renewable Energy Sources/i })).toBeInTheDocument();
  });

  test('renders all non-renewable energy cards by default', () => {
    render(<MockNonRenewable />);
    const cards = screen.getAllByRole('heading', { level: 4 });
    expect(cards).toHaveLength(6);
    expect(screen.getByText('Coal Energy')).toBeInTheDocument();
    expect(screen.getByText('Oil (Petroleum)')).toBeInTheDocument();
  });


  test('highlights the correct card when highlightedId is provided', () => {
    render(<MockNonRenewable highlightedId={1} />);
    
    const highlightedCardName = screen.getByText('Coal Energy');
    const cardDiv = highlightedCardName.closest('.card');

    expect(cardDiv).toHaveClass('border-danger', 'shadow-lg');
    
    const highlightedIndicator = screen.getByText(/Highlighted → Coal Energy/i);
    expect(highlightedIndicator).toBeInTheDocument();
  });

  test('does not highlight any card when highlightedId is not provided', () => {
    render(<MockNonRenewable />);
    const cards = screen.getAllByRole('heading', { level: 4 });
    cards.forEach(card => {
      const cardDiv = card.closest('.card');
      expect(cardDiv).not.toHaveClass('border-danger');
    });
    expect(screen.queryByText(/Highlighted →/i)).not.toBeInTheDocument();
  });

  test('renders the back to home link', () => {
    render(<MockNonRenewable />);
    const backLink = screen.getByRole('link', { name: /← Back to Home/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/home');
  });

  test('handles hover effects on cards', () => {
    render(<MockNonRenewable />);
    
    const coalCardTitle = screen.getByText('Coal Energy');
    const card = coalCardTitle.closest('.card');

    expect(card).toHaveClass('hover-card');
  });
});