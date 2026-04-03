import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from '../layout';

describe('Layout', () => {
  it('renders layout with children', () => {
    render(
      <Layout>
        <div>Layout content</div>
      </Layout>,
    );
    
    expect(screen.getByText('Layout content')).toBeInTheDocument();
  });

  it('renders layout with header', () => {
    render(
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContent>Content</LayoutContent>
      </Layout>,
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders layout with sider', () => {
    render(
      <Layout>
        <LayoutSider>Sidebar</LayoutSider>
        <LayoutContent>Content</LayoutContent>
      </Layout>,
    );
    
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders layout with footer', () => {
    render(
      <Layout>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>,
    );
    
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders full layout structure', () => {
    render(
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutSider>Sidebar</LayoutSider>
          <LayoutContent>Content</LayoutContent>
        </Layout>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>,
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Layout className="custom-layout">
        <div>Content</div>
      </Layout>,
    );
    
    expect(container.firstChild).toHaveClass('custom-layout');
  });
});

describe('LayoutSider', () => {
  it('renders with default width', () => {
    const { container } = render(
      <LayoutSider>Sidebar</LayoutSider>,
    );
    
    const sider = container.querySelector('aside');
    expect(sider).toHaveStyle({ width: '256px' });
  });

  it('renders with custom width', () => {
    const { container } = render(
      <LayoutSider width={300}>Sidebar</LayoutSider>,
    );
    
    const sider = container.querySelector('aside');
    expect(sider).toHaveStyle({ width: '300px' });
  });

  it('renders collapsed', () => {
    const { container } = render(
      <LayoutSider collapsed>Sidebar</LayoutSider>,
    );
    
    const sider = container.querySelector('aside');
    expect(sider).toHaveStyle({ width: '80px' });
  });

  it('renders with custom collapsedWidth', () => {
    const { container } = render(
      <LayoutSider collapsed collapsedWidth={60}>Sidebar</LayoutSider>,
    );
    
    const sider = container.querySelector('aside');
    expect(sider).toHaveStyle({ width: '60px' });
  });

  it('renders with string width', () => {
    const { container } = render(
      <LayoutSider width="20%">Sidebar</LayoutSider>,
    );
    
    const sider = container.querySelector('aside');
    expect(sider).toHaveStyle({ width: '20%' });
  });
});

describe('LayoutHeader', () => {
  it('renders header', () => {
    render(<LayoutHeader>Header content</LayoutHeader>);
    
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('is sticky by default', () => {
    const { container } = render(<LayoutHeader>Header</LayoutHeader>);
    
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky');
  });
});

describe('LayoutContent', () => {
  it('renders content', () => {
    render(<LayoutContent>Main content</LayoutContent>);
    
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });
});

describe('LayoutFooter', () => {
  it('renders footer', () => {
    render(<LayoutFooter>Footer content</LayoutFooter>);
    
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });
});
