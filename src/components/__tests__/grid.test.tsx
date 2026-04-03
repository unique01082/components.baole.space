import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid, GridItem } from '../grid';

describe('Grid', () => {
  it('renders grid with children', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders with different column counts', () => {
    const { container, rerender } = render(
      <Grid cols={1}>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('grid-cols-1');

    rerender(
      <Grid cols={2}>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('grid-cols-2');

    rerender(
      <Grid cols={3}>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('grid-cols-3');

    rerender(
      <Grid cols={4}>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('grid-cols-4');

    rerender(
      <Grid cols={12}>
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('grid-cols-12');
  });

  it('renders with different gap sizes', () => {
    const { container, rerender } = render(
      <Grid gap="none">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-0');

    rerender(
      <Grid gap="xs">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-1');

    rerender(
      <Grid gap="sm">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-2');

    rerender(
      <Grid gap="md">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-4');

    rerender(
      <Grid gap="lg">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-6');

    rerender(
      <Grid gap="xl">
        <div>Item</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass('gap-8');
  });

  it('renders with default values', () => {
    const { container } = render(
      <Grid>
        <div>Item</div>
      </Grid>,
    );
    
    expect(container.firstChild).toHaveClass('grid-cols-12');
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Grid className="custom-grid">
        <div>Item</div>
      </Grid>,
    );
    
    expect(container.firstChild).toHaveClass('custom-grid');
  });
});

describe('GridItem', () => {
  it('renders grid item', () => {
    render(
      <Grid>
        <GridItem>Item content</GridItem>
      </Grid>,
    );
    
    expect(screen.getByText('Item content')).toBeInTheDocument();
  });

  it('renders with different spans', () => {
    const { container, rerender } = render(
      <GridItem span={1}>Item</GridItem>,
    );
    expect(container.firstChild).toHaveClass('col-span-1');

    rerender(<GridItem span={2}>Item</GridItem>);
    expect(container.firstChild).toHaveClass('col-span-2');

    rerender(<GridItem span={6}>Item</GridItem>);
    expect(container.firstChild).toHaveClass('col-span-6');

    rerender(<GridItem span={12}>Item</GridItem>);
    expect(container.firstChild).toHaveClass('col-span-12');

    rerender(<GridItem span="full">Item</GridItem>);
    expect(container.firstChild).toHaveClass('col-span-full');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <GridItem className="custom-item">Item</GridItem>,
    );
    
    expect(container.firstChild).toHaveClass('custom-item');
  });
});
