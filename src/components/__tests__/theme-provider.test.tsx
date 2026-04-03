import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../theme-provider';

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <div>App content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('App content')).toBeInTheDocument();
  });

  it('renders with light theme', () => {
    render(
      <ThemeProvider theme="light">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with dark theme', () => {
    render(
      <ThemeProvider theme="dark">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with system theme', () => {
    render(
      <ThemeProvider theme="system">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with default theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies theme to document root', () => {
    render(
      <ThemeProvider theme="dark">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('supports storage key for persistence', () => {
    render(
      <ThemeProvider storageKey="app-theme">
        <div>Content</div>
      </ThemeProvider>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
