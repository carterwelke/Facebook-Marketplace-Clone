import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

/**
 */
test('App Renders', async () => {
  render(<App />);
});

test('Category Renders', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('All Categories'));
  await waitFor(() => screen.getByText('Retrieve'));
  await waitFor(() => screen.getByText('List'));
  await waitFor(() => screen.getByText('of categories'));
  fireEvent.click(screen.getByText('Back'));
});

test('Create User', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  fireEvent.click(screen.getByText('Create Account'));
  await waitFor(() => screen.getByText('Create Account Here'));
  fireEvent.click(screen.getByText('Back'));
  fireEvent.click(screen.getByText('Back'));
});
