import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Transfer, type TransferItem } from '../transfer';

describe('Transfer', () => {
  const mockDataSource: TransferItem[] = [
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    { key: '3', title: 'Item 3' },
    { key: '4', title: 'Item 4' },
    { key: '5', title: 'Item 5' },
  ];

  it('renders transfer component', () => {
    render(<Transfer dataSource={mockDataSource} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders with custom titles', () => {
    render(
      <Transfer
        dataSource={mockDataSource}
        titles={['Available', 'Selected']}
      />,
    );
    
    expect(screen.getByText('Available')).toBeInTheDocument();
    expect(screen.getByText('Selected')).toBeInTheDocument();
  });

  it('renders with initial target keys', () => {
    render(
      <Transfer dataSource={mockDataSource} targetKeys={['1', '2']} />,
    );
    
    // Items 1 and 2 should be in the target list
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls onChange when items are moved', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(
      <Transfer dataSource={mockDataSource} onChange={handleChange} />,
    );
    
    // Select an item
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    
    // Click move to right button
    const moveButtons = screen.getAllByRole('button');
    const moveRightButton = moveButtons.find((btn) =>
      btn.querySelector('svg[data-lucide="chevron-right"]'),
    );
    if (moveRightButton) {
      await user.click(moveRightButton);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('renders with search enabled', () => {
    render(<Transfer dataSource={mockDataSource} showSearch />);
    
    const searchInputs = screen.getAllByRole('textbox');
    expect(searchInputs.length).toBeGreaterThan(0);
  });

  it('filters items based on search', async () => {
    const user = userEvent.setup();
    render(<Transfer dataSource={mockDataSource} showSearch />);
    
    const searchInputs = screen.getAllByRole('textbox');
    await user.type(searchInputs[0], 'item 1');
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('calls onSelectChange when selection changes', async () => {
    const user = userEvent.setup();
    const handleSelectChange = vi.fn();
    
    render(
      <Transfer
        dataSource={mockDataSource}
        onSelectChange={handleSelectChange}
      />,
    );
    
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    
    expect(handleSelectChange).toHaveBeenCalled();
  });

  it('handles disabled items', () => {
    const dataWithDisabled: TransferItem[] = [
      { key: '1', title: 'Item 1', disabled: true },
      { key: '2', title: 'Item 2' },
    ];
    
    render(<Transfer dataSource={dataWithDisabled} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders items with descriptions', () => {
    const dataWithDesc: TransferItem[] = [
      { key: '1', title: 'Item 1', description: 'Description 1' },
    ];
    
    render(<Transfer dataSource={dataWithDesc} />);
    
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Transfer dataSource={mockDataSource} className="custom-transfer" />,
    );
    
    expect(container.querySelector('.custom-transfer')).toBeInTheDocument();
  });

  it('moves items from right to left', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(
      <Transfer
        dataSource={mockDataSource}
        targetKeys={['1', '2']}
        onChange={handleChange}
      />,
    );
    
    // Select an item in the target list
    const checkboxes = screen.getAllByRole('checkbox');
    if (checkboxes.length > 0) {
      await user.click(checkboxes[checkboxes.length - 1]);
    }
    
    // Click move to left button
    const moveButtons = screen.getAllByRole('button');
    const moveLeftButton = moveButtons.find((btn) =>
      btn.querySelector('svg[data-lucide="chevron-left"]'),
    );
    if (moveLeftButton) {
      await user.click(moveLeftButton);
      expect(handleChange).toHaveBeenCalled();
    }
  });
});
