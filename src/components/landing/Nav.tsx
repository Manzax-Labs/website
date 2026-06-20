import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

/* El logo (.brand) queda EXACTAMENTE como estaba: isotipo + wordmark "manzax" en
   tinta oscura. Solo se actualizaron los links y el CTA. No tocar BrandLogo.tsx. */

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
    <header className="nav">
      <div className="container nav-row">
        <a href="#producto" className="brand" aria-label="Manzax Consorcio — inicio">
          <BrandLogo size={12} />
          <span className="word">manzax</span>
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
