import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders NavBar component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  const header = getByText('Math Magicians');
  expect(header).toBeInTheDocument();

  const homeLink = getByText('Home');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toBe('/');

  const calculatorLink = getByText('Calculator');
  expect(calculatorLink).toBeInTheDocument();
  expect(calculatorLink.getAttribute('href')).toBe('/calculator');

  const quotesLink = getByText('Quotes');
  expect(quotesLink).toBeInTheDocument();
  expect(quotesLink.getAttribute('href')).toBe('/quotes');
});
