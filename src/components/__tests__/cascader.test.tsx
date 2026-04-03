import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cascader, type CascaderOption } from '../cascader';

describe('Cascader', () => {
  const mockOptions: CascaderOption[] = [
    {
      value: 'region1',
      label: 'Region 1',
      children: [
        {
          value: 'city1',
          label: 'City 1',
          children: [
            { value: 'district1', label: 'District 1' },
            { value: 'district2', label: 'District 2' },
          ],
        },
        { value: 'city2', label: 'City 2' },
      ],
    },
    {
      value: 'region2',
      label: 'Region 2',
      children: [
        { value: 'city3', label: 'City 3' },
      ],
    },
  ];

  it('renders cascader trigger', () => {
    render(<Cascader options={mockOptions} />);
    
    expect(screen.getByText('Please select')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<Cascader options={mockOptions} placeholder="Choose location" />);
    
    expect(screen.getByText('Choose location')).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<Cascader options={mockOptions} />);
    
    await user.click(screen.getByText('Please select'));
    
    expect(screen.getByText('Region 1')).toBeInTheDocument();
    expect(screen.getByText('Region 2')).toBeInTheDocument();
  });

  it('shows child options when parent is selected', async () => {
    const user = userEvent.setup();
    render(<Cascader options={mockOptions} />);
    
    await user.click(screen.getByText('Please select'));
    await user.click(screen.getByText('Region 1'));
    
    expect(screen.getByText('City 1')).toBeInTheDocument();
    expect(screen.getByText('City 2')).toBeInTheDocument();
  });

  it('calls onChange when full path is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Cascader options={mockOptions} onChange={handleChange} />);
    
    await user.click(screen.getByText('Please select'));
    await user.click(screen.getByText('Region 2'));
    await user.click(screen.getByText('City 3'));
    
    expect(handleChange).toHaveBeenCalledWith(
      ['region2', 'city3'],
      expect.any(Array),
    );
  });

  it('renders with default value', () => {
    render(
      <Cascader
        options={mockOptions}
        defaultValue={['region1', 'city1', 'district1']}
      />,
    );
    
    expect(screen.getByText('Region 1 / City 1 / District 1')).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    render(
      <Cascader
        options={mockOptions}
        value={['region2', 'city3']}
      />,
    );
    
    expect(screen.getByText('Region 2 / City 3')).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    render(<Cascader options={mockOptions} disabled />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('handles disabled options', async () => {
    const user = userEvent.setup();
    const optionsWithDisabled: CascaderOption[] = [
      { value: 'option1', label: 'Option 1', disabled: true },
      { value: 'option2', label: 'Option 2' },
    ];
    
    render(<Cascader options={optionsWithDisabled} />);
    
    await user.click(screen.getByText('Please select'));
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders with changeOnSelect enabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(
      <Cascader
        options={mockOptions}
        onChange={handleChange}
        changeOnSelect
      />,
    );
    
    await user.click(screen.getByText('Please select'));
    await user.click(screen.getByText('Region 1'));
    
    expect(handleChange).toHaveBeenCalledWith(['region1'], expect.any(Array));
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Cascader options={mockOptions} className="custom-cascader" />,
    );
    
    expect(container.querySelector('.custom-cascader')).toBeInTheDocument();
  });

  it('displays selected path with separator', () => {
    render(
      <Cascader
        options={mockOptions}
        value={['region1', 'city1']}
      />,
    );
    
    expect(screen.getByText('Region 1 / City 1')).toBeInTheDocument();
  });
});
