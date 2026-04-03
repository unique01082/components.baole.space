import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Chart } from '../chart';

describe('Chart', () => {
  const mockData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
  ];

  it('renders chart', () => {
    const { container } = render(<Chart data={mockData} type="line" />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders line chart', () => {
    const { container } = render(<Chart data={mockData} type="line" />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders bar chart', () => {
    const { container } = render(<Chart data={mockData} type="bar" />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders area chart', () => {
    const { container } = render(<Chart data={mockData} type="area" />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders pie chart', () => {
    const { container } = render(<Chart data={mockData} type="pie" />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with custom width and height', () => {
    const { container } = render(
      <Chart data={mockData} type="line" width={500} height={300} />,
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Chart data={mockData} type="line" className="custom-chart" />,
    );
    
    expect(container.firstChild).toHaveClass('custom-chart');
  });

  it('renders with data keys', () => {
    render(<Chart data={mockData} type="line" dataKey="value" />);
    
    // Chart should render with specified data key
  });

  it('renders with x and y axes', () => {
    const { container } = render(<Chart data={mockData} type="line" />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with grid', () => {
    const { container } = render(
      <Chart data={mockData} type="line" showGrid />,
    );
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
