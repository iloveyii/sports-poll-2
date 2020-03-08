import React from 'react';
import { render } from '@testing-library/react';
import  "@testing-library/jest-dom";
import App from '../components/App2';

// Unit testing
test('renders Questions pool', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Questions pool/i);
  expect(linkElement).toBeInTheDocument();
});


