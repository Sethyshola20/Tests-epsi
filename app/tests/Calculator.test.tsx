import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders calculator correctly', () => {
    const { getByText } = render(<Calculator />);
    getByText('7');
    getByText('8');
    getByText('9');
    getByText('+');
  });
  
  test('performs addition correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    getByDisplayValue('3');
  });
  
  test('handles division by zero', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    getByDisplayValue('Infinity');
  });