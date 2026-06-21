import { useEffect, useState } from 'react';

/* Logo del nav: SVG oficial de marca (isotipo + wordmark). Negro por defecto (nav sólido);
   sobre el hero transparente se invierte a blanco vía filtro CSS. */

const links = [
  { label: 'Producto', href: '#producto' },
  { label: 'Funciones', href: '#hoy' },
  { label: 'Migración', href: '#migracion' },
  { label: 'Precios', href: '#precio' },
  { label: 'Preguntas', href: '#faq' },
];

const SECTION_IDS = ['producto', 'hoy', 'migracion', 'precio', 'faq'];

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // nav transparente sobre la imagen del hero → sólido al scrollear (estilo Calm)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // resalta el link de la sección visible al scrollear (mismo criterio que el diseño original)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive('#' + en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#producto" className="brand" aria-label="Manzax Consorcio — inicio">
          <img src="/manzax-logo.svg" alt="Manzax" className="brand-logo" />
        </a>
        <nav className="nav-links" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#sumate" className="btn btn-primary">
            Empezá ahora
          </a>
        </div>
      </div>
    </header>
  );
}
