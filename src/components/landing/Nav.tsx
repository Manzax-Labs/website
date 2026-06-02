import type { MouseEvent } from 'react';
import BrandLogo from './BrandLogo';

const links = [
  { label: 'Producto', href: '#producto' },
  { label: 'Funciones', href: '#features' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Precio', href: '#precios' },
];

const NAV_HEIGHT = 80;

function scrollToHash(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Nav() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <header className="nav">
      <div className="container nav-row">
        <a href="#producto" className="brand" onClick={(e) => handleClick(e, '#producto')}>
          <BrandLogo size={12} />
          <span className="word">manzax</span>
        </a>
        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#" className="nav-login">
            Iniciar sesión
          </a>
          <a href="#precios" className="nav-cta" onClick={(e) => handleClick(e, '#precios')}>
            Pedir acceso →
          </a>
        </div>
      </div>
    </header>
  );
}
