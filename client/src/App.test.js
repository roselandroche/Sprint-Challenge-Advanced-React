import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEact(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/women\'s world cup players/i)
  expect(element).toBeVisible()
});

it('contains United States', () => {
  expect(isCountry('United States')).toBeTruthy();
});