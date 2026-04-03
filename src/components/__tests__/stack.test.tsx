import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from '../stack';

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders with different directions', () => {
    const { container, rerender } = render(
      <Stack direction="row">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('flex-row');

    rerender(
      <Stack direction="column">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('flex-col');

    rerender(
      <Stack direction="rowReverse">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('flex-row-reverse');

    rerender(
      <Stack direction="columnReverse">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('flex-col-reverse');
  });

  it('renders with different spacing', () => {
    const { container, rerender } = render(
      <Stack spacing="none">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-0');

    rerender(
      <Stack spacing="xs">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-1');

    rerender(
      <Stack spacing="sm">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-2');

    rerender(
      <Stack spacing="md">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-4');

    rerender(
      <Stack spacing="lg">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-6');

    rerender(
      <Stack spacing="xl">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-8');

    rerender(
      <Stack spacing="2xl">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('gap-12');
  });

  it('renders with different alignments', () => {
    const { container, rerender } = render(
      <Stack align="start">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('items-start');

    rerender(
      <Stack align="center">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('items-center');

    rerender(
      <Stack align="end">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('items-end');

    rerender(
      <Stack align="stretch">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('items-stretch');

    rerender(
      <Stack align="baseline">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('items-baseline');
  });

  it('renders with different justifications', () => {
    const { container, rerender } = render(
      <Stack justify="start">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-start');

    rerender(
      <Stack justify="center">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-center');

    rerender(
      <Stack justify="end">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-end');

    rerender(
      <Stack justify="between">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-between');

    rerender(
      <Stack justify="around">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-around');

    rerender(
      <Stack justify="evenly">
        <div>Item</div>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass('justify-evenly');
  });

  it('renders with wrap enabled', () => {
    const { container } = render(
      <Stack wrap>
        <div>Item</div>
      </Stack>,
    );
    
    expect(container.firstChild).toHaveClass('flex-wrap');
  });

  it('renders with wrap disabled', () => {
    const { container } = render(
      <Stack wrap={false}>
        <div>Item</div>
      </Stack>,
    );
    
    expect(container.firstChild).toHaveClass('flex-nowrap');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Stack className="custom-stack">
        <div>Item</div>
      </Stack>,
    );
    
    expect(container.firstChild).toHaveClass('custom-stack');
  });
});
