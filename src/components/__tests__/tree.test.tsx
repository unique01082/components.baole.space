import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tree, type TreeNode } from '../tree';

describe('Tree', () => {
  const mockData: TreeNode[] = [
    {
      key: '1',
      title: 'Parent 1',
      children: [
        { key: '1-1', title: 'Child 1-1' },
        { key: '1-2', title: 'Child 1-2' },
      ],
    },
    {
      key: '2',
      title: 'Parent 2',
      children: [
        { key: '2-1', title: 'Child 2-1' },
      ],
    },
  ];

  it('renders tree', () => {
    render(<Tree data={mockData} />);
    
    expect(screen.getByText('Parent 1')).toBeInTheDocument();
    expect(screen.getByText('Parent 2')).toBeInTheDocument();
  });

  it('expands tree nodes', async () => {
    const user = userEvent.setup();
    render(<Tree data={mockData} />);
    
    await user.click(screen.getByText('Parent 1'));
    
    expect(screen.getByText('Child 1-1')).toBeInTheDocument();
    expect(screen.getByText('Child 1-2')).toBeInTheDocument();
  });

  it('renders with default expanded keys', () => {
    render(<Tree data={mockData} defaultExpandedKeys={['1']} />);
    
    expect(screen.getByText('Child 1-1')).toBeInTheDocument();
  });

  it('calls onSelect when node is selected', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(<Tree data={mockData} onSelect={handleSelect} />);
    
    await user.click(screen.getByText('Parent 1'));
    
    expect(handleSelect).toHaveBeenCalled();
  });

  it('renders with checkboxes', () => {
    render(<Tree data={mockData} checkable />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  it('calls onCheck when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const handleCheck = vi.fn();
    
    render(<Tree data={mockData} checkable onCheck={handleCheck} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    
    expect(handleCheck).toHaveBeenCalled();
  });

  it('renders with icons', () => {
    const dataWithIcons: TreeNode[] = [
      { key: '1', title: 'Node', icon: <span>Icon</span> },
    ];
    
    render(<Tree data={dataWithIcons} />);
    
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Tree data={mockData} className="custom-tree" />,
    );
    
    expect(container.querySelector('.custom-tree')).toBeInTheDocument();
  });

  it('supports disabled nodes', () => {
    const dataWithDisabled: TreeNode[] = [
      { key: '1', title: 'Disabled', disabled: true },
    ];
    
    render(<Tree data={dataWithDisabled} />);
    
    expect(screen.getByText('Disabled')).toBeInTheDocument();
  });

  it('renders nested tree structure', async () => {
    const user = userEvent.setup();
    const nestedData: TreeNode[] = [
      {
        key: '1',
        title: 'Level 1',
        children: [
          {
            key: '1-1',
            title: 'Level 2',
            children: [
              { key: '1-1-1', title: 'Level 3' },
            ],
          },
        ],
      },
    ];
    
    render(<Tree data={nestedData} defaultExpandedKeys={['1', '1-1']} />);
    
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
    expect(screen.getByText('Level 3')).toBeInTheDocument();
  });
});
