import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../components/About';

describe('About Component', () => {
    beforeEach(() => {
        render(<About />);
    });

    it('renders the section with the correct id', () => {
        const sectionElement = screen.getByTestId('about-section');
        expect(sectionElement).toBeInTheDocument();
    });

    it('renders the title with the correct text', () => {
        const titleElement = screen.getByText(/Jason Levine/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders the description with the correct text', () => {
        const descriptionElement = screen.getByText(/Frontend Software Engineer/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('renders the resume link with the correct href', () => {
        const resumeLink = screen.getByRole('link', { name: /Resume/i });
        expect(resumeLink).toHaveAttribute('href', './assets/Jason_Levine_Resume.pdf');
    });

    it('renders the CV link with the correct href', () => {
        const cvLink = screen.getByRole('link', { name: /CV/i });
        expect(cvLink).toHaveAttribute('href', './assets/Jason_Levine_CV.pdf');
    });

    it('renders the "Connect With Me" button', () => {
        const connectButton = screen.getByRole('link', { name: /Connect With Me/i });
        expect(connectButton).toBeInTheDocument();
    });

    it('renders the hero image with the correct src and alt text', () => {
        const heroImage = screen.getByAltText(/hero/i);
        expect(heroImage).toHaveAttribute('src', './Coding-Riley.svg');
    });
});
