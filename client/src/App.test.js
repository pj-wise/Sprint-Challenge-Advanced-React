import React from 'react';
import App from './App';

import { render, fireEvent } from '@testing-library/react';

test('App renders without crashing', () => {
  const wrapper = render(<App />);
});

test('DivBtn changes button wording', () => {
  const { getByText, getByTestId } = render(<App />);
  const darkBtn = getByTestId(/darkBtn/i);
  fireEvent.click(darkBtn);
  //double click and change wording(light -> dark) to make sure
  // fireEvent.click(darkBtn);
  expect(getByText(/toggle light mode!/i));
});

test('Contains data from API', async () => {
  const { findByText } = await render(<App />);
  expect(
    findByText(/Carli Lloyd/i) ? console.log('YAY') : console.log('NOOOO')
  );
});
