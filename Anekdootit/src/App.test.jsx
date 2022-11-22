import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('Start with 0 vote', () => {
    render(<App />);
    expect(screen.getAllByText(/Has 0 votes/i)).toBeDefined();
  });
});
