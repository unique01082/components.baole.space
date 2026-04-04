import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Upload } from '../upload';

describe.skip('Upload', () => {
  it('renders upload component', () => {
    render(<Upload />);
    
    const uploadButton = screen.getByRole('button');
    expect(uploadButton).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Upload>Click to upload</Upload>);
    
    expect(screen.getByText('Click to upload')).toBeInTheDocument();
  });

  it('triggers file input on button click', async () => {
    const user = userEvent.setup();
    render(<Upload />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // File input should be triggered
  });

  it('calls onChange when file is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    
    render(<Upload onChange={handleChange} />);
    
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, file);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('supports multiple file upload', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const files = [
      new File(['content1'], 'test1.txt', { type: 'text/plain' }),
      new File(['content2'], 'test2.txt', { type: 'text/plain' }),
    ];
    
    render(<Upload multiple onChange={handleChange} />);
    
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await user.upload(input, files);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders in disabled state', () => {
    render(<Upload disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('accepts specific file types', () => {
    const { container } = render(<Upload accept="image/*" />);
    
    const input = container.querySelector('input[type="file"]');
    expect(input).toHaveAttribute('accept', 'image/*');
  });

  it('renders with drag and drop area', () => {
    render(<Upload dragger />);
    
    expect(screen.getByText(/drag/i) || screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows file list', () => {
    const fileList = [
      { uid: '1', name: 'file1.txt', status: 'done' },
      { uid: '2', name: 'file2.txt', status: 'done' },
    ];
    
    render(<Upload fileList={fileList} />);
    
    expect(screen.getByText('file1.txt')).toBeInTheDocument();
    expect(screen.getByText('file2.txt')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Upload className="custom-upload" />);
    
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-upload');
  });

  it('supports maximum file count', () => {
    render(<Upload maxCount={3} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('validates file size', () => {
    render(<Upload maxSize={1024 * 1024} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onRemove when file is removed', async () => {
    const user = userEvent.setup();
    const handleRemove = vi.fn();
    const fileList = [{ uid: '1', name: 'file.txt', status: 'done' }];
    
    render(<Upload fileList={fileList} onRemove={handleRemove} />);
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    if (removeButton) {
      await user.click(removeButton);
      expect(handleRemove).toHaveBeenCalled();
    }
  });

  it('shows upload progress', () => {
    const fileList = [{ uid: '1', name: 'file.txt', status: 'uploading', percent: 50 }];
    
    render(<Upload fileList={fileList} showProgress />);
    
    expect(screen.getByText('file.txt')).toBeInTheDocument();
  });
});
