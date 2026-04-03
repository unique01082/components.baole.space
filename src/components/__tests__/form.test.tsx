import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../form';
import { Input } from '../input';

describe('Form', () => {
  it('renders form', () => {
    render(
      <Form>
        <div>Form content</div>
      </Form>,
    );
    
    expect(screen.getByText('Form content')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(
      <Form>
        <FormField
          name="username"
          render={() => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>,
    );
    
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    
    render(
      <form onSubmit={handleSubmit}>
        <Input name="test" />
        <button type="submit">Submit</button>
      </form>,
    );
    
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('renders form validation messages', () => {
    render(
      <Form>
        <FormField
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" />
              </FormControl>
              <FormMessage>Invalid email</FormMessage>
            </FormItem>
          )}
        />
      </Form>,
    );
    
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('renders multiple form fields', () => {
    render(
      <Form>
        <FormField
          name="name"
          render={() => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>,
    );
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Form className="custom-form">
        <div>Content</div>
      </Form>,
    );
    
    expect(container.querySelector('.custom-form')).toBeInTheDocument();
  });
});
