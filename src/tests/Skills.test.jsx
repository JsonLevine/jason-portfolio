import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from '../components/Skills';
import { skills, softskills } from '../data';

// Mock the useInView hook
jest.mock('framer-motion', () => ({
  useInView: () => true,
}));

// Mock the icons
jest.mock('@heroicons/react/24/solid', () => ({
  CpuChipIcon: () => <div data-testid="cpu-chip-icon">CpuChipIcon</div>,
  WrenchScrewdriverIcon: () => <div data-testid="wrench-screwdriver-icon">WrenchScrewdriverIcon</div>,
  ClipboardDocumentCheckIcon: () => <div data-testid="clipboard-document-check-icon">ClipboardDocumentCheckIcon</div>,
}));

describe('Skills Component', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('renders the title correctly', () => {
    const title = screen.getByText('Skills & Technologies');
    expect(title).toBeInTheDocument();
  });

  it('renders the correct number of technical skills', () => {
    const techSkills = screen.getAllByTestId('cpu-chip-icon');
    expect(techSkills.length).toBe(skills.length);
  });

  it('renders the correct number of soft skills', () => {
    const softSkills = screen.getAllByTestId('clipboard-document-check-icon');
    expect(softSkills.length).toBe(softskills.length);
  });

  it('renders technical skills with correct text', () => {
    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders soft skills with correct text', () => {
    softskills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
