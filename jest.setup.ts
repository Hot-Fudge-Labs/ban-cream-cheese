import '@testing-library/jest-dom';
import React from 'react';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return React.createElement('img', props);
  },
}));

// Mock Next.js font
jest.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'Inter, sans-serif',
    },
    variable: '--font-inter',
  }),
}));

// Mock window.scrollTo
global.scrollTo = jest.fn();

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;
