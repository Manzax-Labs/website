import { render, screen } from '@testing-library/react';
import App from './App';

describe('Landing Manzax Consorcio', () => {
  it('renderiza el titular del hero', () => {
    render(<App />);
    expect(screen.getByText(/Administrá tus consorcios/)).toBeInTheDocument();
    expect(screen.getByText('cabeza despejada')).toBeInTheDocument();
  });

  it('muestra el chip de beta privada y los CTAs', () => {
    render(<App />);
    expect(screen.getByText('beta privada')).toBeInTheDocument();
    expect(screen.getByText('Pedir acceso a la beta →')).toBeInTheDocument();
  });

  it('renderiza las funciones clave', () => {
    render(<App />);
    expect(screen.getByText('Liquidación guiada')).toBeInTheDocument();
    expect(screen.getByText('Cobranzas con intereses')).toBeInTheDocument();
    expect(screen.getByText('Auditoría completa')).toBeInTheDocument();
  });

  it('renderiza precios y la suite', () => {
    render(<App />);
    expect(screen.getByText(/no por administrador/)).toBeInTheDocument();
    expect(screen.getByText('La suite Manzax.')).toBeInTheDocument();
  });

  it('renderiza la marca en la navegación', () => {
    render(<App />);
    // "manzax" aparece en nav, hero lockup, footer, suite, mockup
    expect(screen.getAllByText(/manzax/i).length).toBeGreaterThan(1);
  });
});
