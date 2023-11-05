import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders with default props', () => {
    render(<Header />);
    const linkElement = screen.getByRole('link', { name: /nota de misterio/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('cursor-pointer');
    expect(linkElement).toHaveClass('p-4');
    expect(linkElement).toHaveClass('text-white');
    expect(linkElement).toHaveAttribute('href', '#');
  });

  it('applies custom class names', () => {
    const customClassName = 'custom-class';
    render(<Header className={customClassName} />);
    const containerDiv = screen.getByText(/nota de misterio/i).parentElement;
    expect(containerDiv).toHaveClass(customClassName);
  });

  it('renders with a full-width screen', () => {
    render(<Header />);
    const containerDiv = screen.getByText(/nota de misterio/i).parentElement;
    expect(containerDiv).toHaveClass('w-screen');
  });

  it('renders with a black background', () => {
    render(<Header />);
    const containerDiv = screen.getByText(/nota de misterio/i).parentElement;
    expect(containerDiv).toHaveClass('bg-black');
  });
});
