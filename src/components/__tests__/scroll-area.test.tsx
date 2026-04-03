import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollArea } from '../scroll-area';

describe('ScrollArea', () => {
  it('renders scroll area with content', () => {
    render(
      <ScrollArea>
        <div>Scrollable content</div>
      </ScrollArea>,
    );
    
    expect(screen.getByText('Scrollable content')).toBeInTheDocument();
  });

  it('renders long content that requires scrolling', () => {
    const longContent = Array.from({ length: 100 }, (_, i) => (
      <div key={i}>Item {i}</div>
    ));
    
    render(<ScrollArea>{longContent}</ScrollArea>);
    
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 50')).toBeInTheDocument();
    expect(screen.getByText('Item 99')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <ScrollArea className="custom-scroll">
        <div>Content</div>
      </ScrollArea>,
    );
    
    expect(container.querySelector('.custom-scroll')).toBeInTheDocument();
  });

  it('renders with custom height', () => {
    render(
      <ScrollArea className="h-[200px]">
        <div>Content with fixed height</div>
      </ScrollArea>,
    );
    
    expect(screen.getByText('Content with fixed height')).toBeInTheDocument();
  });

  it('renders with custom width', () => {
    render(
      <ScrollArea className="w-[300px]">
        <div>Content with fixed width</div>
      </ScrollArea>,
    );
    
    expect(screen.getByText('Content with fixed width')).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <ScrollArea>
        <div>First item</div>
        <div>Second item</div>
        <div>Third item</div>
      </ScrollArea>,
    );
    
    expect(screen.getByText('First item')).toBeInTheDocument();
    expect(screen.getByText('Second item')).toBeInTheDocument();
    expect(screen.getByText('Third item')).toBeInTheDocument();
  });

  it('renders with complex content structure', () => {
    render(
      <ScrollArea>
        <div>
          <h2>Title</h2>
          <p>Description</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </ScrollArea>,
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
