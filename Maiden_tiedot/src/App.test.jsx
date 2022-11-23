import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('App test', () => {
  
  const setup = () => {
    const utils = render(<App />)
    const input = utils.getByLabelText('Search:')
    return {
      input,
      ...utils,
    }
  }

  test('search finland', async () => {
    // Arrange
    const {input} = setup()
    // Act
    await fireEvent.change(input, {target: {value: 'fin'}})
    // Assert
    expect(screen.findByText(/Finland/i)).toBeDefined();
  });
});
