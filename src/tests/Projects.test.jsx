import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from '../components/Projects';

describe('Projects Component', () => {
    beforeEach(() => {
        render(<Projects overrideProjects={mockProjects} />);
    });

    it('renders the section title', () => {
        const sectionTitle = screen.getByTestId('section-title');
        expect(sectionTitle).toBeInTheDocument();
        expect(sectionTitle).toHaveTextContent('Some of my Projects');
    });

    it('renders the section description', () => {
        const sectionDescription = screen.getByTestId('section-description');
        expect(sectionDescription).toBeInTheDocument();
        expect(sectionDescription).toHaveTextContent('With over five years of experience as a frontend developer');
    });

    it('renders all project titles', () => {
        mockProjects.forEach((project) => {
        const projectTitle = screen.getByTestId('project-title');
        expect(projectTitle).toHaveTextContent(project.title);
        });
    });

    it('renders all project subtitles', () => {
        mockProjects.forEach((project) => {
        const projectSubtitle = screen.getByTestId('project-subtitle');
        expect(projectSubtitle).toHaveTextContent(project.subtitle);
        });
    });

    it('renders all project descriptions', () => {
        mockProjects.forEach((project) => {
        const projectDescription = screen.getByTestId('project-description');
        expect(projectDescription).toHaveTextContent(project.description);
        });
    });

    it('renders links for each project', () => {
        mockProjects.forEach((project) => {
            const projectLink = screen.getByTestId('project-item');
            expect(projectLink).toHaveAttribute('href', project.link);
        });
    });

    it('renders GitHub icons for projects with code links', () => {
        mockProjects.forEach((project) => {
            if (project.code) {
            const githubLink = screen.getByTestId('github-link');
            expect(githubLink).toHaveAttribute('href', project.code);
            }
        });
    });

    const mockProjects = [
        {
          title: "mockTitle",
          subtitle: "mockSubtitle",
          description:
            "mockDescription",
          link: "mockLink",
          code: "mockCode", 
        },
      ];
});

