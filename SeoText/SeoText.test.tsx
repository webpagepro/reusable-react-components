import React from 'react';
import { render, screen } from '@testing-library/react';
import { SeoText } from './SeoText';

test('renders learn react link', () => {
  render(<SeoText />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
