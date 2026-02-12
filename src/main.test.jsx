import React from 'react';
import { createRoot } from 'react-dom/client';

// Mock ReactDOM
jest.mock('react-dom/client', () => ({
  __esModule: true,
  createRoot: jest.fn(),
}));

// Mock App
jest.mock('./App', () => () => <div>App</div>);

// Mock Bootstrap CSS/JS to prevent import errors during test
jest.mock("bootstrap/dist/css/bootstrap.min.css", () => {});
jest.mock("bootstrap-icons/font/bootstrap-icons.css", () => {});
jest.mock("bootstrap/dist/js/bootstrap.bundle.min.js", () => {});

describe('Main Entry Point', () => {
  test('renders App into root element', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
    
    const renderMock = jest.fn();
    createRoot.mockReturnValue({ render: renderMock });

    jest.isolateModules(() => {
      require('./main.jsx');
    });

    expect(createRoot).toHaveBeenCalledWith(root);
    expect(renderMock).toHaveBeenCalled();
  });
});