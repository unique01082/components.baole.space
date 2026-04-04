import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TreeSelect, type TreeNode } from '../tree-select';

describe.skip('TreeSelect', () => {
  const mockData: TreeNode[] = [
    {
      value: '1',
      label: 'Parent 1',
      children: [
        { value: '1-1', label: 'Child 1-1' },
        { value: '1-2', label: 'Child 1-2' },
      ],
    },
    {
      value: '2',
      label: 'Parent 2',
      children: [
        { value: '2-1', label: 'Child 2-1' },
      ],
    },
  ];

  it('renders tree select', () => {
    render(<TreeSelect data={mockData} />);
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<TreeSelect data={mockData} />);
    
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    
    expect(screen.getByText('Parent 1')).toBeInTheDocument();
    expect(screen.getByText('Parent 2')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<TreeSelect data={mockData} placeholder="Select item" />);
    
    expect(screen.getByText('Select item')).toBeInTheDocument();
  });

  it('calls onChange when item is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<TreeSelect data={mockData} onChange={handleChange} />);
    
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    await user.click(screen.getByText('Parent 1'));
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with default value', () => {
    render(<TreeSelect data={mockData} defaultValue="1" />);
    
    expect(screen.getByText('Parent 1')).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    render(<TreeSelect data={mockData} value="2" />);
    
    expect(screen.getByText('Parent 2')).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    render(<TreeSelect data={mockData} disabled />);
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();
    render(<TreeSelect data={mockData} multiple />);
    
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    
    expect(screen.getByText('Parent 1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<TreeSelect data={mockData} className="custom-treeselect" />);
    
    const trigger = screen.getByRole('combobox');
    expect(trigger.className).toContain('custom-treeselect');
  });

  it('renders with search functionality', async () => {
    const user = userEvent.setup();
    render(<TreeSelect data={mockData} showSearch />);
    
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters nodes based on search', async () => {
    const user = userEvent.setup();
    render(<TreeSelect data={mockData} showSearch />);
    
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, 'Child 1-1');
    
    expect(screen.getByText('Child 1-1')).toBeInTheDocument();
  });
});
