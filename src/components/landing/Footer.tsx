import BrandLogo from './BrandLogo';

const productLinks = [
  { label: 'Cómo funciona', href: '#producto' },
  { label: 'Funciones', href: '#hoy' },
  { label: 'Migración', href: '#migracion' },
  { label: 'Precios', href: '#precio' },
];

const companyLinks = [
  { label: 'Manzax', href: 'https://www.manzax.com' },
  { label: 'Quiénes somos', href: 'https://www.manzax.com' },
  { label: 'Contacto', href: '#sumate' },
];

const legalLinks = [
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="logo" style={{ marginBottom: 14 }}>
              <span className="mark" aria-hidden="true">
                <BrandLogo size={22} />
              </span>{' '}
              <span className="word">manzax</span> <span className="sub">consorcio</span>
            </div>
            <p style={{ maxWidth: 300 }}>
              El sistema para administrar consorcios en Argentina. Un producto de Manzax.
            </p>
          </div>

          <nav className="foot-col" aria-label="Producto">
            <h4>Producto</h4>
            {productLinks.map((l) => (
              <a className="flink" href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="foot-col" aria-label="Empresa">
            <h4>Empresa</h4>
            {companyLinks.map((l) => (
              <a className="flink" href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="foot-col" aria-label="Legal">
            <h4>Legal</h4>
            {legalLinks.map((l) => (
              <a className="flink" href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© {year} Manzax · Buenos Aires, Argentina</span>
          <span>Hecho con cuidado en Buenos Aires.</span>
        </div>
      </div>
    </footer>
  );
}
