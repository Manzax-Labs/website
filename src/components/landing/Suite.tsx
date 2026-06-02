import Section from './Section';
import BrandLogo from './BrandLogo';

const products = [
  { key: 'turnos', name: 'turnos', desc: 'Reservas y agenda para profesionales.' },
  { key: 'caja', name: 'caja', desc: 'Caja diaria y cierre para comercios.' },
  { key: 'stock', name: 'stock', desc: 'Inventario sin códigos absurdos.' },
  { key: 'facturas', name: 'facturas', desc: 'Facturación simple para PyMEs.' },
];

export default function Suite() {
  return (
    <Section className="block">
      <div className="container">
        <div className="eyebrow">Pensando en grande</div>
        <h2 className="section-title">La suite Manzax.</h2>
        <p className="section-lede" style={{ marginTop: '10px' }}>
          Consorcio es el primero. Tenemos otros nombres reservados — los vamos a construir cuando este esté
          hecho bien. Pocas cosas, en orden.
        </p>
        <div className="next-grid">
          {products.map((p) => (
            <div className={`next-card ${p.key}`} key={p.key}>
              <div className="lockup">
                <BrandLogo size={6} />
                <span className="w">
                  manzax <em>{p.name}</em>
                </span>
              </div>
              <div className="desc">{p.desc}</div>
              <span className="soon">en exploración</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
