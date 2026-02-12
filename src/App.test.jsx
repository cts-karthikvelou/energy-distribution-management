import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

// Mock components to avoid rendering full tree and routing issues
jest.mock('./components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('./components/Footer', () => () => <div data-testid="footer">Footer</div>);
jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/Login', () => () => <div>Login Page</div>);
jest.mock('./pages/Signup', () => () => <div>Signup Page</div>);
jest.mock('./pages/About', () => () => <div>About Page</div>);
jest.mock('./pages/Contact', () => () => <div>Contact Page</div>);
jest.mock('./pages/Services', () => () => <div>Services Page</div>);
jest.mock('./pages/DataScience', () => () => <div>DataScience Page</div>);
jest.mock('./pages/Projects', () => () => <div>Projects Page</div>);
jest.mock('./pages/Renewable', () => () => <div>Renewable Page</div>);
jest.mock('./pages/NonRenewable', () => () => <div>NonRenewable Page</div>);
jest.mock('./pages/DetailsPage', () => () => <div>Details Page</div>);
jest.mock('./pages/ResetPassword', () => () => <div>ResetPassword Page</div>);
jest.mock('./pages/ForgotPassword', () => () => <div>ForgotPassword Page</div>);
jest.mock('./pages/logout', () => () => <div>Logout Page</div>);
jest.mock('./ScrollToTop', () => () => null);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});