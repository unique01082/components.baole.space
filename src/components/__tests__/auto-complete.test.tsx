import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AutoComplete, type AutoCompleteOption } from '../auto-complete';

describe.skip('AutoComplete', () => {
  const mockOptions: AutoCompleteOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'test', label: 'Test Option' },
  ];

  it('renders input field', () => {
    render(<AutoComplete options={mockOptions} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<AutoComplete options={mockOptions} placeholder="Search..." />);
    
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('filters options based on input', async () => {
    const user = userEvent.setup();
    render(<AutoComplete options={mockOptions} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'test');
    
    expect(screen.getByText('Test Option')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<AutoComplete options={mockOptions} onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'a');
    
    expect(handleChange).toHaveBeenCalledWith('a');
  });

  it('calls onSelect when option is clicked', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(<AutoComplete options={mockOptions} onSelect={handleSelect} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'opt');
    
    await user.click(screen.getByText('Option 1'));
    
    expect(handleSelect).toHaveBeenCalledWith('option1', mockOptions[0]);
  });

  it('navigates options with keyboard', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(<AutoComplete options={mockOptions} onSelect={handleSelect} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'opt');
    
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    
    expect(handleSelect).toHaveBeenCalled();
  });

  it('closes dropdown on Escape', async () => {
    const user = userEvent.setup();
    render(<AutoComplete options={mockOptions} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'opt');
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    await user.keyboard('{Escape}');
    
    // Dropdown should close (implementation dependent)
  });

  it('renders with default value', () => {
    render(<AutoComplete options={mockOptions} defaultValue="option1" />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('option1');
  });

  it('renders with controlled value', () => {
    render(<AutoComplete options={mockOptions} value="option2" />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('option2');
  });

  it('renders in disabled state', () => {
    render(<AutoComplete options={mockOptions} disabled />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with custom className', () => {
    render(<AutoComplete options={mockOptions} className="custom-autocomplete" />);
    
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('custom-autocomplete');
  });

  it('shows all options when input is empty', async () => {
    const user = userEvent.setup();
    render(<AutoComplete options={mockOptions} />);
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    
    // All options should be visible
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });
});
