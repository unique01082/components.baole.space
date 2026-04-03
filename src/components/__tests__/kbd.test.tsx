import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kbd } from '../kbd';

describe('Kbd', () => {
  it('renders keyboard key', () => {
    render(<Kbd>Ctrl</Kbd>);
    
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Kbd size="sm">A</Kbd>);
    expect(screen.getByText('A')).toHaveClass('h-5');
    
    rerender(<Kbd size="md">B</Kbd>);
    expect(screen.getByText('B')).toHaveClass('h-6');
    
    rerender(<Kbd size="lg">C</Kbd>);
    expect(screen.getByText('C')).toHaveClass('h-7');
  });

  it('renders with default size', () => {
    render(<Kbd>Enter</Kbd>);
    
    expect(screen.getByText('Enter')).toHaveClass('h-6');
  });

  it('renders single character keys', () => {
    render(
      <>
        <Kbd>A</Kbd>
        <Kbd>1</Kbd>
        <Kbd>?</Kbd>
      </>,
    );
    
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('renders multi-character keys', () => {
    render(
      <>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Space</Kbd>
      </>,
    );
    
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
    expect(screen.getByText('Shift')).toBeInTheDocument();
    expect(screen.getByText('Alt')).toBeInTheDocument();
    expect(screen.getByText('Enter')).toBeInTheDocument();
    expect(screen.getByText('Space')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Kbd className="custom-kbd">Tab</Kbd>);
    
    expect(screen.getByText('Tab')).toHaveClass('custom-kbd');
  });

  it('renders keyboard shortcut combination', () => {
    render(
      <div>
        <Kbd>Ctrl</Kbd>
        <span> + </span>
        <Kbd>C</Kbd>
      </div>,
    );
    
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('has proper semantic element', () => {
    render(<Kbd>Esc</Kbd>);
    
    const kbd = screen.getByText('Esc');
    expect(kbd.tagName).toBe('KBD');
  });
});
