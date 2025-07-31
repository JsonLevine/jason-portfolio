import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../components/Sidebar';

// Mock the icons
jest.mock('../components/icons/github', () => () => <div data-testid="github-icon">GitHub Icon</div>);
jest.mock('../components/icons/instagram', () => () => <div data-testid="instagram-icon">Instagram Icon</div>);
jest.mock('../components/icons/linkedin', () => () => <div data-testid="linkedin-icon">LinkedIn Icon</div>);

describe('Sidebar Component', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  it('renders GitHub links with correct URLs', () => {
    const githubLinks = screen.getAllByRole('link', { name: /GitHub/i });
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://github.com/JsonLevine');
    });
  });

  it('renders LinkedIn links with correct URLs', () => {
    const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/i });
    linkedinLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/jasonllevine/');
    });
  });

  it('renders Instagram links with correct URLs', () => {
    const instagramLinks = screen.getAllByRole('link', { name: /Instagram/i });
    instagramLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.instagram.com/adjacent_levine/');
    });
  });

  it('renders email link with correct URL', () => {
    const emailLink = screen.getByRole('link', { name: /Open a new email to Jason Levine/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:jason.levine131@gmail.com');
  });
});
