import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders Calculator correctly', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('updates result on button click', () => {
  const { getByText } = render(<Calculator />);
  const result = document.getElementById('result');

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(result.textContent).toBe('3');

  // Update the snapshot
  expect(result).toMatchSnapshot();
});

test('clears result on "AC" button click', () => {
  const { getByText } = render(<Calculator />);
  const result = document.getElementById('result');

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('AC'));

  expect(result.textContent).toBe('0');

  // Update the snapshot
  expect(result).toMatchSnapshot();
});

test('handles division by zero', () => {
  const { getByText } = render(<Calculator />);
  const result = document.getElementById('result');

  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('÷'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('='));

  expect(result.textContent).toBe("Can't divide by 0.");

  // Update the snapshot
  expect(result).toMatchSnapshot();
});
