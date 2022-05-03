import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Check whether the page loads successfuly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Lick/i);
  expect(linkElement).toBeInTheDocument();
});