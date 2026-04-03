import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from '../radio-group';

describe('RadioGroup', () => {
  it('renders radio group', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" label="Option 1" />
        <RadioGroupItem value="option2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('selects a radio option', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" label="Option 1" />
        <RadioGroupItem value="option2" label="Option 2" />
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText('Option 1');
    await user.click(radio1);
    
    expect(radio1).toBeChecked();
  });

  it('renders with default value', () => {
    render(
      <RadioGroup defaultValue="option2">
        <RadioGroupItem value="option1" label="Option 1" />
        <RadioGroupItem value="option2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 2')).toBeChecked();
    expect(screen.getByLabelText('Option 1')).not.toBeChecked();
  });

  it('renders with description', () => {
    render(
      <RadioGroup>
        <RadioGroupItem 
          value="option1" 
          label="Option 1" 
          description="This is a description" 
        />
      </RadioGroup>,
    );

    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders disabled radio items', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" label="Option 1" disabled />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeDisabled();
  });

  it('only one option can be selected at a time', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" label="Option 1" />
        <RadioGroupItem value="option2" label="Option 2" />
      </RadioGroup>,
    );

    const radio1 = screen.getByLabelText('Option 1');
    const radio2 = screen.getByLabelText('Option 2');

    await user.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });
});
