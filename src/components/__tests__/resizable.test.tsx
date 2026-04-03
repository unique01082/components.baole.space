import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../resizable';

describe('Resizable', () => {
  it('renders ResizablePanelGroup', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(container.querySelector('[data-panel-group]')).toBeInTheDocument();
  });

  it('renders ResizablePanel with content', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div>Panel content</div>
        </ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(screen.getByText('Panel content')).toBeInTheDocument();
  });

  it('renders multiple ResizablePanels', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.getByText('Panel 2')).toBeInTheDocument();
  });

  it('renders ResizableHandle', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(container.querySelector('[data-panel-resize-handle-id]')).toBeInTheDocument();
  });

  it('renders ResizableHandle with handle', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
  });

  it('renders with vertical direction', () => {
    const { container } = render(
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    const panelGroup = container.querySelector('[data-panel-group]');
    expect(panelGroup).toHaveAttribute('data-panel-group-direction', 'vertical');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal" className="custom-resize">
        <ResizablePanel>Panel</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    const panelGroup = container.querySelector('[data-panel-group]');
    expect(panelGroup).toHaveClass('custom-resize');
  });

  it('renders with default sizes', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>,
    );
    
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.getByText('Panel 2')).toBeInTheDocument();
  });
});
