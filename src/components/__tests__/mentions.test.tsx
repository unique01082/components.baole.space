import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mentions, type MentionOption } from '../mentions';

describe('Mentions', () => {
  const mockOptions: MentionOption[] = [
    { value: 'user1', label: 'John Doe' },
    { value: 'user2', label: 'Jane Smith' },
    { value: 'user3', label: 'Bob Johnson' },
  ];

  it('renders textarea', () => {
    render(<Mentions options={mockOptions} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Mentions options={mockOptions} placeholder="Type @ to mention..." />);
    
    expect(screen.getByPlaceholderText('Type @ to mention...')).toBeInTheDocument();
  });

  it('triggers mention dropdown on @ character', async () => {
    const user = userEvent.setup();
    render(<Mentions options={mockOptions} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '@');
    
    // Dropdown should appear with options
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('filters options based on search', async () => {
    const user = userEvent.setup();
    render(<Mentions options={mockOptions} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '@jane');
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Mentions options={mockOptions} onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onSelect when mention is selected', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(<Mentions options={mockOptions} onSelect={handleSelect} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '@');
    await user.click(screen.getByText('John Doe'));
    
    expect(handleSelect).toHaveBeenCalledWith(mockOptions[0]);
  });

  it('renders with custom prefix', async () => {
    const user = userEvent.setup();
    render(<Mentions options={mockOptions} prefix="#" />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '#');
    
    // Should trigger dropdown with # prefix
  });

  it('renders with default value', () => {
    render(<Mentions options={mockOptions} defaultValue="Hello @user" />);
    
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Hello @user');
  });

  it('renders with controlled value', () => {
    render(<Mentions options={mockOptions} value="Test message" />);
    
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Test message');
  });

  it('renders in disabled state', () => {
    render(<Mentions options={mockOptions} disabled />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('renders with custom rows', () => {
    render(<Mentions options={mockOptions} rows={5} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('renders with custom className', () => {
    render(<Mentions options={mockOptions} className="custom-mentions" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea.className).toContain('custom-mentions');
  });
});
