import type { ReactNode } from 'react';
import Section from './Section';

const ico = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  'aria-hidden': true,
};

const features: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg {...ico}>
        <path d="M3 3h18v4H3zM3 11h18v10H3z" />
        <path d="M7 15h6" />
      </svg>
    ),
    title: 'Liquidación guiada',
    desc: 'Wizard de 4 pasos para cerrar el mes. Coeficientes y prorrateos automáticos. PDF y email a los propietarios al final.',
  },
  {
    icon: (
      <svg {...ico}>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    ),
    title: 'Cobranzas con intereses',
    desc: 'Moras y descuentos por pago anticipado, calculados solos. Sin fórmulas en Excel ni discusiones por mensaje.',
  },
  {
    icon: (
      <svg {...ico}>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
    title: 'Portales para vecinos e inquilinos',
    desc: 'Cada UF tiene su acceso propio. Inquilinos también — donde nadie más se los da. Un reclamo menos para vos.',
  },
  {
    icon: (
      <svg {...ico}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Tu primer mes con IA',
    desc: 'Subís tu última liquidación en PDF y leemos las unidades, coeficientes y proveedores. Empezás sin cargar nada a mano.',
  },
  {
    icon: (
      <svg {...ico}>
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Multi-edificio',
    desc: 'Un solo login, todos tus consorcios. Saltás de un edificio a otro sin perder el contexto ni los filtros.',
  },
  {
    icon: (
      <svg {...ico}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Auditoría completa',
    desc: 'Cada movimiento queda registrado. Si un propietario reclama, en 30 segundos sabés qué se pagó, cuándo y por qué.',
  },
];

export default function Features() {
  return (
    <Section className="block" id="features">
      <div className="container">
        <div className="features-head">
          <div>
            <div className="eyebrow">Lo que hace por vos</div>
            <h2 className="section-title">
              Lo aburrido del consorcio,
              <br />
              resuelto.
            </h2>
          </div>
          <p className="section-lede">
            Pocas funciones, hechas bien. No es un ERP que hace 800 cosas mal: es un software para administrar
            consorcios, pensado por gente que entendió cómo funciona un edificio en Argentina después de hablar
            con 65+ administradores.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <div className="ico">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
