import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App test', () => {
  test('No feedback given', () => {
    render(<App />);
    expect(screen.getByText(/No feedback given/i)).toBeInTheDocument();
  });

  test('Good feedback given', () => {
    render(<App />);
    await userEvent.click(screen.getByText('Good'));
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
  });

});
