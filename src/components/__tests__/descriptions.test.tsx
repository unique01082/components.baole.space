import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Descriptions, type DescriptionItem } from '../descriptions';

describe('Descriptions', () => {
  const mockItems: DescriptionItem[] = [
    { label: 'Name', content: 'John Doe' },
    { label: 'Email', content: 'john@example.com' },
    { label: 'Phone', content: '+1234567890' },
    { label: 'Address', content: '123 Main St, City, Country' },
  ];

  it('renders description items', () => {
    render(<Descriptions items={mockItems} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Descriptions items={mockItems} title="User Information" />);
    
    expect(screen.getByText('User Information')).toBeInTheDocument();
  });

  it('renders with different column counts', () => {
    const { container, rerender } = render(
      <Descriptions items={mockItems} columns={1} />,
    );
    expect(container.querySelector('.grid-cols-1')).toBeInTheDocument();

    rerender(<Descriptions items={mockItems} columns={2} />);
    expect(container.querySelector('.grid-cols-2')).toBeInTheDocument();

    rerender(<Descriptions items={mockItems} columns={3} />);
    expect(container.querySelector('.grid-cols-3')).toBeInTheDocument();

    rerender(<Descriptions items={mockItems} columns={4} />);
    expect(container.querySelector('.grid-cols-4')).toBeInTheDocument();
  });

  it('renders with bordered style', () => {
    const { container } = render(
      <Descriptions items={mockItems} bordered />,
    );
    
    expect(container.querySelector('.border')).toBeInTheDocument();
  });

  it('renders with horizontal layout', () => {
    const { container } = render(
      <Descriptions items={mockItems} layout="horizontal" bordered />,
    );
    
    expect(container.querySelector('.grid-cols-\\[200px_1fr\\]')).toBeInTheDocument();
  });

  it('renders with vertical layout', () => {
    const { container } = render(
      <Descriptions items={mockItems} layout="vertical" bordered />,
    );
    
    expect(container.querySelector('.grid-cols-1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Descriptions items={mockItems} className="custom-descriptions" />,
    );
    
    expect(container.firstChild).toHaveClass('custom-descriptions');
  });

  it('renders items with span', () => {
    const itemsWithSpan: DescriptionItem[] = [
      { label: 'Name', content: 'John Doe', span: 2 },
      { label: 'Email', content: 'john@example.com' },
    ];
    
    render(<Descriptions items={itemsWithSpan} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders without title', () => {
    render(<Descriptions items={mockItems} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders default 3 columns', () => {
    const { container } = render(<Descriptions items={mockItems} />);
    
    expect(container.querySelector('.grid-cols-3')).toBeInTheDocument();
  });
});
