import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Space } from '../space';

describe('Space', () => {
  it('renders children', () => {
    render(
      <Space>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Space>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders with horizontal direction', () => {
    const { container } = render(
      <Space direction="horizontal">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );
    
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveClass('flex-row');
  });

  it('renders with vertical direction', () => {
    const { container } = render(
      <Space direction="vertical">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );
    
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveClass('flex-col');
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(
      <Space size="xs">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('gap-1');

    rerender(
      <Space size="sm">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('gap-2');

    rerender(
      <Space size="md">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('gap-4');

    rerender(
      <Space size="lg">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('gap-6');

    rerender(
      <Space size="xl">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('gap-8');
  });

  it('renders with different alignments', () => {
    const { container, rerender } = render(
      <Space align="start">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('items-start');

    rerender(
      <Space align="center">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('items-center');

    rerender(
      <Space align="end">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('items-end');

    rerender(
      <Space align="baseline">
        <div>Item</div>
      </Space>,
    );
    expect(container.firstChild).toHaveClass('items-baseline');
  });

  it('renders with wrap enabled', () => {
    const { container } = render(
      <Space wrap>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );
    
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveClass('flex-wrap');
  });

  it('renders with wrap disabled', () => {
    const { container } = render(
      <Space wrap={false}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );
    
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveClass('flex-nowrap');
  });

  it('renders with split element', () => {
    render(
      <Space split={<span>|</span>}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Space>,
    );
    
    const splits = screen.getAllByText('|');
    expect(splits).toHaveLength(2); // Between 3 items, there should be 2 splits
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Space className="custom-space">
        <div>Item</div>
      </Space>,
    );
    
    expect(container.firstChild).toHaveClass('custom-space');
  });

  it('filters out falsy children', () => {
    render(
      <Space>
        <div>Item 1</div>
        {false && <div>Hidden</div>}
        {null}
        <div>Item 2</div>
      </Space>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });
});
