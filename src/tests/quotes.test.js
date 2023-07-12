import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import APIRequest from '../components/quoteAPI';

test('renders APIRequest component', () => {
  const { container } = render(<APIRequest />);
  expect(container.firstChild).toMatchSnapshot();
});

test('displays loading message', () => {
  const { container } = render(<APIRequest isLoading />);
  expect(container.firstChild).toMatchSnapshot();
});

test('displays error message', () => {
  const { container } = render(<APIRequest hasError />);
  expect(container.firstChild).toMatchSnapshot();
});

test('fetches data and renders it', async () => {
  const mockData = [
    {
      quote: "I love photo sessions. I'm alone, I'm the queen, everyone's taking care of me.",
      author: 'Eva Herzigova',
    },
  ];

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockData),
  }));

  render(<APIRequest />);

  await waitFor(() => {
    const expectedContent = `${mockData[0].quote}<span>-${mockData[0].author}</span>`;
    const headingElement = screen.getByRole('heading');
    expect(headingElement.innerHTML).toContain(expectedContent);
  });

  global.fetch.mockRestore();
});
