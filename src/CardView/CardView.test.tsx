import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import {CardView} from './CardView';

const sampleCardInfo = {
  title: 'Sample Card',
  description: 'This is a sample card for testing.',
  owner: 'John Doe',
  properties: ['Tag1', 'Tag2', 'Tag3'],
  metrics: ['Metric 1', 'Metric 2', 'Metric 3'],
};

const mockOnCardClick = jest.fn();

test('renders card view component', () => {
  render(<CardView cardViewInfo={sampleCardInfo} onCardClick={mockOnCardClick} />);
  expect(screen.getByText('Sample Card')).toBeInTheDocument();
});

test('displays properties correctly', () => {
  render(<CardView cardViewInfo={sampleCardInfo} onCardClick={mockOnCardClick} />);
  expect(screen.getByText('Tag1')).toBeInTheDocument();
  expect(screen.getByText('Tag2')).toBeInTheDocument();
  expect(screen.getByText('Tag3')).toBeInTheDocument();
});

test('displays metrics correctly', () => {
  render(<CardView cardViewInfo={sampleCardInfo} onCardClick={mockOnCardClick} />);
  expect(screen.getByText('Metric 1')).toBeInTheDocument();
  expect(screen.getByText('Metric 2')).toBeInTheDocument();
  expect(screen.getByText('Metric 3')).toBeInTheDocument();
});

test('calls onCardClick when card is clicked', () => {
  render(<CardView cardViewInfo={sampleCardInfo} onCardClick={mockOnCardClick} />);
  fireEvent.click(screen.getByText('Sample Card'));
  expect(mockOnCardClick).toHaveBeenCalledWith(sampleCardInfo);
});