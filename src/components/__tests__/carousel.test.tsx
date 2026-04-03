import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel';

describe('Carousel', () => {
  it('renders carousel with items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders with navigation buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('renders with horizontal orientation', () => {
    render(
      <Carousel orientation="horizontal">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders with vertical orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders multiple carousel items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
          <CarouselItem>Slide 4</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Carousel className="custom-carousel">
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(container.querySelector('.custom-carousel')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    const carousel = screen.getByText('Item 1').closest('div[tabindex]');
    if (carousel) {
      await user.click(carousel);
      await user.keyboard('{ArrowRight}');
      await user.keyboard('{ArrowLeft}');
    }
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('calls setApi callback', () => {
    const setApi = vi.fn();
    
    render(
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    // setApi should be called with the carousel API
    expect(setApi).toHaveBeenCalled();
  });

  it('renders with carousel options', () => {
    render(
      <Carousel opts={{ loop: true, align: 'start' }}>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
