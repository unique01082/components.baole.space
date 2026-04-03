import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading, Text } from '../typography';

describe('Typography', () => {
  describe('Heading', () => {
    it('renders h1 heading', () => {
      render(<Heading level="h1">H1 Heading</Heading>);
      
      const heading = screen.getByText('H1 Heading');
      expect(heading.tagName).toBe('H1');
    });

    it('renders h2 heading', () => {
      render(<Heading level="h2">H2 Heading</Heading>);
      
      const heading = screen.getByText('H2 Heading');
      expect(heading.tagName).toBe('H2');
    });

    it('renders h3 heading', () => {
      render(<Heading level="h3">H3 Heading</Heading>);
      
      const heading = screen.getByText('H3 Heading');
      expect(heading.tagName).toBe('H3');
    });

    it('renders with gradient', () => {
      render(<Heading level="h1" gradient>Gradient Heading</Heading>);
      
      expect(screen.getByText('Gradient Heading')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Heading level="h2" className="custom-heading">Custom</Heading>);
      
      expect(screen.getByText('Custom')).toHaveClass('custom-heading');
    });

    it('renders with custom as prop', () => {
      render(<Heading as="h5" level="h2">Custom Element</Heading>);
      
      const heading = screen.getByText('Custom Element');
      expect(heading.tagName).toBe('H5');
    });
  });

  describe('Text', () => {
    it('renders text component', () => {
      render(<Text>Text content</Text>);
      
      expect(screen.getByText('Text content')).toBeInTheDocument();
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Text size="sm">Small text</Text>);
      expect(screen.getByText('Small text')).toBeInTheDocument();
      
      rerender(<Text size="md">Medium text</Text>);
      expect(screen.getByText('Medium text')).toBeInTheDocument();
      
      rerender(<Text size="lg">Large text</Text>);
      expect(screen.getByText('Large text')).toBeInTheDocument();
    });

    it('renders with variant', () => {
      render(<Text variant="muted">Muted text</Text>);
      
      expect(screen.getByText('Muted text')).toBeInTheDocument();
    });

    it('renders as different HTML elements', () => {
      render(<Text as="span">Span text</Text>);
      
      const text = screen.getByText('Span text');
      expect(text.tagName).toBe('SPAN');
    });

    it('renders with custom className', () => {
      render(<Text className="custom-text">Custom</Text>);
      
      expect(screen.getByText('Custom')).toHaveClass('custom-text');
    });
  });

  describe('Paragraph', () => {
    it('renders paragraph', () => {
      render(<Text as="p">Paragraph content</Text>);
      
      const para = screen.getByText('Paragraph content');
      expect(para.tagName).toBe('P');
    });

    it('renders with custom className', () => {
      render(<Text as="p" className="custom-para">Custom paragraph</Text>);
      
      expect(screen.getByText('Custom paragraph')).toHaveClass('custom-para');
    });

    it('renders long paragraph', () => {
      const longText = 'This is a long paragraph with multiple sentences. It should render properly with all the text visible.';
      render(<Text as="p">{longText}</Text>);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });
});
