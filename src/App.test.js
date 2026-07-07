import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the single-page navigation menu', () => {
  render(<App />);

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/sobre/i)).toBeInTheDocument();
  expect(screen.getByText(/projetos/i)).toBeInTheDocument();
  expect(screen.getByText(/contato/i)).toBeInTheDocument();
});
