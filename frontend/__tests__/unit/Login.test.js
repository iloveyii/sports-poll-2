import React from 'react';
import { render } from '@testing-library/react';
import  "@testing-library/jest-dom";
import Login from '../../src/components/Login';

// Unit testing
test('renders login component', () => {
    const { getByText } = render(<Login />);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
});

