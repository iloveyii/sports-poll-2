import React from 'react';
import { render } from '@testing-library/react';
import Question from '../components/Question';
import mcqs from '../mocks';
import Model from '../components/Model';

test('renders Quiz component with 1 Question', () => {
  const q = new Model(mcqs[0]);
  const { getByText } = render(<Question index={0} key={0} prev={() => null}
                                         next={() => null} q={q} />);
  const linkElement = getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
