import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Statistic } from '../statistic';

describe('Statistic', () => {
  it('renders statistic with title and value', () => {
    render(<Statistic title="Total Users" value={1250} />);
    
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('1250')).toBeInTheDocument();
  });

  it('renders with prefix', () => {
    render(<Statistic title="Revenue" value={5000} prefix="$" />);
    
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
  });

  it('renders with suffix', () => {
    render(<Statistic title="Growth" value={25} suffix="%" />);
    
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
  });

  it('renders with upward trend', () => {
    render(<Statistic title="Sales" value={1000} trend="up" trendValue={12} />);
    
    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  it('renders with downward trend', () => {
    render(<Statistic title="Errors" value={5} trend="down" trendValue={3} />);
    
    expect(screen.getByText('Errors')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders with string value', () => {
    render(<Statistic title="Status" value="Active" />);
    
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders with prefix and suffix', () => {
    render(
      <Statistic title="Price" value={99.99} prefix="$" suffix="USD" />,
    );
    
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('99.99')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('renders with custom value className', () => {
    render(
      <Statistic 
        title="Custom" 
        value={100} 
        valueClassName="text-red-500"
      />,
    );
    
    const value = screen.getByText('100');
    expect(value).toHaveClass('text-red-500');
  });

  it('renders with custom className', () => {
    render(
      <Statistic 
        title="Custom" 
        value={200} 
        className="custom-statistic"
      />,
    );
    
    const title = screen.getByText('Custom');
    const container = title.parentElement;
    expect(container).toHaveClass('custom-statistic');
  });

  it('renders complete statistic with all props', () => {
    render(
      <Statistic
        title="Total Revenue"
        value={45600}
        prefix="$"
        suffix="USD"
        trend="up"
        trendValue="15%"
      />,
    );
    
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('45600')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
  });
});
