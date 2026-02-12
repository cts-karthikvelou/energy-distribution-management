import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import React from 'react';

// Mock window.scrollTo
global.scrollTo = jest.fn();

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('scrolls to top on render', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});