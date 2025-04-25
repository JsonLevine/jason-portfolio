import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';


describe('Navbar Component', () => {
  it('renders the logo image with correct image path', () => {
    const { getByTestId } = render(<Navbar />);
    const logoImg = getByTestId('logo').querySelector('img');
    expect(logoImg).toHaveAttribute('src', '/assets/corner-logo.png');
  });

  it('toggles the logo image on click', () => {
    const { getByTestId } = render(<Navbar />);
    const logo = getByTestId('logo');
    const img = logo.querySelector('img');

    fireEvent.click(logo);
    expect(img).toHaveAttribute('src', '/assets/corner-logo-dark.png');

    fireEvent.click(logo);
    expect(img).toHaveAttribute('src', '/assets/corner-logo.png');
  });

  it('renders navigation links', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('projects-link')).toBeInTheDocument();
    expect(getByTestId('skills-link')).toBeInTheDocument();
  });

  it('renders resume button with correct href', () => {
    const { getByTestId } = render(<Navbar />);
    const resumeBtn = getByTestId('resume-button');
    expect(resumeBtn).toHaveAttribute('href', './assets/Jason_Levine_Resume_PM.pdf');
    expect(resumeBtn).toHaveTextContent('Resume');
  });

  it('calls scrollToSection on nav link click', () => {
    const scrollIntoViewMock = jest.fn();
    document.getElementById = jest.fn(() => ({
      scrollIntoView: scrollIntoViewMock
    }));

    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId('projects-link'));
    fireEvent.click(getByTestId('skills-link'));

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(2);
  });
});