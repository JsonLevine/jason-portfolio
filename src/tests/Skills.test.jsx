import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../components/Skills';

// Mock the data module
jest.mock('../data', () => ({
  skills: [
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'React', icon: '/icons/react.png' }
  ],
  softskills: ['Communication', 'Teamwork']
}));

describe('Skills Component', () => {
  it('renders the section title', () => {
    render(<Skills />);
    expect(screen.getByText(/Skills & Technologies/i)).toBeInTheDocument();
  });

  it('renders all technical skills from data', () => {
    render(<Skills />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    const jsImg = screen.getByAltText('JavaScript Logo');
    const reactImg = screen.getByAltText('React Logo');
    expect(jsImg).toHaveAttribute('src', '/icons/js.png');
    expect(reactImg).toHaveAttribute('src', '/icons/react.png');
  });

  it('renders all soft skills from data', () => {
    render(<Skills />);
    expect(screen.getByText('Communication')).toBeInTheDocument();
    expect(screen.getByText('Teamwork')).toBeInTheDocument();
  });

});
