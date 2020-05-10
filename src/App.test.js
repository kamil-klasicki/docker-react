import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders I have changed this on a new branch! link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I have changed this on a new branch!/i);
  expect(linkElement).toBeInTheDocument();
});

