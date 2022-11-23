import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App test', () => {
  test('Start with 0 vote', () => {
    render(<App />);
    expect(screen.getAllByText(/Has 0 votes/i)).toBeDefined();
  });

  test('one vote after click', async () => {
    // Arrange
    render(<App />);
    // Act
    await userEvent.click(screen.getByText('Vote'))
    // Assert
    expect(screen.findByText(/Has 1 votes/i)).toBeDefined();
  });
});
