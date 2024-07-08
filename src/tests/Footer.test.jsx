import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer with the correct link', () => {
    const linkElement = screen.getByRole('link', { name: /2024 designed and built by/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the link with the correct href', () => {
    const linkElement = screen.getByRole('link', { name: /2024 designed and built by/i });
    expect(linkElement).toHaveAttribute('href', 'https://github.com/JsonLevine/jason-portfolio');
  });

  it('renders the link with the correct target and rel attributes', () => {
    const linkElement = screen.getByRole('link', { name: /2024 designed and built by/i });
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the correct text content', () => {
    const linkElement = screen.getByRole('link', { name: /2024 designed and built by/i });
    expect(linkElement).toHaveTextContent('2024 Designed and built byJason Levinewith React + TailwindCSS');
  });
});
