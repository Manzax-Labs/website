import BrandLogo from './BrandLogo';

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Productos',
    links: [
      { label: 'Manzax Consorcio', href: '#producto' },
      { label: 'Turnos · en exploración', href: '#' },
      { label: 'Caja · en exploración', href: '#' },
      { label: 'Stock · en exploración', href: '#' },
      { label: 'Facturas · en exploración', href: '#' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Estatuto', href: '#' },
      { label: 'Manual de marca', href: '#' },
      { label: 'Contacto', href: 'mailto:hola@manzax.com' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Cómo funciona', href: '#features' },
      { label: 'Hablar con un fundador', href: 'mailto:hola@manzax.com' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Estado de la beta', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#producto" className="foot-brand">
              <BrandLogo size={12} />
              <span className="word">manzax</span>
            </a>
            <p className="foot-tagline">
              Pocas cosas, hechas bien. Software hecho en Argentina por 4 socios, sin VCs.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h6>{col.title}</h6>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bot">
          <div>© {new Date().getFullYear()} Manzax · Buenos Aires</div>
          <div>manzax.com</div>
        </div>
      </div>
    </footer>
  );
}
