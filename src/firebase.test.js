import { auth, provider, signInWithPopup } from './firebase';

// Mock Firebase modules
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
}));

describe('Firebase Configuration', () => {
  test('exports auth, provider, and signInWithPopup', () => {
    expect(auth).toBeDefined();
    expect(provider).toBeDefined();
    expect(signInWithPopup).toBeDefined();
  });
});