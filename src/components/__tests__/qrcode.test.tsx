import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QRCode } from '../qrcode';

describe('QRCode', () => {
  it('renders QR code with value', () => {
    const { container } = render(<QRCode value="https://example.com" />);
    
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders with default size', () => {
    const { container } = render(<QRCode value="test" />);
    
    const canvas = container.querySelector('canvas') as HTMLCanvasElement;
    expect(canvas.width).toBe(128);
    expect(canvas.height).toBe(128);
  });

  it('renders with custom size', () => {
    const { container } = render(<QRCode value="test" size={200} />);
    
    const canvas = container.querySelector('canvas') as HTMLCanvasElement;
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(200);
  });

  it('renders with different error correction levels', () => {
    const { container, rerender } = render(
      <QRCode value="test" level="L" />,
    );
    expect(container.querySelector('canvas')).toBeInTheDocument();

    rerender(<QRCode value="test" level="M" />);
    expect(container.querySelector('canvas')).toBeInTheDocument();

    rerender(<QRCode value="test" level="Q" />);
    expect(container.querySelector('canvas')).toBeInTheDocument();

    rerender(<QRCode value="test" level="H" />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('renders with custom colors', () => {
    const { container } = render(
      <QRCode value="test" bgColor="#ffffff" fgColor="#000000" />,
    );
    
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('renders with margin', () => {
    const { container } = render(
      <QRCode value="test" includeMargin={true} />,
    );
    
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('renders with image overlay', () => {
    const { container } = render(
      <QRCode
        value="test"
        imageSettings={{
          src: '/logo.png',
          width: 30,
          height: 30,
          excavate: true,
        }}
      />,
    );
    
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <QRCode value="test" className="custom-qr" />,
    );
    
    expect(container.querySelector('.custom-qr')).toBeInTheDocument();
  });

  it('updates when value changes', () => {
    const { container, rerender } = render(<QRCode value="first" />);
    
    expect(container.querySelector('canvas')).toBeInTheDocument();

    rerender(<QRCode value="second" />);
    
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });
});
