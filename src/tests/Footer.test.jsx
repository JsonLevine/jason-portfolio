import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer with the correct link', () => {
    const linkElement = screen.getByTestId('footer-link');
      expect(linkElement).toBeInTheDocument();
  });

  it('renders the link with the correct href', () => {
    const linkElement = screen.getByTestId('footer-link');
      expect(linkElement).toHaveAttribute('href', 'https://github.com/JsonLevine/jason-portfolio');
  });

  it('renders the link with the correct target and rel attributes', () => {
    const linkElement = screen.getByTestId('footer-link');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the correct text content', () => {
    const linkElement = screen.getByTestId('footer-link');
    expect(linkElement).toHaveTextContent('2024-2025 Designed and built byJason Levinewith React + TailwindCSS');
  });
});
