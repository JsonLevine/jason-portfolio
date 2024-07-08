import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders the logo with the correct text', () => {
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveTextContent('Jason Levine');
  });

  it('renders the Projects link', () => {
    const projectsLink = screen.getByTestId('projects-link');
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });

  it('renders the Skills link', () => {
    const skillsLink = screen.getByTestId('skills-link');
    expect(skillsLink).toBeInTheDocument();
    expect(skillsLink).toHaveAttribute('href', '#skills');
  });

  it('renders the Resume button with the correct attributes', () => {
    const resumeButton = screen.getByTestId('resume-button');
    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton).toHaveAttribute('href', './assets/Jason_Levine_Resume.pdf');
    expect(resumeButton).toHaveAttribute('target', '_blank');
  });

  it('renders the Hire Me button with the correct attributes', () => {
    const hireMeButton = screen.getByTestId('hire-me-button');
    expect(hireMeButton).toBeInTheDocument();
    expect(hireMeButton).toHaveAttribute('href', '#contact');
  });
});
