import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App test', () => {
  test('Render start page', () => {
  render(<App />);
    expect(screen.getAllByText(/Numbers/i)).toBeDefined();
  });

});
