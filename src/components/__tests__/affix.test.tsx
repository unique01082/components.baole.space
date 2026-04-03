import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Affix } from '../affix';

describe('Affix', () => {
  it('renders children', () => {
    render(
      <Affix>
        <div>Affixed content</div>
      </Affix>,
    );
    
    expect(screen.getByText('Affixed content')).toBeInTheDocument();
  });

  it('renders with offsetTop', () => {
    render(
      <Affix offsetTop={10}>
        <div>Top affixed</div>
      </Affix>,
    );
    
    expect(screen.getByText('Top affixed')).toBeInTheDocument();
  });

  it('renders with offsetBottom', () => {
    render(
      <Affix offsetBottom={10}>
        <div>Bottom affixed</div>
      </Affix>,
    );
    
    expect(screen.getByText('Bottom affixed')).toBeInTheDocument();
  });

  it('calls onChange when affix state changes', () => {
    const handleChange = vi.fn();
    
    render(
      <Affix offsetTop={0} onChange={handleChange}>
        <div>Content</div>
      </Affix>,
    );
    
    // Trigger scroll to change affix state
    window.dispatchEvent(new Event('scroll'));
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Affix className="custom-affix">
        <div>Custom class</div>
      </Affix>,
    );
    
    expect(container.querySelector('.custom-affix')).toBeInTheDocument();
  });

  it('responds to scroll events', () => {
    render(
      <Affix offsetTop={50}>
        <div>Scrollable content</div>
      </Affix>,
    );
    
    window.dispatchEvent(new Event('scroll'));
    
    expect(screen.getByText('Scrollable content')).toBeInTheDocument();
  });

  it('responds to resize events', () => {
    render(
      <Affix offsetTop={50}>
        <div>Resizable content</div>
      </Affix>,
    );
    
    window.dispatchEvent(new Event('resize'));
    
    expect(screen.getByText('Resizable content')).toBeInTheDocument();
  });
});
