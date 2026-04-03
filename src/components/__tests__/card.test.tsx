import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction
} from '../card';

describe('Card', () => {
  it('renders card component', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders card with header', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>
    );
    
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
  });

  it('renders card with content', () => {
    render(
      <Card>
        <CardContent>
          <p>This is the card content</p>
        </CardContent>
      </Card>
    );
    
    expect(screen.getByText('This is the card content')).toBeInTheDocument();
  });

  it('renders card with footer', () => {
    render(
      <Card>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    );
    
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders complete card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-card">Content</Card>);
    expect(container.querySelector('.custom-card')).toBeInTheDocument();
  });

  it('renders card action', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardAction>
            <button>More</button>
          </CardAction>
        </CardHeader>
      </Card>
    );
    
    expect(screen.getByText('More')).toBeInTheDocument();
  });

  it('supports interactive cards', () => {
    const { container } = render(
      <Card className="cursor-pointer hover:bg-gray-100">
        Clickable Card
      </Card>
    );
    
    expect(screen.getByText('Clickable Card')).toBeInTheDocument();
  });
});
