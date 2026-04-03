import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Code } from '../code';

describe('Code', () => {
  it('renders inline code', () => {
    render(<Code>const x = 10;</Code>);
    
    expect(screen.getByText('const x = 10;')).toBeInTheDocument();
  });

  it('renders block code', () => {
    const code = `function hello() {
  console.log('Hello World');
}`;
    
    render(<Code block>{code}</Code>);
    
    // Check for code element containing the text
    const codeElement = screen.getByText(/function hello/);
    expect(codeElement).toBeInTheDocument();
  });

  it('renders block code with language label', () => {
    render(
      <Code block language="javascript">
        console.log('test');
      </Code>,
    );
    
    expect(screen.getByText('javascript')).toBeInTheDocument();
    expect(screen.getByText("console.log('test');")).toBeInTheDocument();
  });

  it('renders inline code without language label', () => {
    render(<Code language="typescript">const foo = 'bar';</Code>);
    
    // Language label should not show for inline code
    expect(screen.queryByText('typescript')).not.toBeInTheDocument();
    expect(screen.getByText("const foo = 'bar';")).toBeInTheDocument();
  });

  it('renders with custom className for inline code', () => {
    render(<Code className="custom-class">code</Code>);
    
    const codeElement = screen.getByText('code');
    expect(codeElement).toHaveClass('custom-class');
  });

  it('renders with custom className for block code', () => {
    render(
      <Code block className="custom-block-class">
        code block
      </Code>,
    );
    
    const preElement = screen.getByText('code block').closest('pre');
    expect(preElement).toHaveClass('custom-block-class');
  });

  it('renders multiline block code properly', () => {
    const multilineCode = `line 1
line 2
line 3`;
    
    render(<Code block>{multilineCode}</Code>);
    
    // Check for presence of lines instead of exact match
    expect(screen.getByText(/line 1/)).toBeInTheDocument();
    expect(screen.getByText(/line 2/)).toBeInTheDocument();
    expect(screen.getByText(/line 3/)).toBeInTheDocument();
  });

  it('renders block code with language and custom className', () => {
    render(
      <Code block language="python" className="custom-python-class">
        print('Hello')
      </Code>,
    );
    
    expect(screen.getByText('python')).toBeInTheDocument();
    expect(screen.getByText("print('Hello')")).toBeInTheDocument();
  });
});
