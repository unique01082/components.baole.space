import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hover-card';

describe('HoverCard', () => {
  it('renders trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div>Card content</div>
        </HoverCardContent>
      </HoverCard>,
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows content on hover', async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div>Hover card content</div>
        </HoverCardContent>
      </HoverCard>,
    );

    await user.hover(screen.getByText('Hover me'));
    
    // Wait for content to appear
    expect(await screen.findByText('Hover card content')).toBeInTheDocument();
  });

  it('hides content when hover ends', async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div>Hover card content</div>
        </HoverCardContent>
      </HoverCard>,
    );

    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    expect(await screen.findByText('Hover card content')).toBeInTheDocument();
    
    await user.unhover(trigger);
    
    // Content should eventually be removed
    await waitFor(() => {
      expect(screen.queryByText('Hover card content')).not.toBeInTheDocument();
    });
  });

  it('renders with custom content', async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>@username</HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4>User Profile</h4>
            <p>User details here</p>
          </div>
        </HoverCardContent>
      </HoverCard>,
    );

    await user.hover(screen.getByText('@username'));
    
    expect(await screen.findByText('User Profile')).toBeInTheDocument();
    expect(screen.getByText('User details here')).toBeInTheDocument();
  });
});
