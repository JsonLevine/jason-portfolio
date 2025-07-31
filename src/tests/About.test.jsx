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
        const descriptionElement = screen.getByText(/Technical Product Manager/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('renders the minor description with the correct text', () => {
        const descriptionElement = screen.getByText(/Senior Software Engineer/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('renders the "Connect With Me" button', () => {
        const connectButton = screen.getByTestId('connect-with-me-button');
        expect(connectButton).toBeInTheDocument();
    });

    it('renders the hero image with the correct src and alt text', () => {
        const heroImage = screen.getByAltText(/Pixel graphic of me and my dog, Riley/i);
        expect(heroImage).toHaveAttribute('src', './assets/Website_portrait.png');
    });
});
