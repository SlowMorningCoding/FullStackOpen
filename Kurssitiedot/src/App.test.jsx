import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('Total of 42 exercises', () => {
    render(<App />);
    expect(screen.getAllByText(/total of 42 exercises/i)).toBeDefined();
  });
});
