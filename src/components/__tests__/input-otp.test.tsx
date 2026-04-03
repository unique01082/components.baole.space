import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../input-otp';

describe('InputOTP', () => {
  it('renders OTP input with slots', () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    const slots = screen.getAllByRole('textbox');
    expect(slots).toHaveLength(1); // OTP input typically has one hidden input
  });

  it('allows entering digits', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <InputOTP maxLength={6} onChange={handleChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    const input = screen.getByRole('textbox');
    await user.type(input, '123456');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with default value', () => {
    render(
      <InputOTP maxLength={4} defaultValue="1234">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    expect(screen.getByRole('textbox')).toHaveValue('1234');
  });

  it('respects maxLength', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <InputOTP maxLength={4} onChange={handleChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    const input = screen.getByRole('textbox');
    await user.type(input, '123456789');
    
    // Value should be truncated to maxLength
    expect(input.getAttribute('value')?.length).toBeLessThanOrEqual(4);
  });

  it('renders disabled OTP input', () => {
    render(
      <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders multiple groups', () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>,
    );
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
