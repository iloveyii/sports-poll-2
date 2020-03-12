import React from 'react';
import { render } from '@testing-library/react';
import  "@testing-library/jest-dom";
import App from '../components/App';

// Unit testing
test('renders App component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Signup/i);
    expect(linkElement).toBeInTheDocument();
});


