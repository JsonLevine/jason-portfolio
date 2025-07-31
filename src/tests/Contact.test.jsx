import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the section with the correct id', () => {
    const sectionElement = screen.getByTestId('contact-section');
    expect(sectionElement).toBeInTheDocument();
  });

  it('renders the image with the correct src and alt text', () => {
    const imageElement = screen.getByAltText('Me playing pickleball at my own wedding');
    expect(imageElement).toHaveAttribute('src', '/assets/pickleball.png');
  });

  it('renders the title with the correct text', () => {
    const titleElement = screen.getByText(/Let's connect!/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the location information', () => {
    const locationElement = screen.getByText(/Boston, MA/i);
    expect(locationElement).toBeInTheDocument();
  });

  it('renders the phone number', () => {
    const phoneElement = screen.getByText(/\(774\) 249-5018/i);
    expect(phoneElement).toBeInTheDocument();
  });

  it('renders the LinkedIn link with the correct href', () => {
    const linkedinLink = screen.getByRole('link', { name: /LINKEDIN/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jasonllevine/');
  });

  it('renders the email address and copies it to clipboard on click', () => {
    const emailElement = screen.getByText(/jason.levine131@gmail.com/i);
    expect(emailElement).toBeInTheDocument();

    // Mock the clipboard API in order to test the copy functionality
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve())
      }
    });

    const emailContainer = screen.getByTestId('email-container');
    fireEvent.click(emailContainer);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('jason.levine131@gmail.com');
  });
});
