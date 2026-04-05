import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Input } from '../input';

describe('Form', () => {
  it('renders form provider children', () => {
    function Demo() {
      const form = useForm();
      return (
        <Form {...form}>
          <div>Form content</div>
        </Form>
      );
    }

    render(<Demo />);

    expect(screen.getByText('Form content')).toBeInTheDocument();
  });

  it('renders form fields with control', () => {
    function Demo() {
      const form = useForm<{ username: string }>({
        defaultValues: { username: '' },
      });

      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      );
    }

    render(<Demo />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    function Demo() {
      const form = useForm<{ test: string }>({ defaultValues: { test: '' } });

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <button type="submit">Submit</button>
          </form>
        </Form>
      );
    }

    render(<Demo />);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('renders form message content', () => {
    function Demo() {
      const form = useForm<{ email: string }>({ defaultValues: { email: '' } });

      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage>Invalid email</FormMessage>
                </FormItem>
              )}
            />
          </form>
        </Form>
      );
    }

    render(<Demo />);

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('renders multiple form fields', () => {
    function Demo() {
      const form = useForm<{ name: string; email: string }>({
        defaultValues: { name: '', email: '' },
      });

      return (
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      );
    }

    render(<Demo />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('supports custom className on form element', () => {
    function Demo() {
      const form = useForm();

      return (
        <Form {...form}>
          <form className="custom-form">
            <div>Content</div>
          </form>
        </Form>
      );
    }

    const { container } = render(<Demo />);

    expect(container.querySelector('.custom-form')).toBeInTheDocument();
  });
});
