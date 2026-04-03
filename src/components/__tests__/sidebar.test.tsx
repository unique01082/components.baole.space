import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from '../sidebar';

describe('Sidebar', () => {
  it('renders sidebar with children', () => {
    render(
      <Sidebar>
        <div>Sidebar content</div>
      </Sidebar>,
    );
    
    expect(screen.getByText('Sidebar content')).toBeInTheDocument();
  });

  it('renders with default width', () => {
    const { container } = render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle({ width: '256px' });
  });

  it('renders with custom width', () => {
    const { container } = render(
      <Sidebar width={300}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle({ width: '300px' });
  });

  it('renders collapsible sidebar', () => {
    render(
      <Sidebar collapsible>
        <div>Content</div>
      </Sidebar>,
    );
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles collapsed state when button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Sidebar collapsible>
        <div>Content</div>
      </Sidebar>,
    );
    
    const toggleButton = screen.getByRole('button');
    const sidebar = container.querySelector('aside');
    
    expect(sidebar).toHaveStyle({ width: '256px' });
    
    await user.click(toggleButton);
    
    expect(sidebar).toHaveStyle({ width: '64px' });
  });

  it('renders with defaultCollapsed', () => {
    const { container } = render(
      <Sidebar collapsible defaultCollapsed>
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle({ width: '64px' });
  });

  it('renders with controlled collapsed state', () => {
    const { container } = render(
      <Sidebar collapsible collapsed={true}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle({ width: '64px' });
  });

  it('calls onCollapsedChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(
      <Sidebar collapsible onCollapsedChange={handleChange}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const toggleButton = screen.getByRole('button');
    await user.click(toggleButton);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders with custom collapsedWidth', () => {
    const { container } = render(
      <Sidebar collapsible defaultCollapsed collapsedWidth={80}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle({ width: '80px' });
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Sidebar className="custom-sidebar">
        <div>Content</div>
      </Sidebar>,
    );
    
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('custom-sidebar');
  });

  it('shows collapse icon when expanded', () => {
    render(
      <Sidebar collapsible collapsed={false}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('shows expand icon when collapsed', () => {
    render(
      <Sidebar collapsible collapsed={true}>
        <div>Content</div>
      </Sidebar>,
    );
    
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
