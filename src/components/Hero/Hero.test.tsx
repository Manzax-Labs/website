import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Menos promesas. Más producto.')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/Somos Manzax, un equipo chico/)).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Ver qué hacemos')).toBeInTheDocument();
    expect(screen.getByText('Conocé al equipo')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Hero />);
    const logo = screen.getByAltText('Manzax logo');
    expect(logo).toBeInTheDocument();
  });
}); 