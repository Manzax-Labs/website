import { render, screen } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../contexts/ThemeContext';

describe('Header', () => {
  it('renders the Manzax brand', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText('Manzax')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText('Qué hacemos')).toBeInTheDocument();
    expect(screen.getByText('Principios')).toBeInTheDocument();
    expect(screen.getByText('Equipo')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('renders the theme dropdown', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // The dropdown should show the current theme name
    expect(screen.getByText('Forest')).toBeInTheDocument();
  });
}); 