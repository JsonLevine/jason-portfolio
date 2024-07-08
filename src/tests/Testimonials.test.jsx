import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data';

// Mock the icons
jest.mock('@heroicons/react/24/solid', () => ({
  HandThumbUpIcon: () => <div data-testid="hand-thumb-up-icon">HandThumbUpIcon</div>,
  UsersIcon: () => <div data-testid="users-icon">UsersIcon</div>,
}));

describe('Testimonials Component', () => {
  beforeEach(() => {
    render(<Testimonials />);
  });

  it('renders the title correctly', () => {
    const title = screen.getByText('Testimonials');
    expect(title).toBeInTheDocument();
  });

  it('renders the correct number of testimonials', () => {
    const testimonialElements = screen.getAllByText('HandThumbUpIcon');
    expect(testimonialElements.length).toBe(testimonials.length);
  });

  it('renders each testimonial with the correct quote, name, and title', () => {
    testimonials.forEach(testimonial => {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument();
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.title)).toBeInTheDocument();
    });
  });

  it('renders the user icon correctly', () => {
    expect(screen.getByTestId('users-icon')).toBeInTheDocument();
  });
});
