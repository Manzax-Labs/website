import { render, screen } from '@testing-library/react';
import App from './App';

describe('Landing Manzax Consorcio (v4 — producto terminado)', () => {
  it('renderiza el titular del hero', () => {
    render(<App />);
    expect(screen.getByText('horas')).toBeInTheDocument();
    expect(screen.getByText(/Liquidá las expensas en/i)).toBeInTheDocument();
  });

  it('no menciona "beta" ni "cupos" en ningún lado', () => {
    const { container } = render(<App />);
    expect(container.textContent || '').not.toMatch(/beta/i);
    expect(container.textContent || '').not.toMatch(/cupos?/i);
  });

  it('muestra el precio real $1.425 por unidad', () => {
    render(<App />);
    expect(screen.getAllByText(/\$1\.425/).length).toBeGreaterThan(0);
  });

  it('destaca la Importación de comprobantes y el ahorro de horas', () => {
    render(<App />);
    expect(screen.getAllByText(/Importación de comprobantes/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/5 horas menos por edificio/i).length).toBeGreaterThan(0);
  });

  it('describe los sueldos sin prometer calcular el recibo', () => {
    const { container } = render(<App />);
    expect(screen.getByText(/Subís el recibo del encargado/i)).toBeInTheDocument();
    expect(container.textContent || '').not.toMatch(/calculamos el recibo/i);
  });

  it('renderiza las secciones nuevas (Migración, Pasos, FAQ)', () => {
    render(<App />);
    expect(screen.getByText('La migración no la hacés vos')).toBeInTheDocument();
    expect(screen.getByText('Tres pasos, todos los meses')).toBeInTheDocument();
    expect(screen.getByText('Lo que seguro te estás preguntando')).toBeInTheDocument();
  });

  it('tiene varios CTA "Empezá ahora"', () => {
    render(<App />);
    expect(screen.getAllByText('Empezá ahora').length).toBeGreaterThan(1);
  });

  it('renderiza la marca manzax en nav y footer', () => {
    render(<App />);
    expect(screen.getAllByText(/manzax/i).length).toBeGreaterThan(1);
  });
});
