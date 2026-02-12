import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import { auth } from './firebase';
import '@testing-library/jest-dom';

// Mock firebase auth
jest.mock('./firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
  },
}));

const TestComponent = () => {
  const { currentUser } = useAuth();
  return <div>{currentUser ? `User: ${currentUser.email}` : 'No User'}</div>;
};

describe('AuthContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('provides current user when auth state changes', async () => {
    auth.onAuthStateChanged.mockImplementation((callback) => {
      callback({ email: 'test@example.com' });
      return jest.fn(); // unsubscribe
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(await screen.findByText('User: test@example.com')).toBeInTheDocument();
  });

  test('provides null when no user is logged in', async () => {
    auth.onAuthStateChanged.mockImplementation((callback) => {
      callback(null);
      return jest.fn();
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(await screen.findByText('No User')).toBeInTheDocument();
  });
});