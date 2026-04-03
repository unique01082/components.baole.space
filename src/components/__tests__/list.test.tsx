import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { List, type ListItem } from '../list';

describe('List', () => {
  const mockItems: ListItem[] = [
    {
      id: '1',
      title: 'Item 1',
      description: 'Description 1',
    },
    {
      id: '2',
      title: 'Item 2',
      description: 'Description 2',
    },
    {
      id: '3',
      title: 'Item 3',
      description: 'Description 3',
    },
  ];

  it('renders list items', () => {
    render(<List items={mockItems} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    render(<List items={mockItems} />);
    
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Description 3')).toBeInTheDocument();
  });

  it('renders with bordered style', () => {
    const { container } = render(<List items={mockItems} bordered />);
    
    expect(container.firstChild).toHaveClass('border');
  });

  it('renders with hoverable enabled', () => {
    const { container } = render(<List items={mockItems} hoverable />);
    
    const firstItem = container.querySelector('[class*="hover:"]');
    expect(firstItem).toBeInTheDocument();
  });

  it('renders with hoverable disabled', () => {
    render(<List items={mockItems} hoverable={false} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('calls onItemClick when item is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<List items={mockItems} onItemClick={handleClick} />);
    
    await user.click(screen.getByText('Item 1'));
    
    expect(handleClick).toHaveBeenCalledWith(mockItems[0]);
  });

  it('renders items with avatars', () => {
    const itemsWithAvatar: ListItem[] = [
      { id: '1', title: 'Item 1', avatar: <div>Avatar</div> },
    ];
    
    render(<List items={itemsWithAvatar} />);
    
    expect(screen.getByText('Avatar')).toBeInTheDocument();
  });

  it('renders items with extra content', () => {
    const itemsWithExtra: ListItem[] = [
      { id: '1', title: 'Item 1', extra: <span>Extra</span> },
    ];
    
    render(<List items={itemsWithExtra} />);
    
    expect(screen.getByText('Extra')).toBeInTheDocument();
  });

  it('renders items with actions', () => {
    const itemsWithActions: ListItem[] = [
      { id: '1', title: 'Item 1', actions: <button>Action</button> },
    ];
    
    render(<List items={itemsWithActions} />);
    
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders with divided style', () => {
    const { container } = render(<List items={mockItems} divided />);
    
    const dividedItem = container.querySelector('[class*="border-b"]');
    expect(dividedItem).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <List items={mockItems} className="custom-list" />,
    );
    
    expect(container.firstChild).toHaveClass('custom-list');
  });

  it('renders with custom item className', () => {
    const { container } = render(
      <List items={mockItems} itemClassName="custom-item" />,
    );
    
    const item = container.querySelector('.custom-item');
    expect(item).toBeInTheDocument();
  });
});
