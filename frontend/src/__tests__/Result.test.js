import React from 'react';
import { render } from '@testing-library/react';
import Result from '../components/Result';
import mcqs from '../mocks';
import Model from '../components/Model';

test('renders Quiz component with 1 Question', () => {
  const q1 = new Model(mcqs[0]);
  const q2 = new Model(mcqs[1]);
  const { getByText } = render(<Result questions={[q1,q2]} />);
  const linkElement = getByText(/Result/i);
  expect(linkElement).toBeInTheDocument();
});
