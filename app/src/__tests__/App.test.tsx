import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('it works', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/QQQ/i);
  expect(linkElement).toBeInTheDocument();
});
